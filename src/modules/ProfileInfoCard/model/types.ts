export interface IUserDescription {
  id: number | string;
  username: string;
  role: string;
}

export interface IUserDescriptionResponse {
  data: IUserDescription;
}

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

export interface IUserStatistic extends IUserDescription {
  statistic: IStatistic;
}

export interface IUserStatisticResponse {
  data: IUserStatistic;
}
