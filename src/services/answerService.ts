import * as answerRepository from "../repositories/answerRepository";
import * as questionRepository from "../repositories/questionRepository";

import { TypeAnswerData } from "../types/answerTypes";

export async function createAnswer(answeredBy: string, answer: string, id: number) {
    //testa se id existe
    const question = await questionRepository.getQuestionById(id);
    if (!question) {
        throw { type: "not_found" };
    }

    const answerData: TypeAnswerData  = { answeredBy, answer, questionId: id }
    await answerRepository.insert(answerData);
}
