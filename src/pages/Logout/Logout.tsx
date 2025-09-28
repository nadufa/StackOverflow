import { RoutePath } from '@/app/routing';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogout } from './api';

export const Logout = () => {
  const navigate = useNavigate();
  useLogout();

  useEffect(() => {
    navigate(RoutePath.LOGIN, { replace: true });
  }, [navigate]);

  return <span>Logging out..</span>;
};
