import React, { Fragment } from 'react';

const InputCheck = (props) => {
  return (
    <Fragment>
      {props.defaultChecked && (
        <input
          type={props.type}
          className={`form-check-input ${props.styleInput}`}
          value={props.value}
          name={props.name}
          id={props.id}
          onBlur={props.onBlur}
          onChange={props.onClick}
          checked={props.defaultChecked === props.value ? true : false}
        />
      )}
      {!props.defaultChecked && (
        <input
          type={props.type}
          className={`form-check-input ${props.styleInput}`}
          value={props.value}
          name={props.name}
          id={props.id}
          onBlur={props.onBlur}
          onChange={props.onClick}
        />
      )}
      <label htmlFor={props.id} className={`form-check-label text-black-50 ${props.styleLabel}`}>
        {props.label}
      </label>
    </Fragment>
  );
};

export default InputCheck;
