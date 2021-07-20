import React, { Fragment } from 'react';
import posIndo from '../../assets/img/payment_method/pos_indo.png';
import mastercard from '../../assets/img/payment_method/mastercard.png';
import gopay from '../../assets/img/payment_method/gopay.png';
const Body = () => {
  return (
    <Fragment>
      <p className="font-semi-bold">Payment method</p>
      <div className="payment-methods d-flex flex-wrap flex-column">
        <div className="payment-gopay row justify-content-around py-2">
          <div className="col-4">
            <img src={gopay} alt="" />
          </div>
          <div className="col-4">
            <p className="font-semi-bold">Gopay</p>
          </div>
          <div className="col-4 d-flex justify-content-end">
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input form-check-input-payment"
                value="gopay"
                name="payment_method"
              />
            </div>
          </div>
        </div>
        <div className="payment-gopay row justify-content-around py-2">
          <div className="col-4">
            <img src={posIndo} alt="" />
          </div>
          <div className="col-4">
            <p className="font-semi-bold">Pos Indonesia</p>
          </div>
          <div className="col-4 d-flex justify-content-end">
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input form-check-input-payment"
                value="pos_ndonesia"
                name="payment_method"
              />
            </div>
          </div>
        </div>
        <div className="payment-gopay row justify-content-around py-2">
          <div className="col-4">
            <img src={mastercard} alt="" />
          </div>
          <div className="col-4">
            <p className="font-semi-bold">Mastercard</p>
          </div>
          <div className="col-4 d-flex justify-content-end">
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input form-check-input-payment"
                value="mastercard"
                name="payment_method"
              />
            </div>
          </div>
        </div>
      </div>
      <hr className="divider-filter" />
      <div className="shooping-summary d-flex flex-column flex-wrap">
        <p className="card-product-title fw-bold">Shopping summary</p>
        <div className="d-flex justify-content-between">
          <p className="card-product-title text-black-50 lh-1">Order</p>
          <p className="shopping-summary-total-price lh-1">Rp.300000</p>
        </div>
        <div className="d-flex justify-content-between">
          <p className="card-product-title text-black-50 lh-1">Delivery</p>
          <p className="shopping-summary-total-price lh-1">Rp.40000</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Body;
