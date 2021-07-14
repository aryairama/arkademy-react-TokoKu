import React, { useState } from 'react';
import LayoutAuth from '../../../components/module/LayoutAuth/LayoutAuth';
import AuthLogos from '../../../components/base/AuthLogos/AuthLogos';
import AuthInput from '../../../components/base/AuthInput/AuthInput';
import AuthSwitch from '../../../components/base/AuthSwitch/AuthSwitch';
import Button from '../../../components/base/Button/Button';
import '../../../assets/css/style.css';
import '../../../assets/css/auth.css';

const Login = (props) => {
  const [roles, setRoles] = useState('seller');
  const initialFormData = {
    email: '',
    password: '',
  };
  const [formData, setFormData] = useState(initialFormData);
  const changeSwitchHandler = (e) => {
    setRoles(e.target.value);
  };
  const changeInputHandler = (e) => {
    setFormData((oldValue) => {
      return {
        ...oldValue,
        [e.target.name]: e.target.value,
      };
    });
  };
  return (
    <LayoutAuth>
      <AuthLogos />
      <p className="text-center text-auth-warning mt-3">
        Please login with your account
      </p>
      <AuthSwitch
        value={roles}
        onChangeSwitch={changeSwitchHandler}
      ></AuthSwitch>
      <form className="form-login px-5 px-md-0 px-lg-0 mt-4_5">
        <div className="row">
          <AuthInput
            name="email"
            value={formData.email}
            onChangeInput={changeInputHandler}
            type="email"
            placeholder="Email"
          />
          <AuthInput
            name="password"
            value={formData.password}
            onChangeInput={changeInputHandler}
            type="password"
            placeholder="Password"
          />
          <div className="col-md-6 offset-md-3 mb-3">
            <div className="text-end text-forgot-password d-block">
              Forgot Password
            </div>
          </div>
          <div className="col-md-6 offset-md-3 mb-4 d-grid">
            <Button className="btn-submit rounded-pill">Login</Button>
          </div>
          <div className="col-md-6 offset-md-3 mb-3">
            <div className="text-center">
              Don't have a Tokopedia account?{' '}
              <div className="text-register d-inline">Register</div>
            </div>
          </div>
        </div>
      </form>
    </LayoutAuth>
  );
};

export default Login;
