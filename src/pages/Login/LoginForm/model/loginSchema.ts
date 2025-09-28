import z from 'zod';

export const loginSchema = z.object({
  username: z.string().trim().min(1, 'Field cannot be empty'),
  password: z
    .string()
    .min(4, 'Minimum length: 4 characters')
    .max(20, 'Maximum length: 20 characters'),
});
