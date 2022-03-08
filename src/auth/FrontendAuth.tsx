import React from 'react';
import { Redirect, Route, useHistory, useLocation } from 'react-router-dom';
import ReactConfig from './RouterConfig';


function AuthRouter() {
  const history = useHistory();
  const pathname = history.location.pathname;
  const locationSelf = useLocation();
  const targetPathName = ReactConfig.find((i) => {
    return i.path === pathname
  });
  if (pathname === "/") {
    return <Redirect to="login"></Redirect>;
  }

  const stroageItem:any = localStorage.getItem('loginStatus');
  const isLogin = JSON.parse(stroageItem);

  if (!targetPathName) {
    return <Redirect to='404' />
  }

  if (isLogin) {
    if (pathname === "/login") {
      return <Redirect to="/home"></Redirect>;
    } else {
      return (
        <Route exact path={pathname} component={targetPathName.component} />
      );
    }
  } else {
    if (targetPathName.auth) {
      return <Redirect exact to="/login" />;
    } else {
      return (
        <Route exact path={pathname} component={targetPathName.component} />
      );
    }
  }
}

export default AuthRouter;