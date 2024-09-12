import { Box, Grid } from '@mui/material';
import { NewsList } from '../../types';
import { SuperposedCard } from './SuperposedCard';

interface Props {
  featuredNews: NewsList;
}

export const MainNews: React.FC<Props> = ({ featuredNews }) => {
  const mainNew = featuredNews[0];
  return (
    <Box
      display="flex"
      flexDirection={{
        xs: 'column',
        sm: 'column',
        md: 'column',
        lg: 'column',
        xl: 'row',
      }}
      gap={2}
      height="100%"
    >
      <Box
        flexGrow={1}
        mt={1}
        sx={{
          width: {
            xs: '100%',
            sm: '100%',
            md: '100%',
            lg: '100%',
            xl: '250px',
          },
        }}
        height={{
          xs: '350px',
          sm: '350px',
          md: '450px',
          lg: '450px',
          xl: '788px',
        }}
      >
        <SuperposedCard {...mainNew} />
      </Box>
      <Box flex={2} display="flex" flexDirection="column" gap={2}>
        <Grid container>
          {featuredNews.slice(1, featuredNews.length).map((item, key) => (
            <Grid
              key={key}
              item
              xs={12}
              sm={12}
              md={6}
              p={1}
              sx={{
                width: '350px',
                height: { xs: '250px', sm: '250px', md: '400px' },
              }}
            >
              <SuperposedCard {...item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
