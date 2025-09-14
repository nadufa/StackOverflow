import { Button, Layout } from 'antd';

const { Header } = Layout;

export const Headerbar = () => {
  return (
    <Header className='flex justify-between items-center !px-4 h-16 !bg-(color:--primary-color)'>
      <div className='bg-yellow-400'>LOGO</div>
      <div>
        <Button className='!mr-2'>Ask question</Button>
        <Button>Sign out</Button>
      </div>
    </Header>
  );
};
