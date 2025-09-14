import type z from 'zod';
import type { changePasswordSchema } from './changePasswordSchema';

export type ChangePasswordFormType = z.infer<typeof changePasswordSchema>;
