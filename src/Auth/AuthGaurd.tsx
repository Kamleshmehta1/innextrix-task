import React from 'react';
import useAuth from './useAuth';
import { Navigate } from 'react-router-dom';
import { UNAUTHORIZE_PATH } from '../routes/paths';

type authProps = {
  children: React.ReactNode;
};

function AuthGuard(props: authProps) {
  const { children } = props;

  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to={UNAUTHORIZE_PATH.SIGN_IN.fullPath} />;
  }

  return <>{children}</>;
}

export default AuthGuard;
