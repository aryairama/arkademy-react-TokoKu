import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LayoutAuth from '../../../components/module/LayoutAuth/LayoutAuth';
import AuthLogos from '../../../components/base/AuthLogos/AuthLogos';
import AuthInput from '../../../components/base/AuthInput/AuthInput';
import AuthSwitch from '../../../components/base/AuthSwitch/AuthSwitch';
import Button from '../../../components/base/Button/Button';
import '../../../assets/css/auth.css';

const Register = (props) => {
  const initialFormData = {
    email: '',
    password: '',
    name: '',
    phoneNumber: '',
    storeName: '',
  };
  const [roles, setRoles] = useState('seller');
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
  useEffect(() => {
    setFormData(initialFormData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roles]);
  return (
    <LayoutAuth>
      <AuthLogos />
      <p className="text-center text-auth-warning mt-3">
        Please sign up with your account
      </p>
      <AuthSwitch
        value={roles}
        onChangeSwitch={changeSwitchHandler}
      ></AuthSwitch>
      <form className="form-register px-5 px-md-0 px-lg-0 mt-4_5">
        <div className="row">
          {roles === 'custommer' && (
            <Fragment>
              <AuthInput
                name="name"
                value={formData.name}
                onChangeInput={changeInputHandler}
                type="name"
                placeholder="Name"
              />
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
            </Fragment>
          )}
          {roles === 'seller' && (
            <Fragment>
              <AuthInput
                name="name"
                value={formData.name}
                onChangeInput={changeInputHandler}
                type="text"
                placeholder="Name"
              />
              <AuthInput
                name="email"
                value={formData.email}
                onChangeInput={changeInputHandler}
                type="email"
                placeholder="Email"
              />
              <AuthInput
                name="phoneNumber"
                value={formData.phoneNumber}
                onChangeInput={changeInputHandler}
                type="number"
                placeholder="Phone number"
              />
              <AuthInput
                name="storeName"
                value={formData.storeName}
                onChangeInput={changeInputHandler}
                type="text"
                placeholder="Store name"
              />
              <AuthInput
                name="password"
                value={formData.password}
                onChangeInput={changeInputHandler}
                type="password"
                placeholder="Password"
              />
            </Fragment>
          )}
          <div className="col-md-6 offset-md-3 mb-4 d-grid">
            <Button type="button" className="btn-submit rounded-pill">Register</Button>
          </div>
          <div className="col-md-6 offset-md-3 mb-3">
            <div className="text-center">
              Already have a Tokopedia account?{' '}
              <Link to="/login" className="text-register d-inline">Login</Link>
            </div>
          </div>
        </div>
      </form>
    </LayoutAuth>
  );
};

export default Register;
