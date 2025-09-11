import { Navigate, Outlet } from 'react-router-dom';
import { RoutePath } from '../../../routing';

export const ProtectedRoute = () => {
  const isAuthorized = true;

  return isAuthorized ? <Outlet /> : <Navigate to={RoutePath.LOGIN} />;
};
