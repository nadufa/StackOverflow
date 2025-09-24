import type { ISearchState } from './types';

export const initialState: ISearchState = {
  userId: '',
  inputText: '',
  sortByValue: 'id',
  sortDirectionValue: 'asc',
};
