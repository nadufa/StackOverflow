import type { IComment } from '../CreateComment/model';
import { CommentItem } from './CommentItem';

interface ICommentsListProps {
  comments: IComment[];
}

export const CommentsList = ({ comments }: ICommentsListProps) => {
  return (
    <div className='flex flex-col gap-4 w-full items-center'>
      <span className='text-xl'>Comments</span>
      <div className='flex flex-col gap-4 w-full'>
        {comments?.map(({ id, content, user }) => (
          <CommentItem key={id} id={id} author={user} content={content} />
        ))}
      </div>
    </div>
  );
};
