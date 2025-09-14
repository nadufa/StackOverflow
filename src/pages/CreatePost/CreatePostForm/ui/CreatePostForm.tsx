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
  } = useForm<CreatePostFormType>({
    defaultValues: { snippetLangiage: 'JavaScript', snippetCode: '' },
    resolver: zodResolver(createPostSchema),
    mode: 'onSubmit',
  });

  const submit = (data: CreatePostFormType) => {
    console.log('CreatePostForm ', data);
    reset();
  };

  const selectOptions = [
    { value: 'JavaScript', label: 'JavaScript' },
    { value: 'Python', label: 'Python' },
    { value: 'Go', label: 'Go' },
    { value: 'C++', label: 'C++' },
    { value: 'C#', label: 'C#' },
    { value: 'Ruby', label: 'Ruby' },
    { value: 'Rust', label: 'Rust' },
    { value: 'Java', label: 'Java' },
    { value: 'Kotlin', label: 'Kotlin' },
  ];

  return (
    <form onSubmit={handleSubmit(submit)} className='flex flex-col gap-4 mx-auto w-full h-full'>
      <div className='flex flex-col gap-1'>
        <label htmlFor='snippetLangiage' className='text-gray-700 font-medium'>
          Language of your snippet:
        </label>
        <Controller
          control={control}
          name='snippetLangiage'
          render={({ field }) => <Select size='large' options={selectOptions} {...field} />}
        />
      </div>

      <div className='flex flex-col gap-1 flex-1 min-h-0'>
        <label htmlFor='snippetCode' className='text-gray-700 font-medium'>
          Code of your snippet:
        </label>
        <div className='flex-1 min-h-0'>
          <Controller
            control={control}
            name='snippetCode'
            render={({ field }) => (
              <Editor
                defaultLanguage='javascript'
                defaultValue='// some comment'
                height='100%'
                options={{
                  automaticLayout: true,
                  minimap: { enabled: false },
                }}
                {...field}
              />
            )}
          />
        </div>
        {errors.snippetCode && (
          <span className='text-red-500 text-sm'>{errors.snippetCode.message}</span>
        )}
      </div>

      <Button size='large' type='primary' htmlType='submit' className='!mt-3'>
        Create snippet
      </Button>
    </form>
  );
};
