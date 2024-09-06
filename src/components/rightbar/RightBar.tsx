import { Box, Stack, Typography } from '@mui/material';
import { Advertisement } from './Advertisement';
import { UserProfileItem } from '../common/UserProfileItem';
import friends from '../../mocks/friends.json';
import { FriendList } from '../../types';

export const RightBar: React.FC = () => {
  const Friends: FriendList = friends;
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
          {Friends.map((friend) => (
            <UserProfileItem
              key={friend.username}
              avatar={friend.avatar}
              user={friend.name}
              status="Active"
              href={`/user/${friend.username}`}
            />
          ))}
        </Stack>
      </Box>
    </Box>
  );
};
