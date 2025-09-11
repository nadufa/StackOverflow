import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Button } from 'antd';

interface ICollapseButton {
  collapsed: boolean;
  collapse: () => void;
}

export const CollapseButton = ({ collapsed, collapse }: ICollapseButton) => {
  const name = 'Nadezhda';
  const photo =
    'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=32&h=32&fit=crop&crop=face';

  return (
    <Button
      type='text'
      className={`
        flex items-center justify-between
        w-[calc(100%-8px)] !h-[50px] !px-3
        bg-transparent
        hover:!bg-[#ffffff40]
        transition-colors duration-200
        border-none
        !rounded-[10px]
        !m-1
      `}
      onClick={collapse}
    >
      {collapsed ? (
        <RightOutlined className='!text-white' />
      ) : (
        <span className='flex items-center justify-between w-full text-white'>
          <img src={photo} alt='Avatar' className='w-10 h-10 rounded-full object-cover' />
          <span className='!mr-[10px]'>{name}</span>
          <LeftOutlined className='text-white' />
        </span>
      )}
    </Button>
  );
};
