import { PostItem } from './PostItem';

export const PostsList = () => {
  return (
    <div className='flex flex-col gap-4 w-full'>
      <PostItem />
      <PostItem />
    </div>
  );
};
