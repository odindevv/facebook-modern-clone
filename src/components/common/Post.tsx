import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { PostUserInfo } from '../post/PostUserInfo';

interface Props {
  avatar: string;
  user: string;
  date: string;
  description: string;
  picturePost?: string;
}
export const Post: React.FC<Props> = ({
  avatar,
  user,
  date,
  description,
  picturePost,
}) => {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        boxShadow: 4,
        pb: 2,
        mt: 2,
        bgcolor: 'primary',
      }}
    >
      <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
        <PostUserInfo avatar={avatar} user={user} date={date} />
        <Box display="flex" flexDirection="column" gap={2}>
          <Typography variant="body1">{description}</Typography>
        </Box>
      </CardContent>

      {picturePost && (
        <Box m={1}>
          <CardMedia
            component="img"
            image={picturePost}
            alt="Image title"
            sx={{
              mx: 'auto',
              width: '100%',
              maxWidth: '500px',
              maxHeight: '350px',
              objectFit: 'cover',
              objectPosition: 'cover',
              borderRadius: '6px',
              boxShadow: '4',
              cursor: 'pointer',
            }}
          />
        </Box>
      )}
    </Card>
  );
};
