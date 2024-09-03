import { Navigate, Outlet } from 'react-router-dom';

interface Props {
  isAuth: boolean;
  redirectTo: string;
}

export const ProtectedRoute: React.FC<Props> = ({ isAuth, redirectTo }) => {
  return isAuth ? <Outlet /> : <Navigate to={redirectTo} />;
};
