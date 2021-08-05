import React, { Fragment } from 'react';
const BoxItem = (props) => {
  return (
    <Fragment>
      <div className="card card-body shadow-sm my-2">
        <div className="row align-items-center">
          <div className="col-8 col-sm-8 col-md-8 col-lg-8 d-flex flex-wrap align-items-center">
            <img className="img-mybag-product rounded-3 me-2" src={props.imgProduct} alt="logo-product" />
            <div className="mybag-product-header">
              <p className="card-product-title">{props.name}</p>
              <p className="card-product-brand mt-n3">{props.brand}</p>
            </div>
          </div>
          <div className="col-4 col-sm-4 col-md-4 col-lg-4 d-flex flex-wrap justify-content-end">
            <span className="card-product-title fw-bold">Rp.{props.price}</span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BoxItem;
