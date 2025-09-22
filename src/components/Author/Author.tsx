import { PersonIcon } from '../../assets/svg';
import { type IAuthorProps } from './types';

export const Author = ({ name }: IAuthorProps) => {
  return (
    <>
      <PersonIcon width={20} height={20} />
      <span>{name}</span>
    </>
  );
};
