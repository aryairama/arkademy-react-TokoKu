import React from 'react';

const ProductCardLayout = (props) => {
  return <div className="d-flex flex-wrap justify-content-sm-around justify-content-center">{props.children}</div>;
};

export default ProductCardLayout;
