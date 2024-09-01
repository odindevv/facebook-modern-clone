import { Navigate, Outlet } from 'react-router-dom';

interface Props {
  isLogged: boolean;
  redirectTo: string;
}

export const ProtectedRoute: React.FC<Props> = ({ isLogged, redirectTo }) => {
  return isLogged ? <Outlet /> : <Navigate to={redirectTo} />;
};
