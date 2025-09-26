export interface IUserDelete {
  username: string;
  role: string;
}

export interface IUserDeleteData {
  data: IUserDelete;
}

export interface IUserDeleteResponse {
  data: IUserDeleteData;
}
