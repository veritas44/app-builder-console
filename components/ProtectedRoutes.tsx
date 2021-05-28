import React from 'react';
import {appRoutes} from '../config/constants';
// import {useLocalStorage} from '../config/contexts';

//check if you are on the client (browser) or server
const isBrowser = () => typeof window !== 'undefined';

const ProtectedRoute = ({router, children}) => {
  //Identify authenticated user
  const item = isBrowser() ? window.localStorage.getItem('token') : null;
  // Parse stored json or if none return initialValue
    //   item ? JSON.parse(item) : null;

  const isAuthenticated = item !== null;

  let unprotectedRoutes = [appRoutes.HOME, appRoutes.REDIRECT];

  /**
   * @var pathIsProtected Checks if path exists in the unprotectedRoutes routes array
   */
  let pathIsProtected = unprotectedRoutes.indexOf(router.pathname) === -1;

  if (isBrowser() && !isAuthenticated && pathIsProtected) {
    // router.push(appRoutes.HOME);
    window.open(
      'http://sso2.staging.agora.io/api/v0/oauth/authorize?scope=basic_info&response_type=code&redirect_uri=https://rocky-temple-79220.herokuapp.com/auth&client_id=7a8f4c3d28fa40f6b506a2725c2a81e8',"_self"
    );

    return "Taking you to smooth login with AGORA";
  }
  console.log({isBrowser: isBrowser()}, {isAuthenticated}, {pathIsProtected}, router.pathname);
  console.log("rendering protected routes")
  return children;
};

export default ProtectedRoute;
