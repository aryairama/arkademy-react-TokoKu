import React, { Fragment, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import MyProducts from '../Seller/Product/MyProducts';
import { Navbar, SideNavbar, SidebarButton, Sidebar } from '../../components/module/index';
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
          <Route path="/seller/myproducts" component={MyProducts} />
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
