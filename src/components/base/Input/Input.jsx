import React, { Fragment } from 'react';

const Input = (props) => {
  return (
    <Fragment>
      {props.label && (
        <label htmlFor={props.id} className={`form-label text-black-50 ${props.styleLabel}`}>
          {props.label}
        </label>
      )}
      <input
        onBlur={props.onBlur}
        onFocus={props.onFocus}
        id={props.id}
        type={props.type}
        className={`form-control ${props.styleInput}`}
        placeholder={props.placeholder}
        name={props.name}
        value={props.value}
        min={props.min}
        onChange={props.onChange}
      ></input>
      
    </Fragment>
  );
};

export default Input;
