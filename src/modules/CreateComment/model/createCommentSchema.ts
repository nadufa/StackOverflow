import z from 'zod';

export const createCommentSchema = z.object({
  content: z.string().trim().min(1, 'Field cannot be empty'),
});
