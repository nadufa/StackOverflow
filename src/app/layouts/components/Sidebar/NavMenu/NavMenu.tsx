import { Menu } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { RoutePath } from '../../../../routing';
import { NavItems } from './NavItems';

export const NavMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Menu
      mode='inline'
      defaultSelectedKeys={[RoutePath.BASE]}
      selectedKeys={[location.pathname]}
      items={NavItems}
      onClick={({ key }) => navigate(key)}
    />
  );
};
