import { TargetIcon } from '@/assets/svg';
import { deleteQuestion } from '@/modules/QuestionsList/api';
import { DeleteFilled } from '@ant-design/icons';
import { useMutation, useQueryClient } from '@tanstack/react-query';

interface IQuestionDescription {
  title: string;
  id: string;
  userId: string;
  username: string;
  isResolved: boolean;
  authUserId: string;
}

export const QuestionInfo = ({
  title,
  id,
  userId,
  username,
  isResolved,
  authUserId,
}: IQuestionDescription) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: deleteQuestion,
  });

  const handleDeleteQuestion = () => {
    mutate(+id, {
      onSuccess: () => {
        queryClient.invalidateQueries({
          predicate: (query) => query.queryKey[0] === 'questionslist',
        });
      },
    });
  };

  return (
    <div className='flex flex-row !pb-1 items-center justify-between border-gray-200 border-b-2'>
      <div className='flex flex-row gap-4 !pb-1 items-center'>
        <TargetIcon width={25} height={25} />
        <div className='flex flex-col'>
          <h2 className='text-lg'>{title}</h2>
          <div className='flex gap-3 text-gray-400 text-sm'>
            <p>
              Question ID: <span>{id};</span>
            </p>
            <p>
              Asked by: <span>{username};</span>
            </p>
            <p>
              Resolved: <span>{isResolved.toString()};</span>
            </p>
          </div>
        </div>
      </div>
      {userId === authUserId && (
        <DeleteFilled className='text-[20px] cursor-pointer' onClick={handleDeleteQuestion} />
      )}
    </div>
  );
};
