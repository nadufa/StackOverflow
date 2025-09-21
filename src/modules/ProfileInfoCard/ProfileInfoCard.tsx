import { useParams } from 'react-router-dom';
import { UserDescription } from '../../components/UserDescription';
import { UserStatistics } from '../../components/UserStatistics';
import { useGetUserStatistic } from './api';
import { ProfileToolsPanel } from './ProfileToolsPanel';
import { type IProfileInfo } from './types';

const photo =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhil-XGkzgggj02Aboq95WjS5HK0aDt5bIU2tVPnSXpasdlxW0erT4JOxG6mUAeMdO9hg&usqp=CAU';

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

export const ProfileInfoCard = ({ isProfileOwner = false }: IProfileInfo) => {
  const { userId } = useParams<{ userId: string }>();
  const { data, isLoading } = useGetUserStatistic(userId || '');

  return (
    <div className='flex justify-around !py-6 border-2 border-gray-200 rounded-lg bg-white w-4xl'>
      <UserStatistics data={data?.statistic || mockUserData.statistics} />
      <img
        src={photo}
        alt='Avatar'
        className='h-full max-h-40 w-auto rounded-full object-cover self-center'
      />
      <div className='flex flex-col gap-2'>
        <UserDescription
          id={data?.id || mockUserData.description.id}
          role={data?.role || mockUserData.description.role}
          username={data?.username || mockUserData.description.username}
        />

        {isProfileOwner && <ProfileToolsPanel />}
      </div>
    </div>
  );
};
