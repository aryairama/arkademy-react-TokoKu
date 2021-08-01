import React, { Fragment } from 'react';

const ColorPicker = (props) => {
  let selected = false;
  if (props.productColors) {
    props.productColors.forEach((productColor) => {
      if (productColor === props.value) {
        selected = true;
      }
    });
  }
  return (
    <Fragment>
      {props.defaultChecked && (
        <input
          type={props.type ? props.type : 'checkbox'}
          className="btn-check"
          id={props.id}
          autoComplete="off"
          value={props.value}
          name={props.name}
          onChange={props.onClick}
          checked={props.value === props.defaultChecked ? true : false}
        />
      )}
      {!props.defaultChecked && !props.productColors && (
        <input
          type={props.type ? props.type : 'checkbox'}
          className="btn-check"
          id={props.id}
          autoComplete="off"
          value={props.value}
          name={props.name}
          onChange={props.onClick}
        />
      )}
      {props.productColors && (
        <input
          type={props.type ? props.type : 'checkbox'}
          className="btn-check"
          id={props.id}
          autoComplete="off"
          value={props.value}
          name={props.name}
          onChange={props.onClick}
          checked={selected}
        />
      )}
      <label htmlFor={props.id} className={`btn btn-outline-rounded-${props.color} me-2 ${props.className}`}></label>
    </Fragment>
  );
};


export default ColorPicker;
