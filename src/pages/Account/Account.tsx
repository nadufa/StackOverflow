import { useOutletContext, useParams } from 'react-router-dom';

import { ChangeProfileInfoCard } from '@/modules/ChangeProfileInfoCard';
import { ProfileInfoCard } from '@/modules/ProfileInfoCard';
import { useGetUserStatistic } from './api';

type ProtectedContext = {
  authUserId: string;
  authUserUsername: string;
};

export const Account = () => {
  const { userId } = useParams<{ userId: string }>();
  const { authUserId } = useOutletContext<ProtectedContext>();
  const { data } = useGetUserStatistic(userId || authUserId);

  return (
    <div className='flex flex-col items-center gap-5 w-fit h-full'>
      <ProfileInfoCard
        isProfileOwner={!userId}
        statistic={data?.statistic}
        id={data?.id || ''}
        role={data?.role || ''}
        username={data?.username || ''}
      />
      {!userId && <ChangeProfileInfoCard />}
    </div>
  );
};
