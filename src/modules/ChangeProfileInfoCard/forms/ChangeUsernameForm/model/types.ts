import type z from 'zod';
import type { changeUsernameSchema } from './changeUsernameSchema';

export type ChangeUsernameFormType = z.infer<typeof changeUsernameSchema>;
