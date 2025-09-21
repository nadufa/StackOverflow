import { UserDescription } from '../../components/UserDescription';
import { UserStatistics } from '../../components/UserStatistics';
import { ProfileToolsPanel } from './ProfileToolsPanel';

const photo =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhil-XGkzgggj02Aboq95WjS5HK0aDt5bIU2tVPnSXpasdlxW0erT4JOxG6mUAeMdO9hg&usqp=CAU';

export const ProfileInfoCard = () => {
  const isProfileOwner = true;

  return (
    <div className='flex justify-around !py-6 border-2 border-gray-200 rounded-lg bg-white w-4xl'>
      <UserStatistics />
      <img
        src={photo}
        alt='Avatar'
        className='h-full max-h-40 w-auto rounded-full object-cover self-center'
      />
      <div className='flex flex-col gap-2'>
        <UserDescription id={1} role={'Role'} username={'ProfileInfo'} />

        {isProfileOwner && <ProfileToolsPanel />}
      </div>
    </div>
  );
};
