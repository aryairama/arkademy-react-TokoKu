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
import { useSelector } from 'react-redux';
import SimpleReactValidator from 'simple-react-validator';
import { getAddress, deleteAddress } from '../../configs/redux/actions/userAction';
import { useDispatch } from 'react-redux';

const Checkout = (props) => {
  const {
    cart: { carts, total },
  } = useSelector((state) => state);
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
      if (carts.length < 1) {
        props.history.push('/mybag');
      }
    } catch (error) {
      console.log(error);
    }
  }, []);
  const initialInsertState = {
    primary_address: '0',
    label: '',
    recipients_name: '',
    phone_number: '',
    city_or_subdistrict: '',
    address: '',
    postal_code: '',
  };
  const [insertAddress, setInsertAddress] = useState(initialInsertState);
  const insertAddressHandler = (e) => setInsertAddress((oldVal) => ({ ...oldVal, [e.target.name]: e.target.value }));
  const validatorInsert = useRef(new SimpleReactValidator({ className: 'small text-danger' }));
  const insertPrimaryAddressHandler = (e) => {
    if (e.target.checked) {
      setInsertAddress((oldVal) => ({ ...oldVal, [e.target.name]: e.target.value }));
    } else {
      setInsertAddress((oldVal) => ({ ...oldVal, [e.target.name]: '0' }));
    }
  };
  const [reloadAddData, setReloadAddData] = useState(false);
  const dispatch = useDispatch();
  const [dataAddress, setDataAddress] = useState({});
  const [page, setPage] = useState(1);
  useEffect(async () => {
    const { data, pagination } = await dispatch(getAddress('', 'DESC', 'primary_address', 2, page));
    setDataAddress({ data, pagination });
    // if (data.length === 0) {
    //   props.history.push('');
    // }
  }, [page, reloadAddData]);
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
                  {dataAddress?.data && dataAddress?.data.length > 0 && dataAddress?.data[0]?.primary_address === 1 && (
                    <>
                      <div className="text-black-16px font-semi-bold lh-lg">{dataAddress?.data[0]?.label}</div>
                      <div className="text-black-14px font-semi-bold lh-lg">
                        {dataAddress?.data[0]?.recipients_name} ({dataAddress?.data[0]?.phone_number})
                      </div>
                      <p className="text-black-14px">
                        {dataAddress?.data[0]?.address}, [{dataAddress?.data[0]?.city_or_subdistrict}],{' '}
                        {dataAddress?.data[0]?.postal_code}
                      </p>
                    </>
                  )}
                  <div className="button-action">
                    <Button className="btn rounded-pill btn-outline-orange" onClick={modalAddressShowHandler}>
                      Choose another address
                    </Button>
                  </div>
                </Fragment>
              }
            />
            {/* start myBag */}
            {carts?.map((cart, index) => (
              <BoxItem
                key={index}
                imgProduct={`${process.env.REACT_APP_API_URL}/${cart.img_products[0].img_product}`}
                name={`${cart.name} (${cart.color_name})`}
                brand={cart.brand}
                price={cart.prices}
              />
            ))}
          </div>
          <div className="col-md-4">
            <div className="card card-body shadow-sm mt-md-0 mt-4">
              <p className="card-product-title fw-bold">Shopping summary</p>
              <div className="d-flex justify-content-between">
                <p className="card-product-title text-black-50 lh-1">Order</p>
                <p className="shopping-summary-total-price lh-1">Rp.{total}</p>
              </div>
              {/* <div className="d-flex justify-content-between">
                <p className="card-product-title text-black-50 lh-1">Delivery</p>
                <p className="shopping-summary-total-price lh-1">Rp.40000</p>
              </div> */}
              <hr className="border-secondary mt-0" />
              <div className="d-flex justify-content-between">
                <p className="card-product-title fw-bold">Shopping summary</p>
                <p className="shopping-summary-total-price text-orange lh-1">Rp.{total}</p>
              </div>
              <Button
                disabled={
                  carts.length < 1 ||
                  dataAddress?.data?.length === 0 ||
                  (dataAddress?.data && dataAddress?.data[0]?.primary_address === 0)
                    ? true
                    : false
                }
                className="btn btn-orange rounded-pill"
                onClick={modalPaymentShowHandler}
              >
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
          footer={<ModalPaymentFooter onClickClosePayment={modalPaymentHideHandler} />}
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
              setPage={setPage}
              page={page}
              reloadAddData={reloadAddData}
              dispatch={dispatch}
              deleteAddress={deleteAddress}
              dataAddress={dataAddress}
              setReload={setReloadAddData}
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
          header={
            <ModalAddAddressHeader
              initialtState={initialInsertState}
              validator={validatorInsert}
              setAddress={setInsertAddress}
              onClickCloseAddAddress={modalAddAddressHideHandler}
            />
          }
          body={
            <ModalAddAddressBody
              initialtState={initialInsertState}
              address={insertAddress}
              addressHandler={insertAddressHandler}
              validator={validatorInsert}
              setAddress={setInsertAddress}
              insertPrimaryAddressHandler={insertPrimaryAddressHandler}
            />
          }
          footer={
            <ModalAddAddressFooter
              setReload={setReloadAddData}
              address={insertAddress}
              initialtState={initialInsertState}
              validator={validatorInsert}
              setAddress={setInsertAddress}
              onClickCloseAddAddress={modalAddAddressHideHandler}
            />
          }
        />,
        document.getElementById('modal-root')
      )}
    </Fragment>
  );
};

export default Checkout;
