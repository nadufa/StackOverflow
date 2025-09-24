import { zodResolver } from '@hookform/resolvers/zod';
import Editor from '@monaco-editor/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Button, Select } from 'antd';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '../../../../app/routing';
import { fetchCreatePost, useGetLanguageOptions } from '../api';
import { createPostSchema, type CreatePostFormType } from '../model';

export const CreatePostForm = () => {
  const { data: languageOptions } = useGetLanguageOptions();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<CreatePostFormType>({
    defaultValues: { language: 'JavaScript', code: '' },
    resolver: zodResolver(createPostSchema),
    mode: 'onSubmit',
  });

  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: fetchCreatePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['auth'] });
    },
  });

  const submit = (data: CreatePostFormType) => {
    console.log('CreatePostForm ', data);
    mutate(data);
    reset();
    navigate(RoutePath.MY_POSTS);
  };

  const selectOptions = [
    { value: 'JavaScript', label: 'JavaScript' },
    { value: 'Python', label: 'Python' },
    { value: 'Java', label: 'Java' },
    { value: 'C/C++', label: 'C/C++' },
    { value: 'C#', label: 'C#' },
    { value: 'Go', label: 'Go' },
    { value: 'Kotlin', label: 'Kotlin' },
    { value: 'Ruby', label: 'Ruby' },
  ];

  const languageOptionsMapped =
    languageOptions?.data.map((lang) => ({
      value: lang,
      label: lang,
    })) ?? selectOptions;

  const language = watch('language');

  return (
    <form onSubmit={handleSubmit(submit)} className='flex flex-col gap-4 mx-auto w-full h-full'>
      <div className='flex flex-col gap-1'>
        <label htmlFor='language' className='text-gray-700 font-medium'>
          Language of your snippet:
        </label>
        <Controller
          control={control}
          name='language'
          render={({ field }) => <Select size='large' options={languageOptionsMapped} {...field} />}
        />
      </div>

      <div className='flex flex-col gap-1 flex-1 min-h-0'>
        <label htmlFor='code' className='text-gray-700 font-medium'>
          Code of your snippet:
        </label>
        <div className='relative flex-1 min-h-0 rounded-lg border border-gray-300 overflow-hidden'>
          <Controller
            control={control}
            name='code'
            render={({ field }) => (
              <Editor
                defaultLanguage='javascript'
                language={language}
                defaultValue=''
                height='100%'
                options={{
                  automaticLayout: true,
                  minimap: { enabled: false },
                  scrollBeyondLastLine: false,
                  padding: {
                    top: 5,
                    bottom: 5,
                  },
                }}
                {...field}
              />
            )}
          />
        </div>
        {errors.code && (
          <span className='absolute text-red-500 top-full text-sm'>{errors.code.message}</span>
        )}
      </div>

      <Button size='large' type='primary' htmlType='submit' className='!mt-3'>
        Create snippet
      </Button>
    </form>
  );
};
