import React from 'react';

const AuthInput = (props) => {
  return (
    <div className="col-md-6 offset-md-3 mb-3">
      <input
        type={props.type}
        className={`form-control ${props.className}`}
        placeholder={props.placeholder}
        name={props.name}
        value={props.value}
        onBlur={props.onBlur}
        onChange={props.onChangeInput}
        onFocus={props.onFocus}
      />
      {props.children}
    </div>
  );
};

export default AuthInput;
