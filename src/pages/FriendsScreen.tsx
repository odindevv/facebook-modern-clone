import { Container, Stack, Grid } from '@mui/material';
import { NavBar } from '../components/navbar/NavBar';
import { FriendCard } from '../components/friends/FriendCard';
import friends from '../mocks/friends.json';
import { FriendList } from '../types';
import { SideBar } from '../components/sidebar/SideBar';

export const FriendsScreen: React.FC = () => {
  const Friends: FriendList = friends;
  return (
    <Container maxWidth={false} sx={{ mt: 10 }}>
      <NavBar />
      <Stack direction="row" spacing={{ Xs: 0, sm: 0, md: 2 }}>
        <SideBar />
        <Grid sx={{ flex: 7 }} container>
          {Friends.map((friend, key) => (
            <Grid key={key} item xs={12} sm={6} md={6} lg={3}>
              <FriendCard
                name={friend.name}
                username={friend.username}
                biography={friend.biography}
                avatar={friend.avatar}
                banner={friend.banner}
              />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  );
};
