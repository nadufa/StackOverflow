import { Button, Layout } from 'antd';
import { useNavigate } from 'react-router-dom';
import { CodeIcon, LanguageIcon } from '../../../../assets/svg';
import { RoutePath } from '../../../routing';

const { Header } = Layout;

export const Headerbar = () => {
  const navigate = useNavigate();

  return (
    <Header className='flex justify-between items-center !px-4 h-16 !bg-(color:--primary-color)'>
      <div
        className='flex flex-row items-center gap-2 text-white text-lg font-bold cursor-pointer'
        onClick={() => navigate(RoutePath.BASE)}
      >
        <CodeIcon width={40} height={40} />
        <span className='text-sm font-light'>CODELAND</span>
      </div>
      <div className='flex flex-row items-center'>
        <Button className='!mr-2' onClick={() => navigate(RoutePath.CREATE_QUESTION)}>
          Ask question
        </Button>
        <Button>Sign out</Button>
        <div className='flex flex-row gap-1 items-center !ml-4 cursor-pointer'>
          <LanguageIcon width={20} height={20} />
          <span className='text-white text-xs font-light'>EN</span>
        </div>
      </div>
    </Header>
  );
};
