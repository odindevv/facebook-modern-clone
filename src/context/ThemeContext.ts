import { createContext, useContext } from 'react';
import type { ThemeMode } from '../types';

interface ThemeContextType {
  themeMode: ThemeMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  themeMode: 'light',
  toggleTheme: () => console.warn('Toggle Theme function no provider'),
});

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

export default ThemeContext;
