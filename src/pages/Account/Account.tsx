import { ChangeProfileInfoCard } from '../../modules/ChangeProfileInfoCard';
import { ProfileInfoCard } from '../../modules/ProfileInfoCard';

export const Account = () => {
  const name = 'Nadezhda';

  return (
    <div className='flex flex-col items-center gap-5 w-fit h-full'>
      <h1 className='text-2xl font-bold text-gray-800 !m-0'>
        Welcome, <span>{name}</span>!
      </h1>

      <ProfileInfoCard />
      <ChangeProfileInfoCard />
    </div>
  );
};
