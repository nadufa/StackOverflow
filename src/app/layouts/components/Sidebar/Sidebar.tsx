import Sider from 'antd/es/layout/Sider';
import { useState } from 'react';
import { CollapseButton } from './CollapseButton';
import { NavMenu } from './NavMenu';

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      className='!bg-(color:--primary-color) !border-t-3 !border-(color:--primary-border-color)'
      width={200}
    >
      <CollapseButton collapsed={collapsed} collapse={() => setCollapsed((prev) => !prev)} />
      <NavMenu />
    </Sider>
  );
};
