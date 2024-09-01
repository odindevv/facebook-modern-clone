import React from 'react';
import { Box, Container } from '@mui/material';
import { NavBar } from '../components/navbar/NavBar';
import { ImageComponent } from '../components/ImageComponent';
import { UserHeader } from '../components/profile/UserHeader';
import { UserBio } from '../components/profile/UserBio';
import { CreatePost } from '../components/CreatePost';
import { Post } from '../components/Post';

export const ProfileScreen: React.FC = () => {
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
          src="https://i.pinimg.com/originals/fe/a5/70/fea570ba270e6eb1fa11f1f7165940b4.jpg"
          alt="Description"
          borderRadius="12x"
        />
        <UserHeader />
        <Box
          display="flex"
          flexDirection={{ xs: 'column', sm: 'column', md: 'row' }}
          gap={2}
          mt={4}
        >
          <UserBio />
          <Box display="flex" flexDirection="column" flex={1} gap={2}>
            <CreatePost />
            <Post
              avatar="https://i.pinimg.com/originals/db/b1/07/dbb107c31711fb06ada1b5f754f7bbb6.jpg"
              user="Odin Martinez"
              date="March 1953 11:58 P.M"
              description="Las cosas solo cambian cuando lo haces en secreto."
              picturePost="https://c0.wallpaperflare.com/preview/966/1009/88/lake-memphremagog-aston-martin-luxury-money.jpg"
            />
            {[1, 2, 3, 4, 5].map((_, item) => (
              <Post
                key={item}
                avatar="https://i.pinimg.com/originals/db/b1/07/dbb107c31711fb06ada1b5f754f7bbb6.jpg"
                user="Odin Martinez"
                date="March 1953 11:58 P.M"
                description="Las cosas solo cambian cuando lo haces en secreto."
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
