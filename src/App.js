import { Fragment } from 'react';
import Auth from './pages/Auth/Auth';
import Home from './pages/Home/Home';
import ViewProduct from './pages/ViewProduct/ViewProduct';
import Seller from './pages/Seller/Seller';
import ProductsByCategory from './pages/ProductsByCategory/ProductsByCategory';
import { Route, Switch } from 'react-router-dom';

function App(props) {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/auth" component={Auth} />
        <Route path="/product/:id" component={ViewProduct} />
        <Route path="/category/:id" component={ProductsByCategory}/>
        <Route path="/seller" component={Seller} />
        <Route
          component={() => {
            return <p> Page Not Found</p>;
          }}
        />
      </Switch>
    </Fragment>
  );
}

export default App;
