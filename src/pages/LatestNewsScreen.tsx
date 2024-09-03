import { Container, Stack } from '@mui/material';
import { NavBar } from '../components/navbar/NavBar';
import NewsJSON from '../mocks/news.json';
import { NewsList } from '../types';
import { News } from '../types';
import { MainNews } from '../components/news/MainNews';
import { Feed } from '../components/news/Feed';
import { SideBar } from '../components/sidebar/SideBar';

export const LatestNewsScreen: React.FC = () => {
  const newsItems: NewsList = NewsJSON;
  const featuredNews = newsItems.filter((item: News) => item.featured);
  const otherNews = newsItems.filter((item: News) => !item.featured);
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
