import type { RadioChangeEvent } from 'antd';
import type { ChangeEvent } from 'react';

interface IUser {
  id: number;
  username: string;
  role: string;
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
export interface IUsersSelect {
  data: IUser[];
  meta: IMeta;
  links: ILinks;
}
export interface IUsersResponse {
  data: IUsersSelect;
}

export type SortByValueType = 'id' | 'username' | 'role';
export type SortDirectionValueType = 'asc' | 'desc';

export interface ISearchState {
  inputText: string;
  sortByValue: SortByValueType;
  sortDirectionValue: SortDirectionValueType;
}

export interface IUsersSettings {
  searchState: ISearchState;
  setSearchInput: (e: ChangeEvent<HTMLInputElement>) => void;
  setSortByValue: (e: RadioChangeEvent) => void;
  setSortDirectionValue: (e: RadioChangeEvent) => void;
}
