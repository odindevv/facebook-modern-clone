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

import { useDropdownMenu } from '../../hooks/useDropdownMenu';
import { PostAction } from './PostAction';
import { User } from '../../types';
import { useState } from 'react';

interface Props {
  user: User;
}

type PrivacyPost = 'public' | 'private' | 'friends';

export const CreatePost: React.FC<Props> = ({ user }) => {
  const { anchorEl, open, handleClick, handleClose } = useDropdownMenu();
  const [privacy, setPrivacy] = useState<PrivacyPost>('public');

  const handlePrivacy = (event: React.MouseEvent<HTMLElement>) => {
    const type = event.currentTarget.textContent;
    if (type === null) return;
    if (type === 'public' || type === 'private' || type === 'friends') {
      const value: PrivacyPost = type;
      setPrivacy(value);
    }
    handleClose();
  };
  return (
    <Card
      sx={{
        display: 'flex',
        gap: 2,
        boxShadow: 4,
        pt: 1,
        px: 2,
        mb: 2,
      }}
    >
      <CardContent sx={{ width: '100%' }}>
        <Box display="flex" flexDirection="column" sx={{ flexGrow: 1 }}>
          <Box display="flex" gap={1}>
            <Avatar
              alt="Avatar Profile"
              src={user.avatar || ''}
              sx={{
                width: { xs: 42, sm: 42, md: 56 },
                height: { xs: 42, sm: 42, md: 56 },
              }}
            />
            <Box display="flex" flexDirection="column" sx={{ width: '100%' }}>
              <Typography variant="h6" ml={1} fontWeight="bold">
                {user.name}
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
                  {privacy}
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  disableAutoFocusItem
                  PaperProps={{ sx: { maxHeight: 200, width: '20ch' } }}
                >
                  <MenuItem
                    onClick={handlePrivacy}
                    sx={{ textTransform: 'capitalize' }}
                  >
                    public
                  </MenuItem>
                  <MenuItem
                    onClick={handlePrivacy}
                    sx={{ textTransform: 'capitalize' }}
                  >
                    private
                  </MenuItem>
                  <MenuItem
                    onClick={handlePrivacy}
                    sx={{ textTransform: 'capitalize' }}
                  >
                    friends
                  </MenuItem>
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
