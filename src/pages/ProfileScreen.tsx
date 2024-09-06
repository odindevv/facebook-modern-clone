import { Box, Container } from '@mui/material';
import { NavBar } from '../components/navbar/NavBar';
import { ImageComponent } from '../components/common/ImageComponent';
import { UserHeader } from '../components/profile/UserHeader';
import { UserBio } from '../components/profile/UserBio';
import { CreatePost } from '../components/common/CreatePost';
import { Post } from '../components/common/Post';
import { Navigate, useParams } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { useProfileDetails } from '../hooks/useProfileDetails';

export const ProfileScreen: React.FC = () => {
  const { user } = useAuthContext();
  const { username } = useParams<{ username: string }>();

  const { userData, loading } = useProfileDetails(username || '');

  if (loading) return <h1>Loading...</h1>;
  if (!userData) return <Navigate to="/" />;
  console.log('h');
  return (
    <Container maxWidth={false}>
      <NavBar />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        maxWidth={{ sx: '100%', sm: '100%', md: '90%', lg: '80%' }}
        mx="auto"
        mt={10}
        pb={5}
      >
        <ImageComponent
          width="100%"
          height="350px"
          src={userData.banner || ''}
          alt="Description"
          borderRadius="12x"
        />
        <UserHeader user={userData} />
        <Box
          display="flex"
          flexDirection={{ xs: 'column', sm: 'column', md: 'row' }}
          gap={2}
          mt={4}
        >
          <UserBio user={userData} />
          <Box display="flex" flexDirection="column" flex={1} gap={2}>
            {user?.username === userData.username && (
              <CreatePost user={userData} />
            )}
            <Post
              avatar={userData?.avatar || ''}
              name={userData?.name || ''}
              username={userData?.username || ''}
              date="March 1953 11:58 P.M"
              description="Las cosas solo cambian cuando lo haces en secreto."
              picturePost="https://c0.wallpaperflare.com/preview/966/1009/88/lake-memphremagog-aston-martin-luxury-money.jpg"
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
