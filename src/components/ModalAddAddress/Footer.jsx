import React, { Fragment } from 'react';
import { Button } from '../base/index';
const Footer = (props) => {
  return (
    <Fragment>
      <Button className="btn button-auth rounded-pill w-25" onClick={props.onClickCloseAddAddress}>
        Cancel
      </Button>
      <Button className="btn btn-orange rounded-pill w-25">Save</Button>
    </Fragment>
  );
};

export default Footer;
