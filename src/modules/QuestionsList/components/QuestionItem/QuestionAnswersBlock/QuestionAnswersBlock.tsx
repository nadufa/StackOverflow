import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Button, Input } from 'antd';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useOutletContext } from 'react-router-dom';
import { fetchAddAnswer, useGetAnswers } from '../../../api';
import { type AddAnswerFormType, addAnswerSchema } from '../../../model';
import { AnswerItem } from './AnswerItem';

type ProtectedContext = {
  authUserId: string;
  authUserUsername: string;
};

export const QuestionAnswersBlock = ({ id }: { id: string }) => {
  const { authUserId } = useOutletContext<ProtectedContext>();

  const { data } = useGetAnswers(+id);

  const { control, handleSubmit, reset } = useForm<AddAnswerFormType>({
    defaultValues: { content: '' },
    resolver: zodResolver(addAnswerSchema),
    mode: 'onSubmit',
  });

  const [isAnswersOpen, setIsAnswersOpen] = useState(false);

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: fetchAddAnswer,
  });

  const submit = (formData: AddAnswerFormType) => {
    if (!id) return;
    mutate(
      { ...formData, questionId: Number(id), content: formData.content },
      {
        onSuccess: () => {
          console.log('success');

          queryClient.invalidateQueries({ queryKey: ['getAnswers', +id] });
        },
      }
    );
    reset();
  };

  return (
    <div className='flex flex-col gap-4 !py-1 w-full border-gray-200 border-t-2'>
      <button
        onClick={() => setIsAnswersOpen(!isAnswersOpen)}
        className='flex items-center justify-between w-full !p-2 hover:bg-gray-50 rounded-lg'
      >
        <span className='font-medium'>Answers ({data?.data.length ?? 0})</span>
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
          {data?.data.map(({ content, id: answer_id, isCorrect, user }) => {
            return content.trim() ? (
              <AnswerItem
                key={answer_id}
                id={answer_id}
                content={content}
                isCorrect={isCorrect}
                authUserId={authUserId}
                userId={user.id}
                username={user.username}
                questionId={id}
              />
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
