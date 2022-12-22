import React, { useEffect, useContext } from 'react';
import { UserContext } from '../../context/user';

import { Login } from './login';

function Login() {
  const { user, jwt, setUser, checkLogin } = useContext(UserContext);

  useEffect(async () => {
    const res = await checkLogin();
    if (res.status === 200) {
      setUser(res.data);
    }
  }, []);
  if (user) {
    useRouter.push('/user');
  }
  return <Login/>;
}

export default Login