import { useState } from 'react';

import {
  Avatar,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
  Box,
  Typography,
} from '@mui/material';

import {
  Settings as SettingsIcon,
  Help as HelpIcon,
  AccessibilityNew as AccessibilityIcon,
  Logout as LogoutIcon,
} from '@mui/icons-material';
import { ThemeToggleButton } from '../ThemeToggleButton';

export const AccountMenu: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Tooltip title="Account settings">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <Avatar
            alt="Avatar Profile"
            src="https://i.pinimg.com/originals/db/b1/07/dbb107c31711fb06ada1b5f754f7bbb6.jpg"
          />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 42,
                height: 42,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem
          onClick={handleClose}
          sx={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <Box sx={{ display: 'flex', pr: 2 }}>
            <Avatar />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography variant="body1">Odin Martinez</Typography>
              <Typography variant="body2">See your profile</Typography>
            </Box>
          </Box>
          <ThemeToggleButton />
        </MenuItem>

        <Divider />

        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <SettingsIcon fontSize="small" />
          </ListItemIcon>
          Settings & Privancy
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <HelpIcon fontSize="small" />
          </ListItemIcon>
          Help & Support
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <AccessibilityIcon fontSize="small" />
          </ListItemIcon>
          Display & Accesibility
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};
