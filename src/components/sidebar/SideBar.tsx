import { Box, Divider, List, Typography } from '@mui/material';
import { NavigationList } from '../common/NavigationList';
export const SideBar: React.FC = () => {
  return (
    <List
      sx={{
        flex: 2,
        display: { xs: 'none', sm: 'none', md: 'block' },
      }}
    >
      <NavigationList />

      <Box mt={2}>
        <Typography
          component="a"
          href="#"
          variant="body1"
          sx={{ color: 'primary.main', ml: 2, textDecoration: 'none' }}
        >
          See more
        </Typography>
      </Box>
      <Divider sx={{ mt: 2 }} />
    </List>
  );
};
