import React, { Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ResetPassword from './ResetPassword/ResetPassword';
import Register from './Register/Register';
import Login from './Login/Login';
import ConfirmPassword from './ConfirmPassword/ConfirmPassword';
const Auth = (props) => {
  return (
    <Fragment>
      <Switch>
        <Route path="/auth/login" component={Login} />
        <Route path="/auth/register" component={Register} />
        <Route path="/auth/forgotpassword" component={ResetPassword} />
        <Route path="/auth/confirmpassword" component={ConfirmPassword} />
        <Route render={() => <Redirect to="/auth/login" />} />
      </Switch>
    </Fragment>
  );
};

export default Auth;
