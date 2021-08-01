import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductGallery = (props) => {
  let { id } = useParams();
  const [currentImg, setCurrentImg] = useState('');
  useEffect(() => {
    setCurrentImg('');
  }, [id]);
  return (
    <Fragment>
      <div className="product-gallery">
        <div className="big-product-gallery">
          <img
            className="img-fluid rounded-3 img-big-product-gallery"
            src={
              currentImg
                ? currentImg
                : `${process.env.REACT_APP_API_URL}/${props.img_products ? props.img_products[0].img_product : ''}`
            }
            alt=""
          />
        </div>
        <div className="small-product-gallery d-flex overflow-auto align-items-stretch mt-2">
          {props.img_products &&
            props.img_products.map((img, index) => (
              <img
                key={index}
                className="img-fluid rounded-3 img-small-product-gallery"
                src={`${process.env.REACT_APP_API_URL}/${img.img_product}`}
                alt="product-gallery"
                onClick={() => setCurrentImg(`${process.env.REACT_APP_API_URL}/${img.img_product}`)}
              />
            ))}
        </div>
      </div>
    </Fragment>
  );
};

export default ProductGallery;
