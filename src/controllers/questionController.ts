import { Request, Response } from 'express';
import * as questionService from "../services/questionService";
import * as answerService from "../services/answerService";

export async function createQuestion(req: Request, res: Response) {
  const { askedBy, question } = req.body;

  await questionService.createQuestion(askedBy, question);

  res.status(201).send("create question!");
}

export async function createAnswer(req: Request, res: Response) {
  const { answeredBy, answer } = req.body;
  const { id } = req.params;

  await answerService.createAnswer(answeredBy, answer, Number(id));

  res.status(201).send("create answer!");
}

export async function get(req: Request, res: Response) {
  const questions = await questionService.getQuestions();

  res.status(200).send(questions);
}

export async function getById(req: Request, res: Response) {
  const { id } = req.params;

  const questionWithAnswers = await questionService.getQuestionWithAnswers(Number(id));

  res.status(200).send(questionWithAnswers);
}
