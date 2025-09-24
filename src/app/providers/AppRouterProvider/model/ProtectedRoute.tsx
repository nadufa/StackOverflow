import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../../../pages/Login/LoginForm/api/useLogin';
import { RoutePath } from '../../../routing';

export const ProtectedRoute = () => {
  const { data, isLoading } = useAuth();

  if (isLoading) return <div>Loading...</div>;

  return data?.username ? (
    <Outlet context={{ authUserId: data.id, authUserUsername: data.username }} />
  ) : (
    <Navigate to={RoutePath.LOGIN} replace />
  );
};
