import z from 'zod';

export const addAnswerSchema = z.object({
  content: z.string().trim().min(1, 'Field cannot be empty'),
});
