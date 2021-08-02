/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useRef, useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { createPortal } from 'react-dom';
import { Modal } from 'bootstrap';
import { Footer, Modal as MyModal, NavbarLeftMenu, NavbarRightMenu, Navbar } from '../../components/module/index';
import { FooterMenu } from '../../components/base/index';
import { Header as ModalHeader, Body as ModalBody, Footer as ModalFooter } from '../../components/ModalFilter/Index';
import { useSelector } from 'react-redux';
import img from '../../pages/Home/img';
import logoTokoKu from '../../assets/img/icon/Vector.svg';

const PublicRoute = ({ component: Component, ...rest }) => {
  const { user } = useSelector((state) => state.user);
  const auth = Object.keys(user).length;
  const refModalFilter = useRef(null);
  const [modalFilter, setModalFilter] = useState(null);
  const modalShowHandler = () => modalFilter.show();
  const modalHideHandler = () => modalFilter.hide();
  useEffect(() => {
    setModalFilter(new Modal(refModalFilter.current, { backdrop: 'static' }));
  }, []);
  return (
    <Route
      {...rest}
      render={(props) => (
        <Fragment>
          {rest.navbar && (
            <Navbar
              expand="md"
              urlLogo="/"
              urlLogoImg={logoTokoKu}
              textLogo="TokoKu"
              leftMenu={<NavbarLeftMenu onClickFilter={modalShowHandler} />}
              rigthMenu={<NavbarRightMenu />}
            ></Navbar>
          )}
          {!rest.restricted && <Component {...props} />}
          {rest.restricted && auth < 1 && <Component {...props} />}
          {rest.restricted && auth > 0 && user.roles === 'custommer' && <Redirect to="/custommer/profile" />}
          {rest.restricted && auth > 0 && user.roles === 'seller' && <Redirect to="/seller/profilestore" />}
          {rest.footer && (
            <Footer
              detailBrand={
                <Fragment>
                  <p>About TokoKu</p>
                  <p className="text-black-14px">
                    Situs jual beli online terlengkap dengan berbagai pilihan. Belanja online mudah dan menyenangkan di
                    TokoKu. Pengiriman cepat.
                  </p>
                </Fragment>
              }
              nameMenu1="Menu"
              menu1={
                <Fragment>
                  <FooterMenu linkMenu="/" img={img.Home} textMenu="Home" />
                  <FooterMenu linkMenu="/" img={img.Cart} textMenu="My Bag" />
                  <FooterMenu linkMenu="/auth/login" img={img.Auth} textMenu="Login" />
                  <FooterMenu linkMenu="/auth/register" img={img.Auth} textMenu="Register" />
                </Fragment>
              }
              nameMenu2="Social media"
              menu2={
                <Fragment>
                  <FooterMenu linkMenu="/" img={img.Facebook} textMenu="Facebook" />
                  <FooterMenu linkMenu="/" img={img.Twitter} textMenu="Twitter" />
                  <FooterMenu linkMenu="/" img={img.Instagram} textMenu="Instagram" />
                </Fragment>
              }
            />
          )}
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
      )}
    />
  );
};

PublicRoute.defaultProps = {
  navbar: true,
  footer: true,
  restricted: false,
};
export default PublicRoute;
