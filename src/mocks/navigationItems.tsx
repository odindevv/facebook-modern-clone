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
  href: string;
}

export const navigationItems: Array<NavigationItem> = [
  { icon: <NewsIcon fontSize="large" />, label: 'Latest News', href: '/news' },
  { icon: <PeopleIcon fontSize="large" />, label: 'Friends', href: '/friends' },
  { icon: <GroupIcon fontSize="large" />, label: 'Group', href: '#' },
  { icon: <CartIcon fontSize="large" />, label: 'Marketplace', href: '#' },
];
