import { Box, Container, Stack, Typography } from '@mui/material';
import { Logo } from '../components/Logo';

export const LoginScreen: React.FC = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pb: 6,
      }}
    >
      <Stack
        direction={{ xs: 'column', sm: 'column', md: 'row' }}
        alignItems="center"
        justifyContent="center"
        gap={6}
        mt={{ xs: 4, sm: 4, md: 0 }}
      >
        <Box
          display="flex"
          flexDirection="column"
          textAlign={{ xs: 'center', sm: 'center', md: 'start' }}
          sx={{ width: '100%', maxWidth: '450px' }}
        >
          <Box alignSelf="center">
            <Logo />
          </Box>

          <Typography variant="h5">
            Connect with friends and the world around you on Facebook.
          </Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          bgcolor="inherit"
          borderRadius={2}
          boxShadow={3}
          sx={{ height: '350px', width: '350px' }}
        ></Box>
      </Stack>
    </Container>
  );
};
