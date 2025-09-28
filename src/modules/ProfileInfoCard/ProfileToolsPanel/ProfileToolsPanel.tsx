import { DeleteOutlined, LogoutOutlined } from '@ant-design/icons';
import { useMutation } from '@tanstack/react-query';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { deleteUser } from '../api';
import { RoutePath } from '@/app/routing';

export const ProfileToolsPanel = () => {
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      navigate(RoutePath.LOGIN);
    },
  });

  const handleUserDelete = () => {
    mutate();
  };

  return (
    <div>
      <Button
        title='Sign out'
        type='primary'
        className='!m-0 !mr-3 !bg-[orange] !w-15'
        icon={<LogoutOutlined />}
        onClick={() => navigate(RoutePath.LOGOUT)}
      />
      <Button
        title='Delete account'
        type='primary'
        className='!bg-[red] !w-15'
        icon={<DeleteOutlined />}
        onClick={handleUserDelete}
      />
    </div>
  );
};
