import React from 'react';
import IconCLose from '../../assets/img/icon/close.svg';
import { Button } from '../base/index';
const Header = (props) => {
  return (
    <Button type="button" className="border-0 bg-transparent" onClick={props.onClickCloseAddAddress}>
      <img src={IconCLose} alt="icon-close-filter" />
    </Button>
  );
};

export default Header;
