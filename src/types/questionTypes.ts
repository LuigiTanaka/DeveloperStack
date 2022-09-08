import { questions } from "@prisma/client";

export type TypeQuestionData = Omit<questions, 'id'>;