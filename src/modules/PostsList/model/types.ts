import type { RadioChangeEvent } from 'antd';
import type { ChangeEvent } from 'react';

export type SortByValueType = 'id' | 'code' | 'language';
export type SortDirectionValueType = 'asc' | 'desc';
export type MarkType = 'like' | 'dislike';

export interface IUser {
  id: string;
  username: string;
  role: string;
}

export interface IMark {
  id: string;
  type: MarkType;
  user: IUser;
}

interface IComment {
  id: string;
  content: string;
}

interface IMeta {
  itemsPerPage: number;
  totalItems: number;
  currentPage: number;
  totalPages: number;
  sortBy: [string, 'ASC' | 'DESC'][];
  searchBy: string[];
  search: string;
  select: string[];
  filter: Record<string, any>;
}

interface ILinks {
  first: string;
  previous: string;
  current: string;
  next: string;
  last: string;
}

interface IPost {
  id: string;
  code: string;
  language: string;
  marks: IMark[];
  user: IUser;
  comments: IComment[];
}

export interface IPostsSelect {
  data: IPost[];
  meta: IMeta;
  links: ILinks;
}

export interface IPostsResponse {
  data: IPostsSelect;
}

export interface IMarkValue {
  mark: MarkType;
}

export interface IMarkData {
  data: IMarkValue;
  message: string;
}

export interface IMarkResponse {
  data: IMarkData;
}

export interface ISearchState {
  userId: string | null;
  inputText: string;
  sortByValue: SortByValueType;
  sortDirectionValue: SortDirectionValueType;
}

export interface IPostsSettings {
  searchState: ISearchState;
  setSearchInput: (e: ChangeEvent<HTMLInputElement>) => void;
  setSortByValue: (e: RadioChangeEvent) => void;
  setSortDirectionValue: (e: RadioChangeEvent) => void;
}
