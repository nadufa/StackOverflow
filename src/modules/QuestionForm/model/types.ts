import type z from 'zod';
import type { questionSchema } from './questionSchema';

export type QuestionFormType = z.infer<typeof questionSchema>;

interface IUser {
  id: string;
  username: string;
  role: string;
}

export interface IQuestionRequest {
  title: string;
  description: string;
  attachedCode: string;
}

interface IQuestion extends IQuestionRequest {
  id: string;
  user: IUser;
}

export interface IQuestionData {
  data: IQuestion;
}

export interface IQuestionResponse {
  data: IQuestionData;
}
