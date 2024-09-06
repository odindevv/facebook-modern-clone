import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';
import { HomeScreen } from '../pages/HomeScreen';
import { LoginScreen } from '../pages/LoginScreen';
import { ProfileScreen } from '../pages/ProfileScreen';
import { LatestNewsScreen } from '../pages/LatestNewsScreen';
import { FriendsScreen } from '../pages/FriendsScreen';
import { useAuthContext } from '../context/AuthContext';
import { useEffect, useState } from 'react';
import { validateUser } from '../services/authService';
import { User } from '../types';

export const AppRouter: React.FC = () => {
  const { isAuth, setAuth, setUserData } = useAuthContext();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const checkAuth = async () => {
      const storedUser = localStorage.getItem('user');

      if (storedUser) {
        try {
          const userData: User = JSON.parse(storedUser);
          if (userData.email !== null && userData.password !== null) {
            const isValid = await validateUser(
              userData.email,
              userData.password
            );
            if (isValid) {
              console.log(userData);
              setUserData(isValid);
              setAuth(true);
            } else {
              console.log('no es valido');
            }
          }
        } catch (error) {
          console.log(error);
        }
      }
      setLoading(false);
    };

    checkAuth();
  }, [isAuth]);

  if (loading) return <h1>Loading...</h1>;
  return (
    <BrowserRouter>
      <Routes>
        {/* Publicas */}

        {!isAuth && <Route path="/" element={<LoginScreen />} />}

        {/* Privadas */}
        <Route element={<ProtectedRoute isAuth={isAuth} redirectTo="/" />}>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/user/:username" element={<ProfileScreen />} />
          <Route path="/news" element={<LatestNewsScreen />} />
          <Route path="/friends" element={<FriendsScreen />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
