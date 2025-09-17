import z from 'zod';

export const questionSchema = z.object({
  title: z.string().trim().min(1, 'Field cannot be empty').max(20, 'Maximum length: 20 characters'),
  description: z.string().trim().max(100, 'Maximum length: 100 characters'),
  code: z.string().max(300, 'Maximum length: 300 characters'),
});
