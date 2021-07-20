import React from 'react';
import { Button } from '../base/index';
import IconCLose from '../../assets/img/icon/close.svg';
const Header = (props) => {
  return (
    <Button type="button" className="border-0 bg-transparent" onClick={props.onClickCloseAddress}>
      <img src={IconCLose} alt="icon-close-filter" />
    </Button>
  );
};

export default Header;
