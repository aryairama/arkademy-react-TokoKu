import React from 'react';
import IconCLose from '../../assets/img/icon/close.svg';
import { Button } from '../base/index';
const Header = ({ setAddress, validator, initialtState, ...props }) => {
  return (
    <Button
      type="button"
      className="border-0 bg-transparent"
      onClick={() => {
        setAddress(initialtState);
        Object.keys(validator.current.fields).forEach((e) => validator.current.hideMessageFor(e));
        props.onClickCloseAddAddress();
      }}
    >
      <img src={IconCLose} alt="icon-close-filter" />
    </Button>
  );
};

export default Header;
