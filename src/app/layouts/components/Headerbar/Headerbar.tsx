import { Button, Layout } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Header } = Layout;

export const Headerbar = () => {
  const navigate = useNavigate();

  return (
    <Header className='flex justify-between items-center !px-4 h-16 !bg-(color:--primary-color)'>
      <div className='bg-yellow-400'>LOGO</div>
      <div>
        <Button className='!mr-2' onClick={() => navigate('/create-question')}>
          Ask question
        </Button>
        <Button>Sign out</Button>
      </div>
    </Header>
  );
};
