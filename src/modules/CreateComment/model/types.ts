import z from 'zod';
import { createCommentSchema } from './createCommentSchema';

export type MarkType = 'like' | 'dislike';
export type CreateCommentFormType = z.infer<typeof createCommentSchema>;

export interface IUser {
  id: string;
  username: string;
  role: string;
}

interface IMark {
  id: string;
  type: MarkType;
  user: IUser;
}

export interface IComment {
  id: string;
  content: string;
  user: IUser;
}

export interface IPost {
  id: string;
  code: string;
  language: string;
  marks: IMark[];
  user: IUser;
  comments: IComment[];
}

export interface IPostResponse {
  data: IPost;
}

export interface ICommentRequest {
  content: string;
  snippetId: number;
}

export interface ICommentResponseData extends IComment {
  user: IUser;
}

export interface ICommentResponse {
  data: ICommentResponseData;
}
