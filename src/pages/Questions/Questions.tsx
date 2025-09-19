import { Pagination } from 'antd';
import { QuestionsList } from '../../modules/QuestionsList';

export const Questions = () => {
  return (
    <>
      <Pagination className='!mb-5' />
      <QuestionsList />
    </>
  );
};
