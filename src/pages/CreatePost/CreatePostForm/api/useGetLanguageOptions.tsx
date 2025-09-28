import { API_ENDPOINTS, ApiClient } from '@/app/api';
import { useQuery } from '@tanstack/react-query';
import type { ILanguageOptionsData } from '../model';

const fetchLanguageOptions = (): Promise<ILanguageOptionsData> => {
  return ApiClient.GET<ILanguageOptionsData>({
    url: API_ENDPOINTS.SNIPPETS.LANGUAGES,
  });
};

export const useGetLanguageOptions = () => {
  return useQuery<ILanguageOptionsData, Error>({
    queryKey: ['snippets'],
    queryFn: () => fetchLanguageOptions(),
  });
};
