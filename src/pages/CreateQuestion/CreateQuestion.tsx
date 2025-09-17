import { QuestionForm } from '../../modules/QuestionForm';

export const CreateQuestion = () => {
  return (
    <>
      <h1 className='text-3xl font-bold text-gray-800 !mb-10'>Create new question</h1>
      <QuestionForm mode='create' />
    </>
  );
};
