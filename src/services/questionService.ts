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
    //testa se id existe
    const question = await questionRepository.getQuestionById(id);
    if (!question) {
        throw { type: "not_found" };
    }

    const questionWithAnswers = await questionRepository.getQuestionWithAnswers(id);

    return questionWithAnswers;
}
