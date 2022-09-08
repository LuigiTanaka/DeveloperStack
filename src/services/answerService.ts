import * as answerRepository from "../repositories/answerRepository";

import { TypeAnswerData } from "../types/answerTypes";

export async function createAnswer(answeredBy: string, answer: string, id: number) {
    const answerData: TypeAnswerData  = { answeredBy, answer, questionId: id }
    await answerRepository.insert(answerData);
}
