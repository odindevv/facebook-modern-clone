import { Container, Box, Stack } from '@mui/material';
import { NavBar } from './components/navbar/NavBar';
import { SideBar } from './components/sidebar/SideBar';
import { MainContent } from './components/home/MainContent';
import { RightBar } from './components/rightbar/RightBar';

function App() {
  return (
    <Container maxWidth={false}>
      <NavBar />
      <Stack mt={10} direction="row" spacing={2} justifyContent="space-between">
        <SideBar />
        <Box flex={5} p={2} overflow="hidden">
          <MainContent />
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
}

export default App;
