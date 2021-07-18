import React, { Fragment } from 'react';

const ColorPicker = (props) => {
  return (
    <Fragment>
      <input
        type={props.type ? props.type : 'checkbox'}
        className="btn-check"
        id={props.id}
        autoComplete="off"
        value={props.value}
        name={props.name}
        onClick={props.onClick}
        defaultChecked={props.value === props.defaultChecked ? true : false}
      />
      <label htmlFor={props.id} className={`btn btn-outline-rounded-${props.color} me-2 ${props.className}`}></label>
    </Fragment>
  );
};

export default ColorPicker;
