import {
  Avatar,
  Box,
  Button,
  Menu,
  MenuItem,
  Typography,
  TextField,
  Card,
  CardContent,
} from '@mui/material';

import { useDropdownMenu } from '../hooks/useDropdownMenu';
import { PostAction } from './PostAction';

export const CreatePost: React.FC = () => {
  const { anchorEl, open, handleClick, handleClose } = useDropdownMenu();
  return (
    <Card
      sx={{
        display: 'flex',
        gap: 2,
        boxShadow: 4,
        pt: 1,
        px: 2,
      }}
    >
      <CardContent sx={{ width: '100%' }}>
        <Box display="flex" flexDirection="column" sx={{ flexGrow: 1 }}>
          <Box display="flex" gap={1}>
            <Avatar
              alt="Avatar Profile"
              src="https://i.pinimg.com/originals/db/b1/07/dbb107c31711fb06ada1b5f754f7bbb6.jpg"
              sx={{
                width: { xs: 42, sm: 42, md: 56 },
                height: { xs: 42, sm: 42, md: 56 },
              }}
            />
            <Box display="flex" flexDirection="column" sx={{ width: '100%' }}>
              <Typography variant="h6" ml={1} fontWeight="bold">
                Odin Martinez
              </Typography>
              <Box display="flex" flexDirection="column" sx={{ width: '100%' }}>
                <Button
                  variant="text"
                  component="span"
                  onClick={handleClick}
                  sx={{
                    display: 'inline-flex',
                    width: 'auto',
                    alignSelf: 'flex-start',
                  }}
                >
                  Public
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  PaperProps={{ sx: { maxHeight: 200, width: '20ch' } }}
                >
                  <MenuItem onClick={handleClose}>Public</MenuItem>
                  <MenuItem onClick={handleClose}>Private</MenuItem>
                  <MenuItem onClick={handleClose}>Only Friends</MenuItem>
                </Menu>
                <TextField
                  multiline
                  variant="standard"
                  rows={2}
                  placeholder="Appreciate the present, enjoy what you have."
                  sx={{ ml: 1, overflow: 'hidden', pr: 2 }}
                />
                <PostAction />
              </Box>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
