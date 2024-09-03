import { Box, Button, Typography } from '@mui/material';
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
        startIcon={<LiveVideoIcon />}
        sx={{ display: 'flex', alignItems: 'center' }}
      >
        <Typography
          variant="body1"
          sx={{
            display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' },
          }}
          pt={1}
        >
          Live
        </Typography>
      </Button>
      <Button
        variant="text"
        startIcon={<PhotoCameraIcon />}
        sx={{ display: 'flex', alignItems: 'center' }}
      >
        <Typography
          variant="body1"
          sx={{
            display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' },
          }}
          pt={1}
        >
          Photo/Video
        </Typography>
      </Button>
      <Button
        variant="text"
        startIcon={<MoodIcon />}
        sx={{ display: 'flex', alignItems: 'center' }}
      >
        <Typography
          variant="body1"
          sx={{
            display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' },
          }}
          pt={1}
        >
          Feling
        </Typography>
      </Button>
    </Box>
  );
};
