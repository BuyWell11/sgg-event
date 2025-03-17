import { BACKEND_ROOT } from '@/vars';

const PATH = {
  auth: {
    root: 'auth',
    login: 'login',
  },
  users: {
    root: 'users',
  },
} as const;

export const PATH_BACKEND = {
  root: BACKEND_ROOT,
  auth: {
    root: getFullPath(PATH.auth.root),
    login: getFullPath(PATH.auth.root, PATH.auth.login),
  },
  users: {
    root: getFullPath(PATH.users.root),
  },
};

function getFullPath(...path: string[]): string {
  return `${BACKEND_ROOT}/${path.join('/')}`;
}
