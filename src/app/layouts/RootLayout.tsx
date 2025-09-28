import { Layout } from 'antd';
import { Headerbar, MainContent, Sidebar } from './components';

export const RootLayout = () => {
  return (
    <Layout className='h-screen'>
      <Headerbar />
      <Layout className='flex-1 overflow-hidden'>
        <Sidebar />
        <MainContent />
      </Layout>
    </Layout>
  );
};
