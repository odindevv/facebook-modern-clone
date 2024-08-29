import { Badge, Box, IconButton, useTheme } from '@mui/material';
import {
  Notifications as NotificationsIcon,
  Email as EmailIcon,
  LiveTv as LiveTvIcon,
} from '@mui/icons-material';

export const NotificationsIcons: React.FC = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark' ? 'primary' : '#fff';
  return (
    <Box display="flex" gap={{ xs: 1, md: 3 }}>
      <IconButton>
        <Badge badgeContent={5} sx={{ color: isDarkMode }}>
          <NotificationsIcon sx={{ color: '#ffffff' }} />
        </Badge>
      </IconButton>
      <IconButton>
        <Badge badgeContent={5} sx={{ color: isDarkMode }}>
          <EmailIcon sx={{ color: '#ffffff' }} />
        </Badge>
      </IconButton>
      <IconButton>
        <LiveTvIcon sx={{ color: '#ffffff' }} />
      </IconButton>
    </Box>
  );
};
