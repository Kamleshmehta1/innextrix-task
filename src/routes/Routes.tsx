import { Navigate, useRoutes } from 'react-router-dom';
import { AUTHORIZED_PATHS, ROOTS_PATH, UNAUTHORIZE_PATH } from './paths';
import { lazy } from 'react';
import AuthGuard from '../Auth/AuthGaurd';
import MainLayout from '../Components/MainLayout';
import WrapperLayout from '../layouts/WrapperLayout';

const UnAuthGuard = lazy(() => import('../Auth/UnAuthGaurd'));
const Layout = lazy(() => import('../Auth/Layout'));
const WithoutCredentials = lazy(() => import('../Auth/WithoutCredentials'));
const AuthPage = lazy(() => import('../Components/AuthPage'));
const UserRoutes = lazy(() => import('../routes/UserRoutes'));

export default function Routes() {
  return useRoutes([
    {
      path: ROOTS_PATH,
      element: (
        <UnAuthGuard>
          <Layout />
        </UnAuthGuard>
      ),
      children: [
        {
          path: UNAUTHORIZE_PATH.SIGN_IN.path,
          element: (
            <WithoutCredentials>
              <AuthPage />
            </WithoutCredentials>
          ),
        },
        {
          path: '',
          element: <Navigate to={UNAUTHORIZE_PATH.SIGN_IN.fullPath} replace />,
        },
      ],
    },
    {
      path: ROOTS_PATH,
      element: (
        <AuthGuard>
          <MainLayout />
        </AuthGuard>
      ),
      children: [
        {
          path: AUTHORIZED_PATHS.root + '/*',
          element: (
            <WrapperLayout>
              <UserRoutes />
            </WrapperLayout>
          ),
        },
      ],
    },
  ]);
}
