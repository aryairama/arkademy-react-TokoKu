import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { LayoutAuthForm } from '../../../components/module';
import AuthLogos from '../../../components/base/AuthLogos/AuthLogos';
import AuthInput from '../../../components/base/AuthInput/AuthInput';
import AuthSwitch from '../../../components/base/AuthSwitch/AuthSwitch';
import { Button } from '../../../components/base';
import { login } from '../../../configs/redux/actions/userAction';
import { useDispatch } from 'react-redux';
import '../../../assets/css/auth.css';

const Login = (props) => {
  const history = useHistory()
  const dispatch = useDispatch()
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
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(formData, history));
  }
  return (
    <LayoutAuthForm>
      <AuthLogos />
      <p className="text-center text-auth-warning mt-3">Please login with your account</p>
      <AuthSwitch value={roles} onChangeSwitch={changeSwitchHandler}></AuthSwitch>
      <form onSubmit={submitHandler} className="form-login px-5 px-md-0 px-lg-0 mt-4_5">
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
            <Link to="/auth/forgotpassword" className="text-end text-forgot-password d-block">
              Forgot Password
            </Link>
          </div>
          <div className="col-md-6 offset-md-3 mb-4 d-grid">
            <Button type="submit" className="btn btn-submit rounded-pill">
              Login
            </Button>
          </div>
          <div className="col-md-6 offset-md-3 mb-3">
            <div className="text-center">
              Don't have a Tokopedia account?{' '}
              <Link to="/auth/register" className="text-register d-inline">
                Register
              </Link>
            </div>
          </div>
        </div>
      </form>
    </LayoutAuthForm>
  );
};

export default Login;
