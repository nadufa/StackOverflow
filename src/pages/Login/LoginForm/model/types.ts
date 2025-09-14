import type z from 'zod';
import type { loginSchema } from './loginSchema';

export type LoginFormType = z.infer<typeof loginSchema>;
