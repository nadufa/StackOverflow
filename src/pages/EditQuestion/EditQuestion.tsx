import { QuestionForm } from '../../modules/QuestionForm';

export const EditQuestion = () => {
  return (
    <>
      <h1 className='text-3xl font-bold text-gray-800 !mb-10'>Edit question</h1>
      <QuestionForm mode='edit' />
    </>
  );
};
