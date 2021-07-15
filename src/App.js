import { Fragment } from 'react';
import Auth from './pages/Auth/Auth';
import { Route, Switch } from 'react-router-dom';

function App(props) {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/">
          Home
        </Route>
        <Route path="/auth" component={Auth} />
      </Switch>
    </Fragment>
  );
}

export default App;
