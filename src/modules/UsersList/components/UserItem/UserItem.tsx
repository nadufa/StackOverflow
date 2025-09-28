import { RoutePath } from '@/app/routing';
import { UserIcon } from '@/assets/image';
import { UserDescription } from '@/components/UserDescription';
import { Button } from 'antd';
import { generatePath, useNavigate } from 'react-router-dom';

interface IUserItem {
  id: number;
  username: string;
  role: string;
}

export const UserItem = ({ id, role, username }: IUserItem) => {
  const navigate = useNavigate();

  const onUsersHandler = () => {
    navigate(generatePath(RoutePath.USER, { userId: id.toString() }));
  };

  return (
    <div className='flex justify-around !py-6 border-2 border-gray-200 rounded-lg bg-white w-2xl'>
      <img
        src={UserIcon}
        alt='Avatar'
        className='h-full max-h-30 w-auto rounded-full object-cover self-center'
      />
      <div className='flex flex-col gap-2'>
        <UserDescription id={id} role={role} username={username} />

        <Button className='w-30' onClick={onUsersHandler}>
          Go to user page
        </Button>
      </div>
    </div>
  );
};
