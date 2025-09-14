interface IUserStatistics {
  snippetsCount: number;
  rating: number;
  commentsCount: number;
  likesCount: number;
  dislikesCount: number;
  questionsCount: number;
  correctAnswersCount: number;
  regularAnswersCount: number;
}

const mockData: IUserStatistics = {
  snippetsCount: 5,
  rating: 150,
  commentsCount: 10,
  likesCount: 20,
  dislikesCount: 5,
  questionsCount: 8,
  correctAnswersCount: 12,
  regularAnswersCount: 15,
};

const displayNames: Record<keyof IUserStatistics, string> = {
  snippetsCount: 'Snippets',
  rating: 'Rating',
  commentsCount: 'Comments',
  likesCount: 'Likes',
  dislikesCount: 'Dislikes',
  questionsCount: 'Questions',
  correctAnswersCount: 'Correct answers',
  regularAnswersCount: 'Regular answers',
};

export const UserStatistics = () => {
  const data = Object.entries(mockData) as Array<[keyof IUserStatistics, number]>;

  return (
    <div className='flex flex-col tiny-gap'>
      {data.map(([key, value]) => (
        <p key={key} className='text-sm font-semibold'>
          {displayNames[key]}: <span className='text-sm font-semibold text-gray-500'>{value}</span>
        </p>
      ))}
    </div>
  );
};
