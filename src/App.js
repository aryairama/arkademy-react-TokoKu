import { Fragment } from 'react';
import Auth from './pages/Auth/Auth';
import Home from './pages/Home/Home';
import ViewProduct from './pages/ViewProduct/ViewProduct';
import Seller from './pages/Seller/Seller';
import Custommer from './pages/Custommer/Custommer';
import ProductsByCategory from './pages/ProductsByCategory/ProductsByCategory';
import MyBag from './pages/MyBag/MyBag';
import Checkout from './pages/Checkout/Checkout';
import VerifRegisterEmail from './pages/VerifRegisterEmail/VerifRegisterEmail';
import { Route, Switch } from 'react-router-dom';
import PublicRoute from './configs/midlleware/PublicRoute';
import PrivateRoute from './configs/midlleware/PrivateRoute';
import CheckEmail from './pages/Auth/Register/CheckEmail';

function App(props) {
  return (
    <Fragment>
      <Switch>
        <PublicRoute exact path="/" component={Home} />
        <Route path="/auth" component={Auth} />
        <PublicRoute path="/product/:id" component={ViewProduct} />
        <PublicRoute path="/category/:id" component={ProductsByCategory} />
        <Route path="/seller" component={Seller} />
        <Route path="/custommer" component={Custommer} />
        <PrivateRoute roles={['custommer', 'seller']} path="/mybag" component={MyBag} />
        <PrivateRoute roles={['custommer', 'seller']} path="/checkout" component={Checkout} />
        <Route path="/verifemailregister" component={VerifRegisterEmail} />
        <Route path="/checkemail" component={CheckEmail} />
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
