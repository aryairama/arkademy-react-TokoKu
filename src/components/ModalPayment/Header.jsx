import { Button } from '../base/index';
import React, { Fragment } from 'react';
import IconCLose from '../../assets/img/icon/close.svg';
const Header = (props) => {
  return (
    <Fragment>
      <Button type="button" className="border-0 bg-transparent" onClick={props.onClickClosePayment}>
        <img src={IconCLose} alt="icon-close-filter" />
      </Button>
      <h5 className="modal-title ms-2 mt-1" id="staticBackdropLabel">
        Payment
      </h5>
    </Fragment>
  );
};

export default Header;
