import z from 'zod';

export const changeUsernameSchema = z.object({
  newUsername: z
    .string()
    .trim()
    .min(5, 'Username must be longer than 5 characters')
    .max(50, 'Maximum length: 50 characters'),
});
