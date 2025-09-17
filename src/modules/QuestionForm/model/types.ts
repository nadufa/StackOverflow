import type z from 'zod';
import type { questionSchema } from './questionSchema';

export type QuestionFormType = z.infer<typeof questionSchema>;
