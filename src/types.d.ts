export type ThemeMode = 'light' | 'dark';

interface LoginFormValues {
  email: string;
  password: string;
}

interface User {
  name: string | null;
  username: string | null;
  email: string | null;
  gender: 'male' | 'female' | null;
  avatar?: string | null;
  banner?: string | null;
  biography?: string | null;
  password: string | null;
}

interface IPost {
  avatar: string;
  name: string;
  username: string;
  date: string;
  description: string;
  picturePost?: string;
}

interface News {
  title: string;
  description: string;
  imageSrc: string;
  source: string;
  featured: boolean;
}

export interface INews {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  // source: string;
  title: string;
  urlToImage: string;
}

export type NewsList = Array<INews>;

interface Friend {
  name: string;
  email?: string;
  avatar: string;
  banner: string;
  biography: string;
  username: string;
}

type FriendList = Array<Friend>;
