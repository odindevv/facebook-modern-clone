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
import { ThemeToggleButton } from '../common/ThemeToggleButton';
import { NavLink } from 'react-router-dom';
import { useDropdownMenu } from '../../hooks/useDropdownMenu';
import { User } from '../../types';

interface Props {
  user: User;
  logout: () => void;
}

const menuOptions = [
  { label: 'Settings & Privancy', icon: <SettingsIcon /> },
  { label: 'Help & Support', icon: <HelpIcon /> },
  { label: 'Display & Accesibility', icon: <AccessibilityIcon /> },
];

export const AccountMenu: React.FC<Props> = ({ user, logout }) => {
  const { anchorEl, open, handleClick, handleClose } = useDropdownMenu();

  const handleLogout = () => {
    logout();
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
          <Avatar alt="Avatar Profile" src={user.avatar || ''} />
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
          <Box
            component={NavLink}
            to={`/user/${user.username}`}
            sx={{
              display: 'flex',
              pr: 2,
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            <Avatar src={user.avatar || ''} />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography variant="body1">{user.name}</Typography>
              <Typography variant="body2">See your profile</Typography>
            </Box>
          </Box>
          <ThemeToggleButton />
        </MenuItem>
        <Divider />

        {menuOptions.map((item) => (
          <MenuItem key={item.label} onClick={handleClose}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            {item.label}
          </MenuItem>
        ))}
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};
