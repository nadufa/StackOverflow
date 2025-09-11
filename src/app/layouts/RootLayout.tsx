import { Button, Layout } from 'antd';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../../modules/Sidebar';

const { Header, Content } = Layout;

export const RootLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ height: '100%' }}>
      <Header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0 1rem',
          height: 65,
          backgroundColor: '#1974d2',
        }}
      >
        <div style={{ backgroundColor: 'yellow' }}>LOGO</div>
        <div>
          <Button style={{ marginRight: '0.5rem' }}>Ask question</Button>
          <Button>Sign out</Button>
        </div>
      </Header>
      <Layout>
        <Sidebar collapsed={collapsed} collapse={() => setCollapsed((prev) => !prev)} />
        <Content style={{ padding: '0 24px' }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
