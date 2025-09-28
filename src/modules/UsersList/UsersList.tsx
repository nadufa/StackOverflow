import { LoadMoreButton } from '@/components/LoadMoreButton';
import { useDebounce } from 'use-debounce';
import { useStore } from 'zustand';
import { useGetUsers } from './api';
import { UserItem, UsersSearchBar } from './components';
import { usersStore } from './model/usersStore';

export const UsersList = () => {
  const searchState = useStore(usersStore, (state) => state.searchState);

  const [debounced] = useDebounce(searchState.inputText, 1000);

  const { data, isFetching, isFetched, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useGetUsers({
      ...searchState,
      inputText: debounced,
    });

  const isPlaceholderData = isFetching && !isFetched && !isFetchingNextPage;

  return (
    <div className='flex flex-col items-center gap-4 w-content'>
      <UsersSearchBar />
      <div
        className={`flex flex-col w-fit min-w-2xl gap-4 ${isPlaceholderData ? 'opacity-40' : ''}`}
      >
        {data?.map((el) =>
          el.data.data.map(({ id, role, username }) => (
            <UserItem key={id} id={id} role={role} username={username} />
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
