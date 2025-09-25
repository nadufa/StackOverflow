import { useQuery } from '@tanstack/react-query';
import { ApiClient } from '../../../../app/api';
import type { ILanguageOptionsData } from '../model';

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
