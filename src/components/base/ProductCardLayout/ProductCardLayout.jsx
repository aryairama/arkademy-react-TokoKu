import React from 'react';

const ProductCardLayout = (props) => {
  return <div className="d-flex flex-wrap">{props.children}</div>;
};

export default ProductCardLayout;
