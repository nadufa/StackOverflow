import { generatePath, useNavigate } from 'react-router-dom';
import { RoutePath } from '../../app/routing';
import { PersonIcon } from '../../assets/svg';
import { type IAuthorProps } from './types';

export const Author = ({ id, name }: IAuthorProps) => {
  const navigate = useNavigate();

  return (
    <div
      className='flex flex-row gap-1 items-center cursor-pointer'
      onClick={() => navigate(generatePath(RoutePath.USER, { userId: id }))}
    >
      <PersonIcon width={20} height={20} />
      <span>{name}</span>
    </div>
  );
};
