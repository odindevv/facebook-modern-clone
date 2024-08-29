import { Box, Button, Typography, IconButton } from '@mui/material';
import {
  VideoCall as LiveVideoIcon,
  PhotoCamera as PhotoCameraIcon,
  Mood as MoodIcon,
} from '@mui/icons-material';
export const PostAction: React.FC = () => {
  return (
    <Box display="flex" gap={1}>
      <Button
        variant="text"
        sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
      >
        <IconButton aria-label="Live">
          <LiveVideoIcon />
        </IconButton>
        <Typography
          variant="body1"
          sx={{
            display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' },
          }}
        >
          Live
        </Typography>
      </Button>
      <Button
        variant="text"
        sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
      >
        <IconButton aria-label="PhotoCamera">
          <PhotoCameraIcon />
        </IconButton>
        <Typography
          variant="body1"
          sx={{
            display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' },
          }}
        >
          Photo/Video
        </Typography>
      </Button>
      <Button
        variant="text"
        sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
      >
        <IconButton aria-label="MoodIcon">
          <MoodIcon />
        </IconButton>
        <Typography
          variant="body1"
          sx={{
            display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' },
          }}
        >
          Feling
        </Typography>
      </Button>
    </Box>
  );
};
