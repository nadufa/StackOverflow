import z from 'zod';

export const changePasswordSchema = z
  .object({
    oldPassword: z
      .string()
      .min(8, 'Minimum length: 8 characters')
      .max(20, 'Maximum length: 20 characters'),
    newPassword: z
      .string()
      .min(8, 'Minimum length: 8 characters')
      .max(20, 'Maximum length: 20 characters'),
    confirmNewPassword: z
      .string()
      .min(8, 'Minimum length: 8 characters')
      .max(20, 'Maximum length: 20 characters'),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: 'New passwords do not match',
    path: ['confirmNewPassword'],
  });
