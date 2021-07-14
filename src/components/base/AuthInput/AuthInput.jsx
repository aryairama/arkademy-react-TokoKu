import React from 'react';

const AuthInput = (props) => {
  return (
    <div className="col-md-6 offset-md-3 mb-3">
      <input
        type={props.type}
        className="form-control"
        placeholder={props.placeholder}
        name={props.name}
        value={props.value}
        onChange={props.onChangeInput}
      />
    </div>
  );
};

export default AuthInput;
