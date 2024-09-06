import { ReactNode, createContext, useContext, useState } from 'react';
import type { User } from '../types';

interface AuthContextType {
  isAuth: boolean;
  setAuth: (auth: boolean) => void;
  user: User | null;
  setUserData: (user: User | null) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProps> = ({ children }) => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  const setAuth = (auth: boolean) => {
    setIsAuth(auth);
  };

  const setUserData = (user: User | null) => {
    setUser(user);
  };

  const logout = () => {
    setUser(null);
    setIsAuth(false);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider
      value={{ isAuth, setAuth, user, setUserData, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error('useAuthContext must be used within an AuthProvider');
  return context;
};
