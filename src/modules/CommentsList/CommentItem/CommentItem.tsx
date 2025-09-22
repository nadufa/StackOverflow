import { DislikeFilled, LikeFilled } from '@ant-design/icons';
import { Author } from '../../../components/Author';

export const CommentItem = () => {
  return (
    <div className='flex flex-col border-2 border-gray-200 rounded-lg bg-white overflow-hidden w-full'>
      <div className='flex flex-row gap-1 !pl-2 !pr-2 !py-1 items-center cursor-pointer w-fit'>
        <Author name='Nadufa' />
      </div>
      <span className='border-t-2 border-b-2 border-gray-200 !pl-3 !py-1'>Hello</span>
      <div className='flex flex-row !pl-4 gap-3 items-center'>
        <div className='flex flex-row gap-2 items-center'>
          <span className='text-xs'>1</span>
          <LikeFilled style={{ color: 'green', cursor: 'pointer' }} />
        </div>
        <div className='flex flex-row gap-2 items-center !py-2'>
          <span className='text-xs'>1</span>
          <DislikeFilled style={{ color: 'red', cursor: 'pointer' }} />
        </div>
      </div>
    </div>
  );
};
