import React, { Fragment, useState } from 'react';
import StarIcon from '../../base/StarIcon/StarIcon';
import ColorPicker from '../../base/ColorPicker/ColorPicker';
import CountInput from '../../base/CountInput/CountInput';

const ProductDetail = (props) => {
  const [size, setSize] = useState(10);
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
            {props.colors &&
              props.colors.map((color) => (
                <ColorPicker
                  onClick={props.handlerChange}
                  type="radio"
                  name="color_id"
                  id={`color_product${color.color_id}`}
                  key={color.color_id}
                  value={color.color_id}
                  color={color.color_name}
                  className={color.color_name === 'white' ? 'shadow' : ''}
                />
              ))}
          </div>
        </div>
      </div>
      <div className="product-size-and-quantity mt-4">
        <div className="row">
          <CountInput className="col-xl-2 col-lg-3 col-md-4 col-6" title="Size" value={size} onClick={setSize} />
          <CountInput
            max={props.quantityProduct}
            className="col-xl-2 col-lg-3 col-md-4 col-6"
            title="Quantity"
            value={props.quantity}
            onClick={props.handlerQuantity}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default ProductDetail;
