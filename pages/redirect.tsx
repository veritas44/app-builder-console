import React, {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
// import {useLocalStorage} from '../config/contexts';

const Redirect = () => {
  const [ready, setReady] = useState(false);
  const router = useRouter();
  const setToken = (idToken: string) => {
    // Saves user token to localStorage
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line no-undef
      localStorage.setItem('token', idToken);
    }
  };
  const {
    query: {token},
  } = router;
  useEffect(() => {
    setToken(token);
    setReady(true);
    console.log({token})
    if (token) {
      router.push('/create');
    }
    //  else {
    //   window.open(
    //     'http://sso2.staging.agora.io/api/v0/oauth/authorize?scope=basic_info&response_type=code&redirect_uri=https://rocky-temple-79220.herokuapp.com/auth&client_id=7a8f4c3d28fa40f6b506a2725c2a81e8',
    //     '_self',
    //   );
    // }
  }, [token]);
  return null;
};

export default Redirect;
