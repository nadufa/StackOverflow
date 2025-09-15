import z from 'zod';

export const createPostSchema = z.object({
  snippetLanguage: z
    .string()
    .trim()
    .min(1, 'Field cannot be empty')
    .max(20, 'Maximum length: 20 characters'),
  snippetCode: z.string().max(300, 'Maximum length: 300 characters'),
});
