import type z from 'zod';
import type { registerSchema } from './registerSchema';

export type RegisterFormType = z.infer<typeof registerSchema>;
