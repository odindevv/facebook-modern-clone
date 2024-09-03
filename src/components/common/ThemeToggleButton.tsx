import { IconButton } from '@mui/material';
import { useThemeContext } from '../../context/ThemeContext';
import {
  LightMode as LightModeIcon,
  DarkMode as DarkModeIcon,
} from '@mui/icons-material';

export const ThemeToggleButton: React.FC = () => {
  const { themeMode, toggleTheme } = useThemeContext();

  return (
    <IconButton onClick={toggleTheme}>
      {themeMode === 'light' ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  );
};
