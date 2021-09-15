/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useState, useRef, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Modal } from 'bootstrap';
import { createPortal } from 'react-dom';
import Address from './Address/Address';
import MyOrder from './Order/MyOrder';
import Profile from './Profile/Profile';
import OrderDetail from './Order/OrderDetail';
import { Header as ModalHeader, Body as ModalBody, Footer as ModalFooter } from '../../components/ModalFilter/Index';
import {
  Navbar,
  SideNavbar,
  SidebarButton,
  SidebarCustommer as Sidebar,
  NavbarLeftMenu,
  Modal as MyModal,
} from '../../components/module/index';
import PrivateRoute from '../../configs/midlleware/PrivateRoute';
import logoTokoKu from '../../assets/img/icon/Vector.svg';
import '../../assets/css/profile.css';

const Seller = (prop) => {
  const [sidebarActive, setSidebarActive] = useState(false);
  const refModalFilter = useRef(null);
  const [modalFilter, setModalFilter] = useState(null);
  const modalShowHandler = () => modalFilter.show();
  const modalHideHandler = () => modalFilter.hide();
  useEffect(async () => {
    try {
      setModalFilter(new Modal(refModalFilter.current, { backdrop: 'static' }));
    } catch (error) {
      console.log(error);
    }
  }, []);
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
        leftMenu={<NavbarLeftMenu onClickFilter={modalShowHandler} />}
        navbarBrand="justify-content-end center-logo-sidebar"
      ></Navbar>
      <Sidebar sidebarActive={sidebarActive}>
        <Switch>
          <PrivateRoute roles={['custommer', 'seller']} path="/custommer/profile" component={Profile} />
          <PrivateRoute roles={['custommer', 'seller']} path="/custommer/address" component={Address} />
          <PrivateRoute exact roles={['custommer', 'seller']} path="/custommer/myorder" component={MyOrder} />
          <PrivateRoute roles={['custommer', 'seller']} path="/custommer/myorder/:id" component={OrderDetail} />
          <Route
            component={() => {
              return <Redirect to="/404" />;
            }}
          />
        </Switch>
      </Sidebar>
      {createPortal(
        <MyModal
          id="filterProducts"
          forwadedRef={refModalFilter}
          styleHeader="justify-content-start"
          styleFooter="justify-content-around m-0"
          header={<ModalHeader onClickFilter={modalHideHandler} />}
          body={<ModalBody />}
          footer={<ModalFooter onClickCloseFilter={modalHideHandler} />}
        />,
        document.getElementById('modal-root')
      )}
    </Fragment>
  );
};

export default Seller;
