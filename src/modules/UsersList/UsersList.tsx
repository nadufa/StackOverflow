import { UserItem } from './UserItem';

export const UsersList = () => {
  return (
    <div className='flex flex-col gap-4'>
      <UserItem />
      <UserItem />
      <UserItem />
      <UserItem />
      <UserItem />
      <UserItem />
    </div>
  );
};
