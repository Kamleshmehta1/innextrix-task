import { useRoutes } from 'react-router-dom';
import { AUTHORIZED_PATHS } from './paths';
import { lazy } from 'react';

const Home = lazy(() => import('../Components/Home'));

export default function Routes() {
  return useRoutes([
    {
      path: AUTHORIZED_PATHS.HOME.path,
      element: <Home />,
    },
  ]);
}
