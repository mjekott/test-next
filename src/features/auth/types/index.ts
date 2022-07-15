export type IGenricResponse = {
  data: {
    tokenHeader: string;
    accessToken: string;
    refreshToken: string;
    user: IUser;
  };
};

export type IGetUserProfileResponse = {
  data: IUser;
};

export type ISingupData = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

export type ILoginData = Pick<ISingupData, 'email' | 'password'>;

export type IUser = {
  userId: number;
  email: string;
  firstName: string;
  lastName: string;
  headline?: string;
  bio?: string;
  avatar?: string;
  emailVerified: boolean;
  profileUrl?: string;
  websiteUrl?: string;
  phoneNumber?: string;
  contactEmail?: string;
  birthday?: string;
  isFollowing: any;
  followersCount: number;
  folllowingsCount: number;
  joinedDate: string;
  modifiedDate: string;
};
