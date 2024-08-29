import {
  Box,
  CardActionArea,
  CardContent,
  IconButton,
  Typography,
} from '@mui/material';
import { ControlPoint as ControlPointIcon } from '@mui/icons-material';

interface Props {
  backgroundStory: string;
  user: string;
  isPostStory?: boolean;
}
export const StoryCard: React.FC<Props> = ({
  backgroundStory,
  user,
  isPostStory = false,
}) => {
  return (
    <CardActionArea
      sx={{
        position: 'relative',
        width: '150px',
        height: '250px',
        borderRadius: '9px',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${backgroundStory})`, // Cambia esta URL por la imagen que desees
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: '70%',
          backgroundColor: '#000000',
        }}
      />
      {isPostStory ? (
        <CardContent
          sx={{
            position: 'absolute',
            bottom: 10,
            left: 0,
            right: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <IconButton>
            <ControlPointIcon sx={{ fontSize: '3rem' }} />
          </IconButton>
          <Typography variant="h6">Post Story</Typography>
        </CardContent>
      ) : (
        <CardContent
          sx={{
            position: 'absolute',
            bottom: 10,
            left: 0,
            right: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="h6" textAlign="center">
            {user}
          </Typography>
        </CardContent>
      )}
    </CardActionArea>
  );
};
