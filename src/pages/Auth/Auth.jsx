import React, { Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ResetPassword from './ResetPassword/ResetPassword';
import Register from './Register/Register';
import Login from './Login/Login';
import ConfirmPassword from './ConfirmPassword/ConfirmPassword';
import PublicRoute from '../../configs/midlleware/PublicRoute';

const Auth = (props) => {
  return (
    <Fragment>
      <Switch>
        <PublicRoute footer={false} navbar={false} restricted={true} path="/auth/login" component={Login} />
        <PublicRoute footer={false} navbar={false} restricted={true} path="/auth/register" component={Register} />
        <PublicRoute footer={false} navbar={false} restricted={true} path="/auth/forgotpassword" component={ResetPassword} />
        <PublicRoute footer={false} navbar={false} restricted={true} path="/auth/confirmpassword" component={ConfirmPassword} />
        <Route render={() => <Redirect to="/auth/login" />} />
      </Switch>
    </Fragment>
  );
};

export default Auth;
