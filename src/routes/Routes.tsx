import { Navigate, useRoutes } from 'react-router-dom';
import { AUTHORIZED_PATHS, ROOTS_PATH, UNAUTHORIZE_PATH } from './paths';
import { lazy } from 'react';
import Loadable from '../utils/RouteLazyLoading';

const MainLayout = Loadable(lazy(() => import('../Components/MainLayout')));
const AuthGaurd = Loadable(lazy(() => import('../Auth/AuthGaurd')));
const WrapperLayout = Loadable(lazy(() => import('../layouts/WrapperLayout')));
const UnAuthGuard = Loadable(lazy(() => import('../Auth/UnAuthGaurd')));
const Layout = Loadable(lazy(() => import('../Auth/Layout')));
const WithoutCredentials = Loadable(
  lazy(() => import('../Auth/WithoutCredentials'))
);
const AuthPage = Loadable(lazy(() => import('../Components/AuthPage')));
const UserRoutes = Loadable(lazy(() => import('../routes/UserRoutes')));

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
        <AuthGaurd>
          <MainLayout />
        </AuthGaurd>
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
