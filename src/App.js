import { Fragment } from 'react';
import Auth from './pages/Auth/Auth';
import Home from './pages/Home/Home';
import ViewProduct from './pages/ViewProduct/ViewProduct';
import Seller from './pages/Seller/Seller';
import Custommer from './pages/Custommer/Custommer';
import ProductsByCategory from './pages/ProductsByCategory/ProductsByCategory';
import MyBag from './pages/MyBag/MyBag';
import Checkout from './pages/Checkout/Checkout';
import { Route, Switch } from 'react-router-dom';

function App(props) {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/auth" component={Auth} />
        <Route path="/product/:id" component={ViewProduct} />
        <Route path="/category/:id" component={ProductsByCategory} />
        <Route path="/seller" component={Seller} />
        <Route path="/custommer" component={Custommer} />
        <Route path="/mybag" component={MyBag} />
        <Route path="/checkout" component={Checkout} />
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
