import React from 'react';
import style from './AuthSwitch.module.css';
import '../../../assets/css/auth.css';

const AuthSwitch = (props) => {
  return (
    <div className={`${style['roles-switch']} mt-4`}>
      <div className="btn-group">
        <input
          value="custommer"
          type="radio"
          className="btn-check"
          name="switchRoles"
          autoComplete="off"
          id="switchRoles1"
          defaultChecked={props.value}
          onClick={props.onChangeSwitch}
        />
        <label
          className="btn btn-switch-orange py-2"
          htmlFor="switchRoles1"
        >
          Custommer
        </label>
        <input
          value="seller"
          type="radio"
          className="btn-check"
          name="switchRoles"
          autoComplete="off"
          id="switchRoles2"
          defaultChecked={props.value}
          onClick={props.onChangeSwitch}
        />
        <label
          className="btn btn-switch-orange py-2"
          htmlFor="switchRoles2"
        >
          Seller
        </label>
      </div>
    </div>
  );
};

export default AuthSwitch;
