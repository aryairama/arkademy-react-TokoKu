import React, { Fragment, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import MyProducts from '../Seller/Product/MyProducts';
import SellingProducts from './Product/SellingProducts';
import UpdateProducts from './Product/UpdateProducts';
import ProfileStore from './ProfileStore/ProfileStore';
import MyOrder from './Order/MyOrder';
import MyOrderCancel from './Order/MyOrderCancel';
import { Navbar, SideNavbar, SidebarButton, Sidebar } from '../../components/module/index';
import PrivateRoute from '../../configs/midlleware/PrivateRoute';
import logoTokoKu from '../../assets/img/icon/Vector.svg';
import '../../assets/css/profile.css';

const Seller = (prop) => {
  const [sidebarActive, setSidebarActive] = useState(false);
  return (
    <Fragment>
      <Navbar
        expand="md"
        urlLogo="/"
        urlLogoImg={logoTokoKu}
        textLogo="TokoKu"
        styleNavbar="shadow-sm"
        buttonSideBar={<SidebarButton setSidebarActive={setSidebarActive} />}
        rigthMenu={<SideNavbar setSidebarActive={setSidebarActive} />}
        navbarBrand="justify-content-end center-logo-sidebar"
        styleLefthMenu="d-none"
        styleRigthMenu="offset-lg-6 offset-md-6"
      ></Navbar>
      <Sidebar sidebarActive={sidebarActive}>
        <Switch>
          <PrivateRoute roles={['seller']} path="/seller/myproducts" component={MyProducts} />
          <PrivateRoute roles={['seller']} path="/seller/sellingproducts" component={SellingProducts} />
          <PrivateRoute roles={['seller']} path="/seller/updateproducts/:id" component={UpdateProducts} />
          <PrivateRoute roles={['seller']} path="/seller/profilestore" component={ProfileStore} />
          <PrivateRoute roles={['seller']} path="/seller/myorder" component={MyOrder} />
          <PrivateRoute roles={['seller']} path="/seller/myordercancel" component={MyOrderCancel} />
          <Route
            component={() => {
              return <p> Page Not Found</p>;
            }}
          />
        </Switch>
      </Sidebar>
    </Fragment>
  );
};

export default Seller;
