/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect, useRef, useState } from 'react';
import { Modal } from 'bootstrap';
import { createPortal } from 'react-dom';
import { Footer, Modal as MyModal, NavbarLeftMenu, NavbarRightMenu, Navbar } from './../index';
import logoTokoKu from '../../../assets/img/icon/Vector.svg';
import FooterMenu from '../../base/FooterMenu/FooterMenu';
import ModalHeader from '../../ModalFilter/Header';
import ModalBody from '../../ModalFilter/Body';
import ModalFooter from '../../ModalFilter/Footer';
import img from '../../../pages/Home/img';
export const LayoutNoAuth = (props) => {
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
        leftMenu={<NavbarLeftMenu onClickFilter={modalShowHandler} />}
        rigthMenu={<NavbarRightMenu />}
      ></Navbar>
      {props.children}
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

export default LayoutNoAuth;
