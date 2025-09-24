import type { IQuestion } from '../../model';
import { QuestionAnswersBlock } from './QuestionAnswersBlock';
import { QuestionCode } from './QuestionCode';
import { QuestionInfo } from './QuestionInfo';

export const QuestionItem = ({
  id,
  title,
  description,
  isResolved,
  user,
  attachedCode,
  answers,
}: IQuestion) => {
  return (
    <div className='flex flex-col w-full gap-3 justify-around border-2 border-gray-200 rounded-lg bg-white !px-3 !py-1'>
      <QuestionInfo id={id} title={title} username={user.username} isResolved={isResolved} />
      <h3 className='text-sm text-gray-600'>{description}</h3>
      {attachedCode && <QuestionCode attachedCode={attachedCode} />}
      <QuestionAnswersBlock id={+id} answers={answers} />
    </div>
  );
};
