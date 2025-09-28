import type z from 'zod';
import type { createPostSchema } from './createPostSchema';

export type CreatePostFormType = z.infer<typeof createPostSchema>;

export interface IPost {
  language: string;
  code: string;
}

export interface IReturnedPost extends IPost {
  id: number;
}

export interface IUser {
  id: number;
  username: string;
  role: string;
}

export interface IPostCreated extends IPost {
  user: IUser;
}

export interface IPostResponse {
  data: IPostCreated;
}

export interface ILanguageOptionsData {
  data: string[];
}

export interface ILanguageOptionsResponse {
  data: ILanguageOptionsData;
}
