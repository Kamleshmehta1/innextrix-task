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
  HOME: {
    path: `/home`,
    fullPath: `${USER_PATH}/home`,
    permissions: [],
    title: 'Home',
    pageName: 'Home',
  },
};
