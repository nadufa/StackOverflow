import z from 'zod';

export const createPostSchema = z.object({
  language: z
    .string()
    .trim()
    .min(1, 'Field cannot be empty')
    .max(20, 'Maximum length: 20 characters'),
  code: z.string().min(1, 'Field cannot be empty').max(300, 'Maximum length: 300 characters'),
});
