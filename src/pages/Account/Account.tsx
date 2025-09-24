import { useOutletContext } from 'react-router-dom';
import { ChangeProfileInfoCard } from '../../modules/ChangeProfileInfoCard';
import { ProfileInfoCard } from '../../modules/ProfileInfoCard';

type ProtectedContext = {
  authUserId: string;
  authUserUsername: string;
};

export const Account = () => {
  const { authUserUsername } = useOutletContext<ProtectedContext>();

  return (
    <div className='flex flex-col items-center gap-5 w-fit h-full'>
      <h1 className='text-2xl font-bold text-gray-800 !m-0'>
        Welcome, <span>{authUserUsername}</span>!
      </h1>

      <ProfileInfoCard isProfileOwner />
      <ChangeProfileInfoCard />
    </div>
  );
};
