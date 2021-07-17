import React, { Fragment } from 'react';

const ColorPicker = (props) => {
  return (
    <Fragment>
      <input type="checkbox" className="btn-check" id={props.id} autoComplete="off" value={props.value} />
      <label htmlFor={props.id} className={`btn btn-outline-rounded-${props.color} me-2`}></label>
    </Fragment>
  );
};

export default ColorPicker;
