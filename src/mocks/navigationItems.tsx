import { ReactElement } from 'react';

import {
  NewReleases as NewsIcon,
  People as PeopleIcon,
  Groups as GroupIcon,
  ShoppingCart as CartIcon,
} from '@mui/icons-material';

interface NavigationItem {
  icon: ReactElement;
  label: string;
}

export const navigationItems: Array<NavigationItem> = [
  { icon: <NewsIcon fontSize="large" />, label: 'Latest News' },
  { icon: <PeopleIcon fontSize="large" />, label: 'Friends' },
  { icon: <GroupIcon fontSize="large" />, label: 'Group' },
  { icon: <CartIcon fontSize="large" />, label: 'Marketplace' },
];
