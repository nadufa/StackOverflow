import type z from 'zod';
import type { registerSchema } from './registerSchema';

export type RegisterFormType = z.infer<typeof registerSchema>;

export interface IRegisterRequest {
  username: string;
  password: string;
}

interface IUser {
  id: string;
  username: string;
  role: string;
}

export interface IRegisterData {
  data: IUser;
  message: string;
}

export interface IRegisterResponse {
  data: IRegisterData;
}
