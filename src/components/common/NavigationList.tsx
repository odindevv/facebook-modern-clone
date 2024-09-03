import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from '@mui/material';
import { NavLink } from 'react-router-dom';

import { navigationItems } from '../../mocks/navigationItems';

export const NavigationList: React.FC = () => {
  const theme = useTheme();
  const color =
    theme.palette.mode === 'light' ? '#fff' : theme.palette.primary.main;

  return (
    <>
      {navigationItems.map((item) => (
        <ListItemButton key={item.label} component={NavLink} to={item.href}>
          <ListItemIcon
            sx={{
              color: { xs: color, sm: color, md: 'primary.main' },
            }}
          >
            {item.icon}
          </ListItemIcon>
          <ListItemText
            sx={{
              color: 'primary.main',
              display: { xs: 'none', sm: 'none', md: 'block' },
            }}
            primary={item.label}
          />
        </ListItemButton>
      ))}
    </>
  );
};
