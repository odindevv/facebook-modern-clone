import { Container, Box, Stack } from '@mui/material';
import { NavBar } from '../components/navbar/NavBar';
import { SideBar } from '../components/sidebar/SideBar';
import { MainContent } from '../components/home/MainContent';
import { RightBar } from '../components/rightbar/RightBar';
import { useAuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

export const HomeScreen: React.FC = () => {
  const { user } = useAuthContext();
  if (user === null) return <Navigate to="/" />;
  return (
    <Container maxWidth={false}>
      <NavBar />
      <Stack mt={10} direction="row" spacing={2} justifyContent="space-between">
        <SideBar />
        <Box flex={5} p={2} overflow="hidden">
          <MainContent user={user} />
        </Box>
        <Box
          flex={2}
          sx={{
            display: {
              xs: 'none',
              sm: 'none',
              md: 'block',
            },
          }}
        >
          <RightBar />
        </Box>
      </Stack>
    </Container>
  );
};
