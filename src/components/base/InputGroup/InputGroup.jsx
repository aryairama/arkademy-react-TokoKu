import React, { Fragment } from 'react';

const InputGroup = (props) => {
  return (
    <Fragment>
      {props.label && (
        <label htmlFor="goods" className={`form-label text-black-50 ${props.styleLabel}`}>
          {props.label}
        </label>
      )}
      <div className={`input-group ${props.styleInputGroup}`}>
        {props.leftButton && <button className={`input-group-text ${props.styleButton}`}>{props.textButton}</button>}
        <input
          onFocus={props.onFocus}
          min={props.min}
          value={props.value}
          name={props.name}
          type={props.type}
          className={`form-control ${props.styleInput}`}
          placeholder={props.placeholder}
          onChange={props.onChange}
        />
        {props.rightButton && <button type={props.typeButton } className={`input-group-text ${props.styleButton}`}>{props.textButton}</button>}
      </div>
    </Fragment>
  );
};

export default InputGroup;
