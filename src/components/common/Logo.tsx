import { Box, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const Logo: React.FC = () => {
  return (
    <Box
      component={NavLink}
      to="/"
      color="inherit"
      alignContent="center"
      alignItems="center"
      sx={{ textDecoration: 'none' }}
    >
      <Typography
        variant="h5"
        sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}
      >
        RagnarV
      </Typography>
      <Typography
        variant="h2"
        sx={{
          display: { xs: 'flex', md: 'none' },
          width: 50,
          height: 46,
          bgcolor: 'primary.main',
        }}
      >
        R
      </Typography>
    </Box>
  );
};
