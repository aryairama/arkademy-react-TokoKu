import { Fragment } from 'react';
import ResetPassword from './pages/Auth/ResetPassword/ResetPassword';
import Register from './pages/Auth/Register/Register';
import Login from './pages/Auth/Login/Login';
import ConfirmPassword from './pages/Auth/ConfirmPassword/ConfirmPassword';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/">
          Home
        </Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/forgotpassword" component={ResetPassword}></Route>
        <Route path="/confirmpassword" component={ConfirmPassword}></Route>
      </Switch>
    </Fragment>
  );
}

export default App;
