import React from 'react';
import {useRouter} from 'next/router';
import {appRoutes} from '../config/constants';
import Login from './Login';
// import styles from './auth.module.css';

//check if you are on the client (browser) or server
const isBrowser = () => typeof window !== 'undefined';
interface ProtectedRouteProps {
  children: React.ReactNode;
}
const ProtectedRoute = ({children}: ProtectedRouteProps) => {
  const router = useRouter();
  //Identify authenticated user
  const item = isBrowser() ? window.localStorage.getItem('token') : null;
  const isAuthenticated = item !== null;
  let unprotectedRoutes = [
    appRoutes.HOME,
    appRoutes.REDIRECT,
    appRoutes.LICENSE,
  ];
  /**
   * @var pathIsProtected Checks if path exists in the unprotectedRoutes routes array
   */
  let pathIsProtected =
    unprotectedRoutes.indexOf(router.pathname) === -1 &&
    router.pathname.split('/')[1] !== 'docs';

  if (isBrowser() && !isAuthenticated && pathIsProtected) {
    return <Login />;
  }
  return <>{children}</>;
};

export default ProtectedRoute;
