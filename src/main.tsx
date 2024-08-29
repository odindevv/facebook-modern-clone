import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { CustomThemeProvider } from './theme/CustomThemeProvider.tsx';
import { CssBaseline } from '@mui/material';

createRoot(document.getElementById('root')!).render(
  <CustomThemeProvider>
    <CssBaseline />
    <App />
  </CustomThemeProvider>
);
