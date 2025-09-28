export interface IStatistic {
  snippetsCount: number | string;
  rating: number | string;
  commentsCount: number | string;
  likesCount: number | string;
  dislikesCount: number | string;
  questionsCount: number | string;
  correctAnswersCount: number | string;
  regularAnswersCount: number | string;
}

export type IProfileInfo = {
  isProfileOwner?: boolean;
  statistic?: IStatistic;
  id: string;
  role: string;
  username: string;
};
