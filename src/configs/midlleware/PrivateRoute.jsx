import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useSelector((state) => state.user);
  let access = false;
  for (let i = 0; i < rest.roles.length; i++) {
    if (user.roles === rest.roles[i]) {
      access = true;
      break;
    } else if (user.roles !== rest.roles[i]) {
      access = false;
    }
  }
  return (
    <Route
      {...rest}
      render={(props) => {
        if (Object.keys(user).length < 1) {
          return <Redirect to="/auth/login" />;
        } else if (!access) {
          return <Redirect to="/auth/login" />;
        } else if (access && Object.keys(user).length > 1) {
          return <Component {...props} />;
        }
      }}
    />
  );
};

export default PrivateRoute;
