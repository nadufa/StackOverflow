import { TargetIcon } from '../../../../../assets/svg';

interface IQuestionDescription {
  title: string;
  id: string;
  username: string;
  isResolved: boolean;
}

export const QuestionInfo = ({ title, id, username, isResolved }: IQuestionDescription) => {
  return (
    <div className='flex flex-row gap-4 !pb-1 items-center border-gray-200 border-b-2'>
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
  );
};
