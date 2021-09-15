import React, { Fragment } from 'react';
import { Button } from '../base/index';
import { insertAddress as insertUserAddress } from '../../configs/redux/actions/userAction';
import { useDispatch } from 'react-redux';

const Footer = ({ setAddress, address, validator, initialtState, ...props }) => {
  const dispatch = useDispatch();
  const resetField = () => {
    setAddress(initialtState);
    Object.keys(validator.current.fields).forEach((e) => validator.current.hideMessageFor(e));
  };
  return (
    <Fragment>
      <Button
        onClick={() => {
          resetField();
          props.onClickCloseAddAddress();
        }}
        className="btn button-auth rounded-pill w-25"
      >
        Cancel
      </Button>
      <Button
        onClick={() => {
          dispatch(insertUserAddress(address, props.onClickCloseAddAddress));
          resetField();
        }}
        disabled={validator.current.allValid() ? false : true}
        className="btn btn-orange rounded-pill w-25"
      >
        Save
      </Button>
    </Fragment>
  );
};

export default Footer;
