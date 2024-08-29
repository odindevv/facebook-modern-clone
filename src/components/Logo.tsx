import { Box, Typography } from '@mui/material';

export const Logo: React.FC = () => {
  return (
    <Box alignContent="center" alignItems="center">
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
