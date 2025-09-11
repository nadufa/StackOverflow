import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '../../../app/routing';
import { NavItems } from './NavItems';

export const NavMenu = () => {
  const navigate = useNavigate();

  return (
    <Menu
      mode='inline'
      defaultSelectedKeys={[RoutePath.BASE]}
      className='h-full bg-transparent'
      items={NavItems}
      onClick={({ key }) => navigate(key)}
    />
  );
};
