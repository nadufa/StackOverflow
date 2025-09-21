import type { ISearchState } from '../../model/types';

export interface IGetParams extends ISearchState {
  page: number;
  limit?: number;
}

export const getParams = ({
  inputText,
  sortByValue,
  sortDirectionValue,
  page,
  limit = 20,
}: IGetParams) => {
  const params = [
    {
      condition: inputText,
      key: 'search',
      value: inputText,
    },
    {
      condition: sortByValue,
      key: 'sortBy',
      value: `${sortByValue}%3A${sortDirectionValue.toUpperCase()}`,
    },
    { condition: page, key: 'page', value: page },
    { condition: true, key: 'limit', value: limit },
  ]
    .map(({ condition, key, value }) => {
      return `${condition ? `&${key}=${value}` : ''}`;
    })
    .join('')
    .slice(1);

  return params.length ? '/?' + params : '';
};
