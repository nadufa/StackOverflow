import type { IStatistic } from '../../modules/ProfileInfoCard/types';

interface IUserStatisticData {
  data?: IStatistic;
}

const displayNames: Record<keyof IStatistic, string> = {
  snippetsCount: 'Snippets',
  rating: 'Rating',
  commentsCount: 'Comments',
  likesCount: 'Likes',
  dislikesCount: 'Dislikes',
  questionsCount: 'Questions',
  correctAnswersCount: 'Correct answers',
  regularAnswersCount: 'Regular answers',
};

export const UserStatistics = ({ data }: IUserStatisticData) => {
  if (!data) {
    return <div>Loading...</div>;
  }

  const entries = Object.entries(data) as Array<[keyof IStatistic, number]>;
  return (
    <div className='flex flex-col tiny-gap'>
      {entries.map(([key, value]) => (
        <p key={key} className='text-sm font-semibold'>
          {displayNames[key]}: <span className='text-sm font-semibold text-gray-500'>{value}</span>
        </p>
      ))}
    </div>
  );
};
