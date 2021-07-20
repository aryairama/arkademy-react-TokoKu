/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'bootstrap';
import { createPortal } from 'react-dom';
import { Modal as MyModal, NavbarLeftMenu, Navbar, NavbarAuthRight, ContentCard } from '../../components/module/index';
import logoTokoKu from '../../assets/img/icon/Vector.svg';
import { Container, CountInput } from '../../components/base';
import ModalHeader from '../../components/ModalFilter/Header';
import ModalBody from '../../components/ModalFilter/Body';
import ModalFooter from '../../components/ModalFilter/Footer';
import '../../assets/css/myBag.css';
import img from '../Home/img';
const MyBag = () => {
  const [cartProducts, setCartProducts] = useState({
    title: "Men's Jacket jeans",
    brand: 'Zalora Cloth',
    quantity:1
  });
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
  const changeHandler = (e) => {
    
  }
  return (
    <Fragment>
      <Navbar
        expand="md"
        urlLogo="/"
        urlLogoImg={logoTokoKu}
        textLogo="TokoKu"
        leftMenu={<NavbarLeftMenu onClickFilter={modalShowHandler} />}
        rigthMenu={<NavbarAuthRight />}
      ></Navbar>
      <Container className="mt-10">
        <div className="row">
          <div className="col-12">
            <p className="header-product ms-0">My bag</p>
          </div>
          <div className="col-md-8">
            <ContentCard
              styleCard="shadow-sm"
              cardBody={
                <div className="d-flex flex-wrap justify-content-between align-items-between">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input form-check-product"
                      id="selectAllProduct"
                      defaultChecked
                    />
                    <label className="form-check-label card-product-title" htmlFor="selectAllProduct">
                      Select all item
                      <label htmlFor="selectAllProduct" className="text-black-50">
                        (2 items selected)
                      </label>
                    </label>
                  </div>
                  <span className="text-orange">Delete</span>
                </div>
              }
            />
            {/* start myBag */}
            <ContentCard
              styleCard="mt-2 shadow-sm"
              cardBody={
                <div className="row align-items-center">
                  <div className="col-12 col-md-7 col-lg-7 d-flex flex-wrap align-items-center">
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input form-check-product" id="product1" />
                    </div>
                    <img className="img-mybag-product rounded-3" src={img.Product1} alt="logo-product" />
                    <div className="mybag-product-header ms-3">
                      <p className="card-product-title">{cartProducts.title }</p>
                      <p className="card-product-brand mt-n3">{ cartProducts.brand}</p>
                    </div>
                  </div>
                  <div className="col-6 col-md-3 col-lg-3 d-flex flex-wrap justify-content-start mt-md-0 mt-3">
                    <CountInput id="quantity1" value={cartProducts.quantity} onClick={ cartProducts.quantity}/>
                  </div>
                  <div className="col-6 col-md-2 col-lg-2 d-flex flex-wrap justify-content-end ">
                    <span className="card-product-title fw-bold">$ 20.0</span>
                  </div>
                </div>
              }
            />
          </div>
          <div className="col-md-4">
            <div className="card card-body shadow-sm mt-md-0 mt-4">
              <p className="card-product-title fw-bold">Shopping summary</p>
              <div className="d-flex justify-content-between">
                <p className="card-product-title text-black-50">Total price</p>
                <p className="shopping-summary-total-price">$ 40.0</p>
              </div>
              <Link to="/checkout" className="btn btn-orange rounded-pill">
                Buy
              </Link>
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
          header={<ModalHeader onClickFilter={modalHideHandler} />}
          body={<ModalBody />}
          footer={<ModalFooter onClickCloseFilter={modalHideHandler} />}
        />,
        document.getElementById('modal-root')
      )}
    </Fragment>
  );
};

export default MyBag;
