import React, { Fragment } from 'react';

const InputPicker = (props) => {
  return (
    <Fragment>
      <input type="checkbox" className="btn-check" id={props.id} autoComplete="off" value={props.value} />
      <label htmlFor={props.id} className="btn btn btn-outline-orange me-2">
        {props.children}
      </label>
    </Fragment>
  );
};

export default InputPicker;
