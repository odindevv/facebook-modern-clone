export type ThemeMode = 'light' | 'dark';

interface News {
  title: string;
  description: string;
  imageSrc: string;
  source: string;
  featured: boolean;
}

type NewsList = Array<News>;

interface Friend {
  user: string;
  username: string;
  biography: string;
  avatar: string;
  header: string;
}

type FriendList = Array<Friend>;
