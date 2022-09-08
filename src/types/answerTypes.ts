import { answers } from "@prisma/client";

export type TypeAnswerData = Omit<answers, 'id'>;