import { ReactNode, useState } from 'react';

import type { ThemeMode } from '../types';
import { createTheme, Theme, ThemeProvider } from '@mui/material';
import ThemeContext from '../context/ThemeContext';

interface Props {
  children: ReactNode;
}
export const CustomThemeProvider: React.FC<Props> = ({ children }) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>('dark');

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const theme: Theme = createTheme({
    palette: {
      mode: themeMode,
      primary: {
        main: '#1976d2',
        light: '#63a4ff',
        dark: '#004ba0',
      },
      secondary: {
        main: '#9E9E9E',
      },

      background: {
        default: themeMode === 'light' ? '#F5F5F5' : '#131213',
        paper: themeMode === 'light' ? '#ffffff' : '#1f1e1f',
      },
    },
  });
  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
