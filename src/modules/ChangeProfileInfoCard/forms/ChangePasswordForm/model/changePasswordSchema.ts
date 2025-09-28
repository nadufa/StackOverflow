import z from 'zod';

export const changePasswordSchema = z
  .object({
    oldPassword: z.string(),
    newPassword: z.string().min(4, 'Minimum length: 4 characters'),
    confirmNewPassword: z.string().min(4, 'Minimum length: 8 characters'),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: 'New passwords do not match',
    path: ['confirmNewPassword'],
  });
