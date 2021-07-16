import React from 'react';
import { Link } from 'react-router-dom';
import Start from '../../../assets/img/icon/Star.svg'

const ProductCard = (props) => {
  return (
    <div className="flex-item d-flex">
      <div className="card">
        <img className="w-100 h-100" src={props.imgProduct} alt="" />
        <div className="card-body">
          <Link to={props.urlProduct} className="card-product-title stretched-link text-truncate d-block">
            {props.productTitle}
          </Link>
          <p className="card-product-price mt-1">Rp.{props.productPrice}</p>
          <p className="card-product-brand mt-n3">{props.productBrand}</p>
          <ul className="list-rating-product p-0 mt-n3">
            <li className="">
              <img className="img-fluid" src={Start} alt="icon-rating" />
            </li>
            <li className="">
              <img className="img-fluid" src={Start} alt="icon-rating" />
            </li>
            <li className="">
              <img className="img-fluid" src={Start} alt="icon-rating" />
            </li>
            <li className="">
              <img className="img-fluid" src={Start} alt="icon-rating" />
            </li>
            <li className="">
              <img className="img-fluid" src={Start} alt="icon-rating" />
            </li>
            <li className="text-black-50">(10)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
