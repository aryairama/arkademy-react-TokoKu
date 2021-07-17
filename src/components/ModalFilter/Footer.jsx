import React, { Fragment } from 'react';
import Button from '../base/Button/Button';
const Footer = (props) => {
  return (
    <Fragment>
      <Button onClick={props.onClickCloseFilter} type="button" className="btn-sm btn-outline-orange rounded-pill w-40">
        Discard
      </Button>
      <Button type="button" className="btn-sm btn-outline-orange rounded-pill w-40">
        Apply
      </Button>
    </Fragment>
  );
};

export default Footer;
