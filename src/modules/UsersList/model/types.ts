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
