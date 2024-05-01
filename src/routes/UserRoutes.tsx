import { useRoutes } from 'react-router-dom';
import { AUTHORIZED_PATHS } from './paths';
import { lazy } from 'react';

const Team = lazy(() => import('../Components/Team'));

export default function Routes() {
  return useRoutes([
    {
      path: AUTHORIZED_PATHS.TEAM.path,
      element: <Team />,
    },
  ]);
}
