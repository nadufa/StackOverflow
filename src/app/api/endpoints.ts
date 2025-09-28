export const API_ENDPOINTS = {
  AUTH: {
    BASE: 'auth',
    LOGIN: 'auth/login',
    LOGOUT: 'auth/logout',
  },
  USER: {
    PROFILE: 'me',
    PASSWORD: 'me/password',
    DELETE: 'me',
    STATISTIC: (userId: string) => `users/${userId}/statistic`,
  },
  REGISTER: 'register',
  SNIPPETS: {
    BASE: 'snippets',
    LANGUAGES: 'snippets/languages',
    MARK: (snippetId: string) => `snippets/${snippetId}/mark`,
    SINGLE: (snippetId: string) => `snippets/${snippetId}`,
  },
  COMMENTS: {
    BASE: 'comments',
  },
  QUESTIONS: {
    BASE: 'questions',
    SINGLE: (questionId: number) => `questions/${questionId}`,
  },
  ANSWERS: {
    BASE: 'answers',
    SINGLE: (answerId: number) => `answers/${answerId}`,
    BY_QUESTION: (questionId: number) => `answers?questionId=${questionId}`,
  },
} as const;
