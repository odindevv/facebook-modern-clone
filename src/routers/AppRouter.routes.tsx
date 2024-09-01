import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';
import { HomeScreen } from '../pages/HomeScreen';
import { LoginScreen } from '../pages/LoginScreen';
import { ProfileScreen } from '../pages/ProfileScreen';

export const AppRouter: React.FC = () => {
  const isLogged = false;
  return (
    <BrowserRouter>
      <Routes>
        {/* Publicas */}

        {!isLogged && <Route path="/" element={<LoginScreen />} />}

        {/* Privadas */}
        <Route element={<ProtectedRoute isLogged={isLogged} redirectTo="/" />}>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
