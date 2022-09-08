import { prisma } from "../config/database";

import { TypeAnswerData } from "../types/answerTypes";

export async function insert(answerData: TypeAnswerData) {
    await prisma.answers.create({ data: answerData });
}