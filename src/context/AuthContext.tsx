import { ReactNode, createContext, useContext, useState } from 'react';

interface AuthContextType {
  isAuth: boolean;
  setAuth: (auth: boolean) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProps> = ({ children }) => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const setAuth = (auth: boolean) => {
    setIsAuth(auth);
  };

  return (
    <AuthContext.Provider value={{ isAuth, setAuth }}>
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
