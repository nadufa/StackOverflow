import { DeleteFilled } from '@ant-design/icons';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Author } from '../../../../../../components/Author';
import { deleteAnswer } from '../../../../api';

export const AnswerItem = ({
  id,
  content,
  isCorrect,
  userId,
  username,
  authUserId,
  questionId,
}: {
  id: string;
  content: string;
  isCorrect: boolean;
  userId: string;
  username: string;
  authUserId: string;
  questionId: string;
}) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: deleteAnswer,
  });

  const handleDeleteAnswer = () => {
    mutate(+id, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['getAnswers', +questionId] });
      },
    });
  };

  return (
    <div key={id} className='flex flex-col gap-1 !p-2 bg-gray-50 rounded-lg'>
      <div className='flex flex-row items-center justify-between'>
        <div className='flex flex-row items-center gap-0.5'>
          <Author id={userId} name={username} />
          {isCorrect && (
            <p className='!px-1 !py-0.5 text-xs bg-green-100 text-green-800 rounded-full w-fit'>
              Correct
            </p>
          )}
        </div>
        {userId === authUserId && (
          <DeleteFilled className='text-[20px] cursor-pointer' onClick={handleDeleteAnswer} />
        )}
      </div>

      <p className='text-sm font-medium truncate whitespace-pre-wrap break-words !pr-5'>
        {content}
      </p>
    </div>
  );
};
