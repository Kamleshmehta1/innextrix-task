import { Navigate } from 'react-router-dom';
import useAuth from './useAuth';
import { AUTHORIZED_PATHS } from '../routes/paths';

type unAuthProps = {
  children: React.ReactNode;
};

function UnAuthGuard(props: unAuthProps) {
  const { children } = props;

  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to={AUTHORIZED_PATHS.HOME.fullPath} />;
  }

  return <>{children}</>;
}

export default UnAuthGuard;
