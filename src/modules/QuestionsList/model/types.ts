import type { RadioChangeEvent } from 'antd';
import type { ChangeEvent } from 'react';

export interface IQuestion {
  id: string;
  title: string;
  description: string;
  attachedCode: string;
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
