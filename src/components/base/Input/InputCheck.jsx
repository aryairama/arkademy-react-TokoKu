import React, { Fragment } from 'react';

const InputCheck = (props) => {
  return (
    <Fragment>
      <input
        type={props.type}
        className={`form-check-input ${props.styleInput}`}
        value={props.value}
        name={props.name}
        id={props.id}
        onClick={props.onClick}
        defaultChecked={props.defaultChecked === props.value ? true : false}
      />
      <label htmlFor={props.id} className={`form-check-label text-black-50 ${props.styleLabel}`}>
        {props.label}
      </label>
    </Fragment>
  );
};

export default InputCheck;
