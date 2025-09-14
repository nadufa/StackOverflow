import { DeleteOutlined, LogoutOutlined } from '@ant-design/icons';
import { Button } from 'antd';

export const ProfileToolsPanel = () => {
  return (
    <div>
      <Button
        title='Sign out'
        type='primary'
        className='!m-0 !mr-3 !bg-[orange] !w-15'
        icon={<LogoutOutlined />}
      />
      <Button
        title='Delete account'
        type='primary'
        className='!bg-[red] !w-15'
        icon={<DeleteOutlined />}
      />
    </div>
  );
};
