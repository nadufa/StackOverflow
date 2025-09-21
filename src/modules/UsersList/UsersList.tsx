import { useGetUsers } from './api';
import { UserItem } from './components';
import { LoadMoreButton } from './components/LoadMoreButton';
import { SearchBar } from './components/SearchBar';

export const UsersList = () => {
  const { data, isLoading } = useGetUsers();

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <div className='flex flex-col items-center gap-4 w-content'>
      <SearchBar />
      <div className='flex flex-col w-fit gap-4'>
        {data?.data.map(({ id, role, username }) => (
          <UserItem key={id} id={id} role={role} username={username} />
        ))}
      </div>
      <LoadMoreButton />
    </div>
  );
};
