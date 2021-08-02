import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useSelector((state) => state.user);
  let access = false;
  const auth = Object.keys(user).length;
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
        if (auth < 0) {
          return <Redirect to="/auth/login" />;
        } else if (!access) {
          return <Redirect to="/auth/login" />;
        } else if (access && auth > 0) {
          return <Component {...props} />;
        }
        // if ((auth > 0 && rest.path === '/auth/login') || (auth > 0 && rest.path === '/auth/register')) {
        //   if (user.roles === 'custommer') {
        //     <Redirect to="/custommer/profile" />;
        //   } else if (user.roles === 'seller') {
        //     <Redirect to="/seller/myproducts" />;
        //   }
        // }
      }}
    />
  );
};

export default PrivateRoute;
