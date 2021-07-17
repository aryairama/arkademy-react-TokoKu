import React, { Fragment, useState } from 'react';
import StarIcon from '../../base/StarIcon/StarIcon';
import ColorPicker from '../../base/ColorPicker/ColorPicker';
import CountInput from '../../base/CountInput/CountInput';

const ProductDetail = (props) => {
  const [size, setSize] = useState(10)
  const [quantity,setQuantity] = useState(1)
  return (
    <Fragment>
      <div className="product-detail mt-md-0 mt-4">
        <p className="product-title lh-1">{props.name}</p>
        <p className="product-brand lh-1">{props.brand}</p>
        <ul className="list-rating-product p-0 mt-n2">
          <StarIcon className="pe-1" />
          <StarIcon className="pe-1" />
          <StarIcon className="pe-1" />
          <StarIcon className="pe-1" />
          <StarIcon className="pe-1" />
          <li className="text-black-50">(10)</li>
        </ul>
        <p className="product-brand lh-1">Price</p>
        <p className="product-price lh-1 mt-n1">Rp.{parseInt(props.price, 10)}</p>
      </div>
      <div className="product-color">
        <div className="filter-colors lh-1">
          <p className="filter-title">Colors</p>
          <div className="d-flex flex-wrap justify-content-start">
            <ColorPicker type="radio" id="color_product1" value={props.color} color={props.color} />
          </div>
        </div>
      </div>
      <div className="product-size-and-quantity mt-4">
        <div className="row">
          <CountInput className="col-xl-2 col-lg-3 col-md-4 col-6" title="Size" value={size} onClick={setSize} />
          <CountInput className="col-xl-2 col-lg-3 col-md-4 col-6" title="Quantity" value={quantity} onClick={ setQuantity }/>
        </div>
      </div>
      <div className="product-button-action d-flex  justify-content-around mt-lg-5 mt-4">
        <button className="btn btn-sm btn-outline-orange rounded-pill w-25 py-md-2">Chat</button>
        <button className="btn btn-sm btn-outline-orange rounded-pill w-25 py-md-2">Add bag</button>
        <button className="btn btn-sm btn-orange rounded-pill w-40 py-md-2">Buy Now</button>
      </div>
    </Fragment>
  );
};

export default ProductDetail;
