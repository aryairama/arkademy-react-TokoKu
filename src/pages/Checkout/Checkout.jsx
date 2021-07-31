/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect, useRef, useState } from 'react';
import { Modal } from 'bootstrap';
import { createPortal } from 'react-dom';
import { Modal as MyModal, NavbarLeftMenu, Navbar, NavbarAuthRight, ContentCard } from '../../components/module/index';
import logoTokoKu from '../../assets/img/icon/Vector.svg';
import { Container, BoxItem, Button } from '../../components/base';
import { ModalPaymentHeader, ModalPaymentBody, ModalPaymentFooter } from '../../components/ModalPayment/index';
import { ModalAddressHeader, ModalAddressBody } from '../../components/ModalAddress/index';
import { ModalAddAddressHeader, ModalAddAddressBody, ModalAddAddressFooter } from '../../components/ModalAddAddress';
import ModalHeader from '../../components/ModalFilter/Header';
import ModalBody from '../../components/ModalFilter/Body';
import ModalFooter from '../../components/ModalFilter/Footer';
import '../../assets/css/checkout.css';

const Checkout = () => {
  const refModalFilter = useRef(null);
  const refModalPayment = useRef(null);
  const refModalAddress = useRef(null);
  const refModalAddAddress = useRef(null);
  const [modalFilter, setModalFilter] = useState(null);
  const [modalPayemnt, setModalPayment] = useState(null);
  const [modalAddress, setModalAddress] = useState(null);
  const [modalAddAddress, setModalAddAddress] = useState(null);
  const modalFilterShowHandler = () => modalFilter.show();
  const modalFilterHideHandler = () => modalFilter.hide();
  const modalPaymentShowHandler = () => modalPayemnt.show();
  const modalPaymentHideHandler = () => modalPayemnt.hide();
  const modalAddressShowHandler = () => modalAddress.show();
  const modalAddressHideHandler = () => modalAddress.hide();
  const modalAddAddressShowHandler = () => modalAddAddress.show();
  const modalAddAddressHideHandler = () => modalAddAddress.hide();
  useEffect(async () => {
    try {
      setModalFilter(new Modal(refModalFilter.current, { backdrop: 'static' }));
      setModalPayment(new Modal(refModalPayment.current, { backdrop: 'static' }));
      setModalAddress(new Modal(refModalAddress.current, { backdrop: 'static' }));
      setModalAddAddress(new Modal(refModalAddAddress.current, { backdrop: 'static' }));
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
        leftMenu={<NavbarLeftMenu onClickFilter={modalFilterShowHandler} />}
        rigthMenu={<NavbarAuthRight />}
      ></Navbar>
      <Container className="mt-10">
        <div className="row">
          <div className="col-12">
            <p className="header-product ms-0">Checkout</p>
            <p>Shipping Adress</p>
          </div>
          <div className="col-md-8">
            <ContentCard
              styleCard="shadow-sm"
              cardBody={
                <Fragment>
                  <p className="text-black-16px font-semi-bold">Andreas Jane</p>
                  <p className="text-black-14px mt-n2">
                    Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181
                    [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas, 53181
                  </p>
                  <div className="button-action">
                    <Button className="btn rounded-pill btn-outline-orange" onClick={modalAddressShowHandler}>
                      Choose another address
                    </Button>
                  </div>
                </Fragment>
              }
            />
            {/* start myBag */}
            <BoxItem name="Men's Jacket jeans" brand="Zalora Cloth" price="150000" />
            <BoxItem name="Men's Jacket jeans" brand="Zalora Cloth" price="150000" />
          </div>
          <div className="col-md-4">
            <div className="card card-body shadow-sm mt-md-0 mt-4">
              <p className="card-product-title fw-bold">Shopping summary</p>
              <div className="d-flex justify-content-between">
                <p className="card-product-title text-black-50 lh-1">Order</p>
                <p className="shopping-summary-total-price lh-1">Rp.300000</p>
              </div>
              <div className="d-flex justify-content-between">
                <p className="card-product-title text-black-50 lh-1">Delivery</p>
                <p className="shopping-summary-total-price lh-1">Rp.40000</p>
              </div>
              <hr className="border-secondary mt-0" />
              <div className="d-flex justify-content-between">
                <p className="card-product-title fw-bold">Shopping summary</p>
                <p className="shopping-summary-total-price text-orange lh-1">Rp.340000</p>
              </div>
              <Button className="btn btn-orange rounded-pill" onClick={modalPaymentShowHandler}>
                Select payment
              </Button>
            </div>
          </div>
        </div>
      </Container>
      {createPortal(
        <MyModal
          id="filterProducts"
          forwadedRef={refModalFilter}
          styleHeader="justify-content-start"
          styleFooter="justify-content-around m-0"
          header={<ModalHeader onClickFilter={modalFilterHideHandler} />}
          body={<ModalBody />}
          footer={<ModalFooter onClickCloseFilter={modalFilterHideHandler} />}
        />,
        document.getElementById('modal-root')
      )}
      {createPortal(
        <MyModal
          id="payment"
          forwadedRef={refModalPayment}
          styleBody="px-5 h-min-60vh"
          styleHeader="justify-content-start"
          styleFooter="justify-content-around"
          header={<ModalPaymentHeader onClickClosePayment={modalPaymentHideHandler} />}
          body={<ModalPaymentBody />}
          footer={<ModalPaymentFooter />}
        />,
        document.getElementById('modal-root')
      )}
      {createPortal(
        <MyModal
          id="address"
          forwadedRef={refModalAddress}
          styleDialog="modal-lg"
          styleBody="px-5 h-min-60vh"
          styleHeader="justify-content-end border-0 "
          header={<ModalAddressHeader onClickCloseAddress={modalAddressHideHandler} />}
          body={
            <ModalAddressBody
              onClickShowAddAddress={modalAddAddressShowHandler}
              onClickCloseAddress={modalAddressHideHandler}
            />
          }
        />,
        document.getElementById('modal-root')
      )}
      {createPortal(
        <MyModal
          id="addAddress"
          forwadedRef={refModalAddAddress}
          styleDialog="modal-lg"
          styleBody="px-5 h-min-60vh"
          styleHeader="justify-content-end border-0 mb-3"
          header={<ModalAddAddressHeader onClickCloseAddAddress={modalAddAddressHideHandler} />}
          body={<ModalAddAddressBody />}
          footer={<ModalAddAddressFooter onClickCloseAddAddress={modalAddAddressHideHandler} />}
        />,
        document.getElementById('modal-root')
      )}
    </Fragment>
  );
};

export default Checkout;