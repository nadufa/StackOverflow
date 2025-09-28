import { Author } from '@/components/Author';
import type { IUser } from '@/modules/CreateComment/model';

interface ICommentItemProps {
  id: string;
  content: string;
  author: IUser;
}

export const CommentItem = ({ author, content }: ICommentItemProps) => {
  return (
    <div className='flex flex-col border-2 border-gray-200 rounded-lg bg-white overflow-hidden w-full'>
      <div className='!pl-2 !pr-2 !py-1 w-fit'>
        <Author id={author.id} name={author.username} />
      </div>
      <span className='border-t-2 border-b-2 border-gray-200 !pl-3 !py-1'>{content}</span>
    </div>
  );
};
