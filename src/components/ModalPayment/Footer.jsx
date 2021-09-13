import React, { Fragment } from 'react';
import { Button } from '../base/index';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createOrder } from '../../configs/redux/actions/orderAction';

const Footer = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const {
    order: { btnBuy },
    cart: { carts, total },
  } = useSelector((state) => state);
  return (
    <Fragment>
      <div className="shopping-summary d-flex flex-column flex-wrap">
        <div className="text-black-16px fw-bold">Shopping summary</div>
        <div className="text-black-16px text-orange fw-bold">Rp.{total}</div>
      </div>
      <Button
        onClick={() => {
          dispatch(createOrder(carts, total, history));
          props.onClickClosePayment();
        }}
        disabled={!btnBuy}
        className="btn btn-orange rounded-pill w-40"
      >
        Buy
      </Button>
    </Fragment>
  );
};

export default Footer;
