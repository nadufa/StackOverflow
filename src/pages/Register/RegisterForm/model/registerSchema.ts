import z from 'zod';

export const registerSchema = z
  .object({
    username: z
      .string()
      .trim()
      .min(1, 'Field cannot be empty')
      .max(20, 'Maximum length: 20 characters'),
    password: z
      .string()
      .min(8, 'Minimum length: 8 characters')
      .max(20, 'Maximum length: 20 characters'),
    confirmPassword: z
      .string()
      .min(8, 'Minimum length: 8 characters')
      .max(20, 'Maximum length: 20 characters'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });
