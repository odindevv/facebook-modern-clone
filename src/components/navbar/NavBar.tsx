import {
  AppBar,
  Box,
  Stack,
  Toolbar,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import { Logo } from '../common/Logo';
import { NotificationsIcons } from './NotificationsIcons';
import { AccountMenu } from './AccountMenu';
import { SearchBar } from './SearchBar';
import { NavigationList } from '../common/NavigationList';

export const NavBar: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <>
      {/*  Main AppBar for Tablets, Laptops and Desktops screen*/}
      <AppBar>
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Box display="flex" gap={{ xs: 2, md: 4 }}>
            <Logo />
            <NotificationsIcons />
          </Box>
          <Box display="flex" gap={3}>
            <SearchBar />
            <AccountMenu />
          </Box>
        </Toolbar>
      </AppBar>

      {/*  Main AppBar for Mobiles screen */}
      {isMobile && (
        <AppBar
          position="fixed"
          color="primary"
          sx={{ top: 'auto', bottom: 0 }}
        >
          <Toolbar>
            <Stack direction="row" spacing={1} width="100%">
              <NavigationList />
            </Stack>
          </Toolbar>
        </AppBar>
      )}
    </>
  );
};
