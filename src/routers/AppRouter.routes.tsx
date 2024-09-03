import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';
import { HomeScreen } from '../pages/HomeScreen';
import { LoginScreen } from '../pages/LoginScreen';
import { ProfileScreen } from '../pages/ProfileScreen';
import { LatestNewsScreen } from '../pages/LatestNewsScreen';
import { FriendsScreen } from '../pages/FriendsScreen';
import { useAuthContext } from '../context/AuthContext';

export const AppRouter: React.FC = () => {
  const { isAuth } = useAuthContext();
  return (
    <BrowserRouter>
      <Routes>
        {/* Publicas */}

        {!isAuth && <Route path="/" element={<LoginScreen />} />}

        {/* Privadas */}
        <Route element={<ProtectedRoute isAuth={isAuth} redirectTo="/" />}>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/news" element={<LatestNewsScreen />} />
          <Route path="/friends" element={<FriendsScreen />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
