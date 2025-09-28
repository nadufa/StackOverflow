import { UserIcon } from '@/assets/image';
import { UserDescription } from '@/components/UserDescription';
import { UserStatistics } from '@/components/UserStatistics';
import { ProfileToolsPanel } from './ProfileToolsPanel';
import { type IProfileInfo } from './types';

const mockUserData = {
  statistics: {
    snippetsCount: 'loading...',
    rating: 'loading...',
    commentsCount: 'loading...',
    likesCount: 'loading...',
    dislikesCount: 'loading...',
    questionsCount: 'loading...',
    correctAnswersCount: 'loading...',
    regularAnswersCount: 'loading...',
  },
  description: {
    id: 'loading...',
    role: 'loading...',
    username: 'loading...',
  },
};

export const ProfileInfoCard = ({
  isProfileOwner = false,
  statistic,
  id,
  role,
  username,
}: IProfileInfo) => {
  return (
    <div className='flex justify-around !py-6 border-2 border-gray-200 rounded-lg bg-white w-4xl'>
      <UserStatistics data={statistic || mockUserData.statistics} />
      <img
        src={UserIcon}
        alt='Avatar'
        className='h-full max-h-40 w-auto rounded-full object-cover self-center'
      />
      <div className='flex flex-col gap-2'>
        <UserDescription
          id={id || mockUserData.description.id}
          role={role || mockUserData.description.role}
          username={username || mockUserData.description.username}
        />

        {isProfileOwner && <ProfileToolsPanel />}
      </div>
    </div>
  );
};
