import React, { Fragment } from 'react';
import { Button } from '../base/index';
const Footer = () => {
  return (
    <Fragment>
      <div className="shopping-summary d-flex flex-column flex-wrap">
        <div className="text-black-16px fw-bold">Shopping summary</div>
        <div className="text-black-16px text-orange fw-bold">Rp.340000</div>
      </div>
      <Button className="btn btn-orange rounded-pill w-40">Buy</Button>
    </Fragment>
  );
};

export default Footer;
