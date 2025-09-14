import z from 'zod';

export const changeUsernameSchema = z.object({
  newUsername: z
    .string()
    .trim()
    .min(1, 'Field cannot be empty')
    .max(20, 'Maximum length: 20 characters'),
});
