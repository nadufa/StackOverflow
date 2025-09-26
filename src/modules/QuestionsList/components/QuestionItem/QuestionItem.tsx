import { useOutletContext } from 'react-router-dom';
import type { IQuestionProps } from '../../model';
import { QuestionAnswersBlock } from './QuestionAnswersBlock';
import { QuestionCode } from './QuestionCode';
import { QuestionInfo } from './QuestionInfo';

type ProtectedContext = {
  authUserId: string;
  authUserUsername: string;
};

export const QuestionItem = ({
  id,
  title,
  description,
  isResolved,
  user,
  attachedCode,
}: IQuestionProps) => {
  const { authUserId } = useOutletContext<ProtectedContext>();

  return (
    <div className='flex flex-col w-full gap-3 justify-around border-2 border-gray-200 rounded-lg bg-white !px-3 !py-1'>
      <QuestionInfo
        id={id}
        title={title}
        userId={user.id}
        username={user.username}
        isResolved={isResolved}
        authUserId={authUserId}
      />
      <h3 className='text-sm text-gray-600'>{description}</h3>
      {attachedCode && <QuestionCode attachedCode={attachedCode} />}
      <QuestionAnswersBlock id={id} />
    </div>
  );
};
