import Sider from 'antd/es/layout/Sider';
import { CollapseButton } from './CollapseButton';
import { NavMenu } from './NavMenu';

interface ISidebar {
  collapsed: boolean;
  collapse: () => void;
}

export const Sidebar = ({ collapsed, collapse }: ISidebar) => {
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      style={{
        backgroundColor: '#1974d2',
        borderTop: '3px solid #145698ff',
      }}
      width={200}
    >
      <CollapseButton collapsed={collapsed} collapse={collapse} />
      <NavMenu />
    </Sider>
  );
};
