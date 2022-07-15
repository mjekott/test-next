export type ITopic = {
  coreTopic: boolean;
  displayName: string;
  followsCount: number;
  isFollowing: boolean;
  slugName: string;
  topicId: string;
  topicImageUrl: string;
};

export type IGetTopics = {
  data: {
    list: ITopic[];
    pageNum: number;
    totalPage: number;
    total: number;
  };
};
