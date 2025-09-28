import z from 'zod';

export const questionSchema = z.object({
  title: z.string().trim().min(1, 'Field cannot be empty').max(20, 'Maximum length: 20 characters'),
  description: z.string().trim(),
  code: z.string(),
});
