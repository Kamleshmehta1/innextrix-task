export const ROOTS_PATH = '/';
export const USER_PATH = '/user';

export const UNAUTHORIZE_PATH = {
  SIGN_IN: {
    path: '/login',
    fullPath: '/login',
    title: 'Log In',
    pageName: 'log-in',
  },
};

export const AUTHORIZED_PATHS = {
  root: USER_PATH,
  TEAM: {
    path: `/team`,
    fullPath: `${USER_PATH}/team`,
    permissions: [],
    title: 'Team',
    pageName: 'Team',
  },
};
