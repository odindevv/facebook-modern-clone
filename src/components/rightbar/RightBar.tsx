import { Box, Stack, Typography } from '@mui/material';
import { Advertisement } from './Advertisement';
import { UserProfileItem } from '../UserProfileItem';

export const RightBar: React.FC = () => {
  return (
    <Box
      flex={1}
      p={2}
      boxShadow={3}
      mt={2}
      height="max-content"
      sx={{
        maxWidth: '350px',
      }}
    >
      <Box display="flex" flexDirection="column" gap={1}>
        <Advertisement />
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mt={3}
        >
          <Typography variant="h6" pr={1}>
            Conversation
          </Typography>
          <Typography
            variant="body2"
            component="a"
            href="#"
            color="primary.main"
            sx={{ textDecoration: 'none' }}
          >
            Hide Chat
          </Typography>
        </Box>
        <Stack direction="column" spacing={2}>
          <UserProfileItem
            avatar="https://favim.com/pd/s11/orig/7/761/7618/76188/edgy-billie-eilish-psd-Favim.com-7618804.jpg"
            user="Evianny Lopez"
            status="Active"
          />
          <UserProfileItem
            avatar="https://wallpapercave.com/wp/wp1891962.jpg"
            user="Cristian Carrasco"
            status="Offline"
          />
          <UserProfileItem
            avatar="https://i.pinimg.com/originals/ad/f2/e4/adf2e43db14bf8ea23a0ab99ba2a4ad0.jpg"
            user="Diornan Garcia"
            status="Active"
          />
        </Stack>
      </Box>
    </Box>
  );
};
