import React, { Fragment } from 'react';
import StarIcon from '../../base/StarIcon/StarIcon';
import Star from '../../../assets/img/icon/Star.svg';
const ProductDescription = (props) => {
  return (
    <Fragment>
      <div className="produk-information">
        <p className="product-information-title">Informasi Produk</p>
        <p className="product-information-condition ">Condition</p>
        <p className="product-information-condition text-orange mt-n3">New</p>
        <p className="product-information-description mt-5">Description</p>
        <p className="product-information-description-text" dangerouslySetInnerHTML={{__html: props.description}}></p>
      </div>
      <div className="produk-information-rating">
        <p className="product-information-title mt-5">Product review</p>
        <div className="product-rating row">
          <div className="col-lg-3 col-md-3 col-sm-6 col-6">
            <div className="all-ratings">
              <div className="text-rating-primary">
                5.0<div className="text-rating-secondary d-inline-block">/10</div>
              </div>
              <div className="all-star">
                <ul className="list-rating-product p-0 mt-n2">
                  <StarIcon classNameName="pe-1" />
                  <StarIcon classNameName="pe-1" />
                  <StarIcon classNameName="pe-1" />
                  <StarIcon classNameName="pe-1" />
                  <StarIcon classNameName="pe-1" />
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 ms-lg-n5 col-md-6 col-sm-6 col-6">
            <div className="every-star d-flex flex-column ms-md-5">
              <div className="five-star d-flex p-1 align-items-center">
                <img src={Star} alt="icon-rating" />
                <p className=" lh-1 my-0 mx-2 text-count-rating">5</p>
                <div className="rating-bar-orange"></div>
                <p className=" lh-1 my-0 mx-2 text-count-rating">4</p>
              </div>
              <div className="four-star d-flex p-1 align-items-center">
                <img src={Star} alt="icon-rating" />
                <p className=" lh-1 my-0 mx-2 text-count-rating">4</p>
                <div className="rating-bar-transparant"></div>
                <p className=" lh-1 my-0 mx-2 text-count-rating">0</p>
              </div>
              <div className="three-star d-flex p-1 align-items-center">
                <img src={Star} alt="icon-rating" />
                <p className=" lh-1 my-0 mx-2 text-count-rating">3</p>
                <div className="rating-bar-transparant"></div>
                <p className=" lh-1 my-0 mx-2 text-count-rating">0</p>
              </div>
              <div className="two-star d-flex p-1 align-items-center">
                <img src={Star} alt="icon-rating" />
                <p className=" lh-1 my-0 mx-2 text-count-rating">2</p>
                <div className="rating-bar-transparant"></div>
                <p className=" lh-1 my-0 mx-2 text-count-rating">0</p>
              </div>
              <div className="one-star d-flex p-1 align-items-center">
                <img src={Star} alt="icon-rating" />
                <p className=" lh-1 my-0 mx-2 text-count-rating">1</p>
                <div className="rating-bar-transparant"></div>
                <p className=" lh-1 my-0 mx-2 text-count-rating">0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductDescription;
