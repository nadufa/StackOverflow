import { useMutation, useQueryClient } from '@tanstack/react-query';
import { axiosInstance } from '../../../../../app/api/axiosInstance';

export const useEditUsername = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ username }: { username: string }) => axiosInstance.patch(`/me`, { username }),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['me'],
      });
    },
  });
};
