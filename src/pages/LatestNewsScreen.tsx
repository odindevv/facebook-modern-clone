import { Container, Stack } from '@mui/material';
import { NavBar } from '../components/navbar/NavBar';
import { NewsList } from '../types';
import { MainNews } from '../components/news/MainNews';
import { Feed } from '../components/news/Feed';
import { SideBar } from '../components/sidebar/SideBar';
import { useEffect, useState } from 'react';

const API_NEWS_URL =
  'https://newsapi.org/v2/everything?q=dembow&page=1&pageSize=20&apiKey=78d1c226d2c24735b0c04e4c0660251b';

export const LatestNewsScreen: React.FC = () => {
  const [news, setNews] = useState<NewsList>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const newsFetch = async () => {
      try {
        const response = await fetch(API_NEWS_URL);
        if (!response.ok) throw new Error('Fetch data error!');
        const data = await response.json();
        const newsList: NewsList = data.articles;
        setNews(newsList);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    newsFetch();
  }, []);

  if (loading) return <h1>Loading...</h1>;

  console.log(news);
  const featuredNews: NewsList = news.slice(0, 5);
  const otherNews: NewsList = news.slice(5, news.length);
  return (
    <Container maxWidth={false} sx={{ pb: 12 }}>
      <NavBar />
      <Stack direction="row" spacing={{ xs: 0, sm: 0, md: 2 }} mt={10}>
        <SideBar />
        <Stack direction="column" gap={2} sx={{ flex: 7 }}>
          <MainNews featuredNews={featuredNews} />
          <Feed news={otherNews} />
        </Stack>
      </Stack>
    </Container>
  );
};
