import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { CustomThemeProvider } from './theme/CustomThemeProvider.tsx';
import { CssBaseline } from '@mui/material';
import { AuthProvider } from './context/AuthContext.tsx';

createRoot(document.getElementById('root')!).render(
  <AuthProvider>
    <CustomThemeProvider>
      <CssBaseline />
      <App />
    </CustomThemeProvider>
  </AuthProvider>
);
