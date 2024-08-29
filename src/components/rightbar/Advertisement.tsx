import { Box, Typography } from '@mui/material';

export const Advertisement: React.FC = () => {
  return (
    <>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h6" pr={1}>
          Advertisement
        </Typography>
        <Typography
          variant="body2"
          component="a"
          href="#"
          color="primary.main"
          sx={{ textDecoration: 'none' }}
        >
          Close
        </Typography>
      </Box>
      <Box
        component="img"
        src="https://w0.peakpx.com/wallpaper/183/804/HD-wallpaper-hollow-knight-hollow.jpg"
        alt="Advertisement"
        sx={{
          width: '100%',
          maxWidth: '300px',
          height: '200px',
          maxHeight: '240px',
          objectFit: 'cover',
          objectPosition: 'center',
          borderRadius: '6px',
          boxShadow: 2,
          cursor: 'pointer',
        }}
      />
    </>
  );
};
