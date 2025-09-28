import { useQuery } from '@tanstack/react-query';
import type { ILanguageOptionsData } from '../model';
import { ApiClient } from '@/app/api';

const fetchLanguageOptions = (): Promise<ILanguageOptionsData> => {
  return ApiClient.GET<ILanguageOptionsData>({
    url: `snippets/languages`,
  });
};

export const useGetLanguageOptions = () => {
  return useQuery<ILanguageOptionsData, Error>({
    queryKey: ['snippets'],
    queryFn: () => fetchLanguageOptions(),
  });
};
