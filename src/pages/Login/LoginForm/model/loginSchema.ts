import z from 'zod';

export const loginSchema = z.object({
  username: z
    .string()
    .trim()
    .min(1, 'Field cannot be empty')
    .max(20, 'Maximum length: 20 characters'),
  password: z
    .string()
    .min(8, 'Minimum length: 8 characters')
    .max(20, 'Maximum length: 20 characters'),
});
