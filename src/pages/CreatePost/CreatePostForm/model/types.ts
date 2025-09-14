import type z from 'zod';
import type { createPostSchema } from './createPostSchema';

export type CreatePostFormType = z.infer<typeof createPostSchema>;
