import { Button } from 'antd';
import { generatePath, useNavigate } from 'react-router-dom';
import { RoutePath } from '../../../../app/routing';
import { UserDescription } from '../../../../components/UserDescription';

const photo =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhil-XGkzgggj02Aboq95WjS5HK0aDt5bIU2tVPnSXpasdlxW0erT4JOxG6mUAeMdO9hg&usqp=CAU';

interface IUserItem {
  id: number;
  username: string;
  role: string;
}

export const UserItem = ({ id, role, username }: IUserItem) => {
  const navigate = useNavigate();

  return (
    <div className='flex justify-around !py-6 border-2 border-gray-200 rounded-lg bg-white w-2xl'>
      <img
        src={photo}
        alt='Avatar'
        className='h-full max-h-25 w-auto rounded-full object-cover self-center'
      />
      <div className='flex flex-col gap-2'>
        <UserDescription id={id} role={role} username={username} />

        <Button
          className='w-30'
          onClick={() => navigate(generatePath(RoutePath.USER, { userId: id.toString() }))}
        >
          Go to user page
        </Button>
      </div>
    </div>
  );
};
