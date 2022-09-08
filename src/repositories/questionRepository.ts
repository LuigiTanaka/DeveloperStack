import { prisma } from "../config/database";

import { TypeQuestionData } from "../types/questionTypes";

export async function insert(questionData: TypeQuestionData) {
    await prisma.questions.create({ data: questionData })
}

export async function getQuestionById(id: number) {
    const question = await prisma.questions.findUnique({ where: { id } });
    return question;
}

export async function getQuestions() {
    const questions = await prisma.questions.findMany();
    return questions;
}

export async function getQuestionWithAnswers(id: number) {
    const questionWithAnswers = await prisma.questions.findUnique({ 
        where: { 
            id 
        },
        select: {
            id: true,
            askedBy: true,
            question: true,
            answers: {
                select: {
                    answeredBy: true,
                    answer: true,
                },
            },
        },
     });

     return questionWithAnswers;
}
