import { RoutePath } from '@/app/routing';
import { useAuth } from '@/pages/Login/LoginForm/api';
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute = () => {
  const { data, isLoading } = useAuth();

  if (isLoading) return <div>Loading...</div>;

  return data?.username ? (
    <Outlet context={{ authUserId: data.id, authUserUsername: data.username }} />
  ) : (
    <Navigate to={RoutePath.LOGIN} replace />
  );
};
