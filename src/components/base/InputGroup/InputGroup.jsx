import React from 'react';

const InputGroup = (props) => {
  return (
    <div className={`input-group ${props.styleInputGroup}`}>
      {props.leftButton && <button className={`input-group-text ${props.styleButton}`}>{props.textButton}</button>}
      <input
        name={props.name}
        type={props.type}
        className={`form-control ${props.styleInput}`}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
      {props.rightButton && <button className={`input-group-text ${props.styleButton}`}>{props.textButton}</button>}
    </div>
  );
};

export default InputGroup;
