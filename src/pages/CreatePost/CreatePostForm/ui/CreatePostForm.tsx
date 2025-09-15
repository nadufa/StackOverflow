import { zodResolver } from '@hookform/resolvers/zod';
import Editor from '@monaco-editor/react';
import { Button, Select } from 'antd';
import { Controller, useForm } from 'react-hook-form';
import { createPostSchema, type CreatePostFormType } from '../model';

export const CreatePostForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<CreatePostFormType>({
    defaultValues: { snippetLanguage: 'JavaScript', snippetCode: '' },
    resolver: zodResolver(createPostSchema),
    mode: 'onSubmit',
  });

  const submit = (data: CreatePostFormType) => {
    console.log('CreatePostForm ', data);
    reset();
  };

  const selectOptions = [
    { value: 'javascript', label: 'JavaScript' },
    { value: 'python', label: 'Python' },
    { value: 'go', label: 'Go' },
    { value: 'c++', label: 'C++' },
    { value: 'c#', label: 'C#' },
    { value: 'ruby', label: 'Ruby' },
    { value: 'rust', label: 'Rust' },
    { value: 'java', label: 'Java' },
    { value: 'html', label: 'HTML' },
  ];

  const snippetLanguage = watch('snippetLanguage');

  return (
    <form onSubmit={handleSubmit(submit)} className='flex flex-col gap-4 mx-auto w-full h-full'>
      <div className='flex flex-col gap-1'>
        <label htmlFor='snippetLanguage' className='text-gray-700 font-medium'>
          Language of your snippet:
        </label>
        <Controller
          control={control}
          name='snippetLanguage'
          render={({ field }) => <Select size='large' options={selectOptions} {...field} />}
        />
      </div>

      <div className='flex flex-col gap-1 flex-1 min-h-0'>
        <label htmlFor='snippetCode' className='text-gray-700 font-medium'>
          Code of your snippet:
        </label>
        <div className='relative flex-1 min-h-0 rounded-lg border border-gray-300 overflow-hidden'>
          <Controller
            control={control}
            name='snippetCode'
            render={({ field }) => (
              <Editor
                defaultLanguage='javascript'
                language={snippetLanguage}
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
        {errors.snippetCode && (
          <span className='absolute text-red-500 top-full text-sm'>
            {errors.snippetCode.message}
          </span>
        )}
      </div>

      <Button size='large' type='primary' htmlType='submit' className='!mt-3'>
        Create snippet
      </Button>
    </form>
  );
};
