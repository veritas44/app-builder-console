import React from 'react';
import {appRoutes} from '../config/constants';
import {useRouter} from 'next/router';

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

  let unprotectedRoutes = [appRoutes.HOME, appRoutes.REDIRECT];

  /**
   * @var pathIsProtected Checks if path exists in the unprotectedRoutes routes array
   */
  let pathIsProtected = unprotectedRoutes.indexOf(router.pathname) === -1;

  if (isBrowser() && !isAuthenticated && pathIsProtected) {
    // router.push(appRoutes.HOME);
    window.open(
      'https://sso2.agora.io/api/v0/oauth/authorize?scope=basic_info&response_type=code&redirect_uri=https://agoraappbuilder.com/auth&client_id=ece4e8acaa5e488ab5109d3fc66df72b',
      '_self',
    );

    return <>'Taking you to smooth login with AGORA';</>
  }
  return <>{children}</>;
};

export default ProtectedRoute;
