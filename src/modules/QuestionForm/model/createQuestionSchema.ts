import z from 'zod';

export const createQuestionSchema = z.object({
  title: z.string().trim().min(1, 'Field cannot be empty'),
  description: z.string().trim().min(1, 'Field cannot be empty'),
  code: z.string().trim().min(1, 'Field cannot be empty'),
});
