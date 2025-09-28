import { LoadMoreButton } from '@/components/LoadMoreButton';
import { useDebounce } from 'use-debounce';
import { useStore } from 'zustand';
import { useGetPosts } from './api';
import { PostItem, PostsSearchBar } from './components';
import { postsStore } from './model/postsStore';

interface IPostsListProps {
  userId?: string | null;
}

export const PostsList = ({ userId = null }: IPostsListProps) => {
  const searchState = useStore(postsStore, (state) => state.searchState);

  const [debounced] = useDebounce(searchState.inputText, 1000);

  const { data, isFetching, isFetched, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useGetPosts({
      ...searchState,
      inputText: debounced,
      userId: userId,
    });

  const isPlaceholderData = isFetching && !isFetched && !isFetchingNextPage;

  return (
    <div className='flex flex-col items-center gap-4 w-full'>
      <PostsSearchBar />
      <div
        className={`flex flex-col w-full min-w-2xl gap-4 ${isPlaceholderData ? 'opacity-40' : ''}`}
      >
        {data?.map((element) =>
          element.data.data.map(({ id, code, language, user, marks, comments }) => (
            <PostItem
              key={id}
              id={id}
              code={code}
              language={language}
              username={user.username}
              userId={user.id}
              likesAmount={marks.filter((item) => item.type === 'like').length}
              dislikesAmount={marks.filter((item) => item.type === 'dislike').length}
              commentsAmount={comments.length}
            />
          ))
        )}
      </div>
      <LoadMoreButton
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
        isLoading={isFetching && !isFetchingNextPage}
      />
    </div>
  );
};
