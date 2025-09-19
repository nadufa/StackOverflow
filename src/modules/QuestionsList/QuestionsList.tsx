import { QuestionItem } from './QuestionItem';

export const QuestionsList = () => {
  return (
    <div className='flex flex-col gap-4 w-full'>
      <QuestionItem />
      <QuestionItem />
      <QuestionItem />
    </div>
  );
};
