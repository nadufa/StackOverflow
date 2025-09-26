import type { RadioChangeEvent } from 'antd';
import type { ChangeEvent } from 'react';
import z from 'zod';
import { addAnswerSchema } from './addAnswerSchema';

export type AddAnswerFormType = z.infer<typeof addAnswerSchema>;

interface IQuestionBase {
  id: string;
  title: string;
  description: string;
  attachedCode: string;
}

export interface IQuestionProps extends IQuestionBase {
  isResolved: boolean;
  user: {
    id: string;
    username: string;
    role: string;
  };
}

export interface IQuestion extends IQuestionBase {
  isResolved: boolean;
  user: {
    id: string;
    username: string;
    role: string;
  };
  answers: {
    id: string;
    content: string;
    isCorrect: boolean;
  }[];
}

interface IMeta {
  itemsPerPage: number;
  totalItems: number;
  currentPage: number;
  totalPages: number;
  sortBy: [string, 'ASC' | 'DESC'][];
  searchBy: string[];
  search: string;
}

interface ILinks {
  current: string;
}

export interface IQuestionsSelect {
  data: IQuestion[];
  meta: IMeta;
  links: ILinks;
}

export interface IQuestionsResponse {
  data: IQuestionsSelect;
}

export type SortByValueType = 'id' | 'title' | 'description' | 'attachedCode';
export type SortDirectionValueType = 'asc' | 'desc';

export interface ISearchState {
  inputText: string;
  sortByValue: SortByValueType;
  sortDirectionValue: SortDirectionValueType;
}

export interface IQuestionsSettings {
  searchState: ISearchState;
  setSearchInput: (e: ChangeEvent<HTMLInputElement>) => void;
  setSortByValue: (e: RadioChangeEvent) => void;
  setSortDirectionValue: (e: RadioChangeEvent) => void;
}

export interface IUser {
  id: string;
  username: string;
  role: string;
}

export interface IAnswerBase {
  id: string;
  content: string;
  isCorrect: boolean;
}

export interface IAnswer extends IAnswerBase {
  question: IQuestionBase;
  user: IUser;
}

export interface IAnswerRequest {
  content: string;
  questionId: number;
}

export interface IAnswerData {
  data: IAnswer;
}

export interface IAnswerResponse {
  data: IAnswerData;
}

export interface IDeleteQuestionResponse {
  data: IQuestion;
}

export interface IDeleteAnswerResponse {
  data: IAnswerBase;
}

export interface IQuestionAnswer extends IAnswerBase {
  user: IUser;
}

export interface IQuestionAnswerData {
  data: IQuestionAnswer[];
}

export interface IQuestionAnswerResponse {
  data: IQuestionAnswerData;
}
