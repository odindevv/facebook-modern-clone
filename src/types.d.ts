export type ThemeMode = 'light' | 'dark';

interface News {
  title: string;
  description: string;
  imageSrc: string;
  source: string;
  featured: boolean;
}

type NewsList = Array<News>;
