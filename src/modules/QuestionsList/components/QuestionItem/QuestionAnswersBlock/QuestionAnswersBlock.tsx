import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Button, Input } from 'antd';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { fetchAddAnswer } from '../../../api';
import { type AddAnswerFormType, addAnswerSchema } from '../../../model';
import { AnswerItem } from './AnswerItem';

export const QuestionAnswersBlock = ({
  id,
  answers,
}: {
  id: string;
  answers: {
    id: string;
    content: string;
    isCorrect: boolean;
  }[];
}) => {
  const {
    control,
    handleSubmit,
    formState: {},
    reset,
  } = useForm<AddAnswerFormType>({
    defaultValues: { content: '' },
    resolver: zodResolver(addAnswerSchema),
    mode: 'onSubmit',
  });

  const [isAnswersOpen, setIsAnswersOpen] = useState(false);

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: fetchAddAnswer,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['answers'] });
    },
  });

  const submit = (formData: AddAnswerFormType) => {
    console.log('CreateCommentForm ', formData);
    if (!id) return;
    mutate({ ...formData, questionId: Number(id), content: formData.content });
    reset();
  };

  return (
    <div className='flex flex-col gap-4 !py-1 w-full border-gray-200 border-t-2'>
      <button
        onClick={() => setIsAnswersOpen(!isAnswersOpen)}
        className='flex items-center justify-between w-full !p-2 hover:bg-gray-50 rounded-lg'
      >
        <span className='font-medium'>Answers ({answers.length})</span>
        <svg
          className={`w-4 h-4 transition-transform ${isAnswersOpen ? 'rotate-180' : ''}`}
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
        </svg>
      </button>

      {isAnswersOpen && (
        <div className='flex flex-col gap-2'>
          {answers.map(({ content, id, isCorrect }) => {
            return content.trim() ? (
              <AnswerItem key={id} id={id} content={content} isCorrect={isCorrect} />
            ) : null;
          })}

          <form onSubmit={handleSubmit(submit)} className='flex gap-2 !my-2'>
            <Controller
              control={control}
              name='content'
              render={({ field }) => <Input type='text' placeholder='Your answer...' {...field} />}
            />
            <Button htmlType='submit' type='primary'>
              Add
            </Button>
          </form>
        </div>
      )}
    </div>
  );
};
