import type z from 'zod';
import type { loginSchema } from './loginSchema';

export type LoginFormType = z.infer<typeof loginSchema>;

export interface IAuthUserData {
  id: number;
  username: string;
  role: string;
}

export interface IAuthResponse {
  data: IAuthUserData;
}

export interface ILoginRequest {
  username: string;
  password: string;
}

export interface ILoginResponse extends IAuthResponse {
  message: string;
}
