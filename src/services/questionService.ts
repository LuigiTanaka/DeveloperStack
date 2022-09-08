import * as questionRepository from "../repositories/questionRepository";

import { TypeQuestionData } from "../types/questionTypes";

export async function createQuestion(askedBy: string, question: string) {
    const questionData: TypeQuestionData  = { askedBy, question }
    await questionRepository.insert(questionData);
}

export async function getQuestions() {
    const questions = await questionRepository.getQuestions();   
    return { questions };
}

export async function getQuestionWithAnswers(id: number) {
    const questionWithAnswers = await questionRepository.getQuestionWithAnswers(id);

    return questionWithAnswers;
}
