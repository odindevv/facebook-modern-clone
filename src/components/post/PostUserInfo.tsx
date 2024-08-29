import {
  Box,
  Menu,
  MenuItem,
  IconButton,
  Typography,
  Avatar,
} from '@mui/material';
import { MoreVert as MoreVertIcon } from '@mui/icons-material';
import { useDropdownMenu } from '../../hooks/useDropdownMenu';

interface Props {
  avatar: string;
  user: string;
  date: string;
}

export const PostUserInfo: React.FC<Props> = ({ avatar, user, date }) => {
  const { anchorEl, open, handleClick, handleClose } = useDropdownMenu();

  return (
    <Box display="flex" gap={2}>
      <Avatar
        alt={`Avatar ${user}`}
        src={avatar}
        sx={{
          width: { xs: 42, sm: 42, md: 56 },
          height: { xs: 42, sm: 42, md: 56 },
        }}
      />
      <Box display="flex" flexDirection="column" width="100%">
        <Typography variant="h6" fontWeight="bold">
          {user}
        </Typography>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          <Typography variant="body1" mb={2}>
            {date}
          </Typography>
          <IconButton onClick={handleClick}>
            <MoreVertIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{ sx: { maxHeight: 200, width: '20ch' } }}
          >
            <MenuItem onClick={handleClose}>Share</MenuItem>
            <MenuItem onClick={handleClose}>Save</MenuItem>
          </Menu>
        </Box>
      </Box>
    </Box>
  );
};
