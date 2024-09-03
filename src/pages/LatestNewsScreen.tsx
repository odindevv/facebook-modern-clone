import { Container, Stack, Typography } from '@mui/material';
import { NavBar } from '../components/navbar/NavBar';
import NewsJSON from '../mocks/news.json';
import { NewsList } from '../types';
import { News } from '../types';
import { MainNews } from '../components/news/MainNews';
import { Feed } from '../components/news/Feed';

export const LatestNewsScreen: React.FC = () => {
  const newsItems: NewsList = NewsJSON;
  const featuredNews = newsItems.filter((item: News) => item.featured);
  const otherNews = newsItems.filter((item: News) => !item.featured);
  return (
    <Container maxWidth={false} sx={{ pb: 12 }}>
      <NavBar />
      <Typography variant="h4" mt={12} mb={4}>
        Welcome to Ragnar News
      </Typography>
      <Stack direction="column" gap={2}>
        <MainNews featuredNews={featuredNews} />
        <Feed news={otherNews} />
      </Stack>
    </Container>
  );
};
