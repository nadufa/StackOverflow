import { SendIcon } from '@/assets/svg';
import { SmileFilled } from '@ant-design/icons';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Button, Input } from 'antd';
import EmojiPicker, { type EmojiClickData } from 'emoji-picker-react';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { CommentsList } from '../CommentsList';
import { PostItem } from '../PostsList/components/PostItem';
import { fetchCreateComment, useGetPost } from './api';
import { createCommentSchema } from './model';
import { type CreateCommentFormType } from './model/types';

const { TextArea } = Input;

export const CreateComment = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreateCommentFormType>({
    defaultValues: { content: '' },
    resolver: zodResolver(createCommentSchema),
    mode: 'onSubmit',
  });

  const { postId } = useParams<{ postId: string }>();
  const { data } = useGetPost(postId || '');
  const [showPicker, setShowPicker] = useState(false);

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: fetchCreateComment,
  });

  const handleEmojiClick = (
    emojiData: EmojiClickData,
    onChange: (val: string) => void,
    value: string
  ) => {
    onChange(value + emojiData.emoji);
    setShowPicker(false);
  };

  const submit = (formData: CreateCommentFormType) => {
    if (!data?.id) return;
    mutate(
      { ...formData, snippetId: data?.id ? +data.id : 0 },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            predicate: (query) => query.queryKey[0] === 'snippets',
          });
        },
      }
    );
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submit)} className='flex flex-col gap-4 w-full'>
      <PostItem
        key={data?.id}
        id={data?.id || ''}
        code={data?.code || ''}
        language={data?.language || ''}
        username={data?.user.username || ''}
        userId={data?.user.id || ''}
        likesAmount={data?.marks.filter((item) => item.type === 'like').length || 0}
        dislikesAmount={data?.marks.filter((item) => item.type === 'dislike').length || 0}
        commentsAmount={data?.comments.length || 0}
      />
      <div className='relative flex flex-col gap-1'>
        <div className='flex flex-row gap-2'>
          <Controller
            control={control}
            name='content'
            render={({ field }) => (
              <div className='relative w-full'>
                <TextArea
                  rows={5}
                  placeholder='Your comment here'
                  value={field.value}
                  onChange={field.onChange}
                />

                {showPicker && (
                  <div className='absolute right-0 mt-2 z-50'>
                    <EmojiPicker
                      onEmojiClick={(emojiData) =>
                        handleEmojiClick(emojiData, field.onChange, field.value)
                      }
                    />
                  </div>
                )}
              </div>
            )}
          />
          <div className='flex flex-col gap-2 !pt-3 !pb-3 justify-between'>
            <button
              type='button'
              onClick={() => setShowPicker((prev) => !prev)}
              className='px-2 py-1 rounded cursor-pointer'
            >
              <SmileFilled style={{ fontSize: 25 }} />
            </button>

            <Button htmlType='submit' className='cursor-pointer !bg-transparent !border-none'>
              <SendIcon width={30} height={30} />
            </Button>
          </div>
        </div>
        {errors.content && (
          <span className='absolute text-red-500 top-full text-sm'>{errors.content.message}</span>
        )}
      </div>
      <CommentsList comments={data?.comments.reverse() ?? []} />
    </form>
  );
};
