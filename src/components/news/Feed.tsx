import { Box, Grid, Typography } from '@mui/material';
import { NewsList } from '../../types';
import { MediaCard } from '../common/MediaCard';
interface Props {
  news: NewsList;
}
export const Feed: React.FC<Props> = ({ news }) => {
  return (
    <Box>
      <Typography variant="h6">News</Typography>
      <Grid container sx={{ width: '100%' }}>
        {news.map((item, key) => (
          <Grid key={key} item xs={12} sm={6} md={3} width="95%">
            <MediaCard {...item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
