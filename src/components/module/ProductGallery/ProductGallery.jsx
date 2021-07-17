import React, { Fragment, useState } from 'react';
import product_gallery1 from '../../../assets/img/product_gallery/1.png';
import product_gallery2 from '../../../assets/img/product_gallery/2.png';
import product_gallery3 from '../../../assets/img/product_gallery/3.png';
import product_gallery4 from '../../../assets/img/product_gallery/4.png';
import product_gallery5 from '../../../assets/img/product_gallery/5.png';

const ProductGallery = (props) => {
  const [currentImg, setCurrentImg] = useState('');
  return (
    <Fragment>
      <div className="product-gallery">
        <div className="big-product-gallery">
          <img
            className="img-fluid rounded-3 img-big-product-gallery"
            src={currentImg ? currentImg : `${process.env.REACT_APP_API_URL}/${props.img_product}`}
            alt=""
          />
        </div>
        <div className="small-product-gallery d-flex overflow-auto align-items-stretch mt-2">
          <img
            className="img-fluid rounded-3 img-small-product-gallery"
            src={`${process.env.REACT_APP_API_URL}/${props.img_product}`}
            alt="product-gallery"
            onClick={() => setCurrentImg(`${process.env.REACT_APP_API_URL}/${props.img_product}`)}
          />
          <img
            className="img-fluid rounded-3 img-small-product-gallery"
            src={product_gallery1}
            alt="product-gallery"
            onClick={() => setCurrentImg(product_gallery1)}
          />
          <img
            className="img-fluid rounded-3 img-small-product-gallery"
            src={product_gallery2}
            alt="product-gallery"
            onClick={() => setCurrentImg(product_gallery2)}
          />
          <img
            className="img-fluid rounded-3 img-small-product-gallery"
            src={product_gallery3}
            alt="product-gallery"
            onClick={() => setCurrentImg(product_gallery3)}
          />
          <img
            className="img-fluid rounded-3 img-small-product-gallery"
            src={product_gallery4}
            alt="product-gallery"
            onClick={() => setCurrentImg(product_gallery4)}
          />
          <img
            className="img-fluid rounded-3 img-small-product-gallery"
            src={product_gallery5}
            alt="product-gallery"
            onClick={() => setCurrentImg(product_gallery5)}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default ProductGallery;
