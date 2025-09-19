import { EyeFilled } from '@ant-design/icons';
import { TargetIcon } from '../../../assets/svg';

export const QuestionItem = () => {
  return (
    <div className='flex flex-col gap-2 justify-around !py-2 border-2 border-gray-200 rounded-lg bg-white'>
      <div className='flex flex-row gap-4 items-center'>
        <TargetIcon className='!ml-3' width={40} height={40} />
        <div className='flex flex-col gap-1 justify-between'>
          <span className='text-base'>Test Question</span>
          <span className='text-xs text-gray-400'>
            asked by user: <span className='cursor-pointer'>Nadufa</span>
          </span>
        </div>
      </div>
      <span className='!ml-3 !mt-3 text-gray-600'>Test Question</span>
      <EyeFilled className='!ml-4 !mt-5 cursor-pointer w-[20px]' style={{ fontSize: 20 }} />
    </div>
  );
};
