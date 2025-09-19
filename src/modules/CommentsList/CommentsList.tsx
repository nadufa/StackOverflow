import { CommentItem } from './CommentItem';

export const CommentsList = () => {
  return (
    <div className='flex flex-col gap-4 w-full items-center'>
      <span className='text-xl'>Comments</span>
      <div className='flex flex-col gap-4 w-full'>
        <CommentItem />
        <CommentItem />
        <CommentItem />
      </div>
    </div>
  );
};
