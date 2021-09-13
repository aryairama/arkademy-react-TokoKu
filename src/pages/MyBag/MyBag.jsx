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
import { useSelector, useDispatch } from 'react-redux';
import { incQuantity, decQuantity, deleteCart } from '../../configs/redux/actions/cartAction';
import '../../assets/css/myBag.css';
const MyBag = (props) => {
  const dispatch = useDispatch();
  const { carts, total } = useSelector((state) => state.cart);
  const refModalFilter = useRef(null);
  const [modalFilter, setModalFilter] = useState(null);
  const modalShowHandler = () => modalFilter.show();
  const modalHideHandler = () => modalFilter.hide();
  const [deleteCarts, setDeleteCarts] = useState([]);
  const [deleteAll, setDeleteAll] = useState(false);
  useEffect(async () => {
    try {
      setModalFilter(new Modal(refModalFilter.current, { backdrop: 'static' }));
    } catch (error) {
      console.log(error);
    }
  }, []);
  const cartHanlder = (e) => {
    let options = deleteCarts;
    let index;
    if (e.target.checked) {
      options = [...options, JSON.parse(e.target.value)];
    } else {
      index = options.findIndex(
        (cart) =>
          cart.product_id === JSON.parse(e.target.value).product_id &&
          cart.color_id === JSON.parse(e.target.value).color_id
      );
      options.splice(index, 1);
    }
    setDeleteCarts(options);
  };
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
                      value={deleteAll}
                      onChange={() => setDeleteAll((oldValue) => !oldValue)}
                      type="checkbox"
                      className="form-check-input form-check-product"
                      id="selectAllProduct"
                    />
                    <label className="form-check-label card-product-title" htmlFor="selectAllProduct">
                      Select all item
                      <label htmlFor="selectAllProduct" className="text-black-50">
                        ({carts.length})
                      </label>
                    </label>
                  </div>
                  <span
                    className="text-orange"
                    style={{ cursor: 'pointer' }}
                    onClick={() => dispatch(deleteCart(deleteCarts, deleteAll))}
                  >
                    Delete
                  </span>
                </div>
              }
            />
            {/* start myBag */}
            {carts?.map((cart, index) => (
              <ContentCard
                key={index}
                styleCard="mt-2 shadow-sm"
                cardBody={
                  <div className="row align-items-center">
                    <div className="col-12 col-md-7 col-lg-7 d-flex flex-wrap align-items-center">
                      <div className="form-check">
                        {deleteAll === true && (
                          <input
                            checked={deleteAll}
                            type="checkbox"
                            value={JSON.stringify({ product_id: cart.product_id, color_id: cart.color_id })}
                            onChange={cartHanlder}
                            className="form-check-input form-check-product"
                          />
                        )}
                        {deleteAll === false && (
                          <input
                            type="checkbox"
                            value={JSON.stringify({ product_id: cart.product_id, color_id: cart.color_id })}
                            onChange={cartHanlder}
                            className="form-check-input form-check-product"
                          />
                        )}
                      </div>
                      <img
                        className="img-mybag-product rounded-3"
                        src={`${process.env.REACT_APP_API_URL}/${cart.img_products[0].img_product}`}
                        alt="logo-product"
                      />
                      <div className="mybag-product-header ms-3">
                        <p className="card-product-title">{`${cart.name} (${cart.color_name})`}</p>
                        <p className="card-product-brand mt-n3">{cart.brand}</p>
                      </div>
                    </div>
                    <div className="col-6 col-md-3 col-lg-3 d-flex flex-wrap justify-content-start mt-md-0 mt-3">
                      <CountInput
                        redux={true}
                        name={`quantity${index}`}
                        value={cart.quantity}
                        increment={() => dispatch(incQuantity(cart.product_id, cart.color_id))}
                        decrement={() => dispatch(decQuantity(cart.product_id, cart.color_id))}
                      />
                    </div>
                    <div className="col-6 col-md-2 col-lg-2 d-flex flex-wrap justify-content-end ">
                      <span className="card-product-title fw-bold">Rp.{cart.prices}</span>
                    </div>
                  </div>
                }
              />
            ))}
          </div>
          <div className="col-md-4">
            <div className="card card-body shadow-sm mt-md-0 mt-4">
              <p className="card-product-title fw-bold">Shopping summary</p>
              <div className="d-flex justify-content-between">
                <p className="card-product-title text-black-50">Total price</p>
                <p className="shopping-summary-total-price">Rp.{total}</p>
              </div>
              <Link to={carts.length > 0 ? '/checkout' : '#'} className="btn btn-orange rounded-pill">
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
