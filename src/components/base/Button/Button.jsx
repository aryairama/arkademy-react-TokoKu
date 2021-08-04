import React from 'react';

const Button = (props) => {
  return (
    <button
      disabled={ props.disabled}
      type={props.type}
      className={`btn ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
