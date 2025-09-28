import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';

const { Content } = Layout;

export const MainContent = () => {
  return (
    <Content className='!p-5 bg-gray-50 flex flex-col  items-center h-full overflow-auto'>
      <Outlet />
    </Content>
  );
};
