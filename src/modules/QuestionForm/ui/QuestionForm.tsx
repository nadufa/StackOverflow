import { RoutePath } from '@/app/routing';
import { zodResolver } from '@hookform/resolvers/zod';
import Editor from '@monaco-editor/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Button, Input } from 'antd';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { fetchCreateQuestion } from '../api';
import { questionSchema, type QuestionFormType } from '../model';
import { type QuestionFormPropsType } from '../types';

export const QuestionForm = ({ mode = 'create' }: QuestionFormPropsType) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<QuestionFormType>({
    defaultValues: { title: '', description: '', code: '' },
    resolver: zodResolver(questionSchema),
    mode: 'onSubmit',
  });
  const navigate = useNavigate();

  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: fetchCreateQuestion,
  });

  const submit = (data: QuestionFormType) => {
    mutate(
      {
        title: data.title,
        description: data.description,
        attachedCode: data.code,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ['questions'] });
          reset();
          navigate(RoutePath.QUESTIONS_LIST);
        },
      }
    );
  };

  return (
    <form onSubmit={handleSubmit(submit)} className='flex flex-col gap-5 mx-auto w-full h-full'>
      <div className='relative flex flex-col gap-1'>
        <Controller
          name='title'
          control={control}
          render={({ field }) => <Input size='large' placeholder='Question title' {...field} />}
        />
        {errors.title && (
          <span className='absolute text-red-500 top-full text-sm'>{errors.title.message}</span>
        )}
      </div>

      <div className='relative flex flex-col gap-1'>
        <Controller
          name='description'
          control={control}
          render={({ field }) => (
            <Input size='large' placeholder='Question description' {...field} />
          )}
        />
        {errors.description && (
          <span className='absolute text-red-500 top-full text-sm'>
            {errors.description.message}
          </span>
        )}
      </div>

      <div className='flex flex-col gap-1 flex-1 min-h-0'>
        <label htmlFor='code' className='text-gray-700 font-medium text-l'>
          Attached code:
        </label>
        <div className='relative flex-1 min-h-0 rounded-lg border border-gray-300 overflow-hidden'>
          <Controller
            control={control}
            name='code'
            render={({ field }) => (
              <Editor
                defaultLanguage='javascript'
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

      <Button
        size='large'
        type='primary'
        htmlType='submit'
        className='!mt-3'
        disabled={isPending}
        loading={isPending}
      >
        {mode === 'create' ? 'Create question' : 'Edit question'}
      </Button>
    </form>
  );
};
