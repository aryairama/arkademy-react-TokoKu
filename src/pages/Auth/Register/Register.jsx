/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { LayoutAuthForm } from '../../../components/module';
import AuthLogos from '../../../components/base/AuthLogos/AuthLogos';
import AuthInput from '../../../components/base/AuthInput/AuthInput';
import AuthSwitch from '../../../components/base/AuthSwitch/AuthSwitch';
import Button from '../../../components/base/Button/Button';
import '../../../assets/css/auth.css';
import { register } from '../../../configs/redux/actions/userAction';
import { useDispatch } from 'react-redux';
import SimpleReactValidator from 'simple-react-validator';

const Register = (props) => {
  const [, forceUpdate] = useState();
  const validator = useRef(
    new SimpleReactValidator({ className: 'small text-danger', autoForceUpdate: { forceUpdate: forceUpdate } })
  );
  const dispatch = useDispatch();
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
  }, [roles]);
  const submitHandler = (e) => {
    e.preventDefault();
    if (roles === 'seller') {
      if (!validator.current.allValid()) {
        validator.current.showMessages();
        forceUpdate(1);
      } else {
        dispatch(register({ ...formData, roles },props.history));
      }
    } else if (roles === 'custommer') {
      if (
        !validator.current.fieldValid('name') ||
        !validator.current.fieldValid('email') ||
        !validator.current.fieldValid('password')
      ) {
        validator.current.showMessages();
        forceUpdate(1);
      } else {
        dispatch(
          register({ email: formData.email, password: formData.password, name: formData.name, roles }, props.history)
        );
      }
    }
  };
  return (
    <LayoutAuthForm>
      <AuthLogos />
      <p className="text-center text-auth-warning mt-3">Please sign up with your account</p>
      <AuthSwitch value={roles} onChangeSwitch={changeSwitchHandler}></AuthSwitch>
      <form onSubmit={submitHandler} className="form-register px-5 px-md-0 px-lg-0 mt-4_5">
        <div className="row">
          {roles === 'custommer' && (
            <Fragment>
              <AuthInput
                className={
                  validator.current.message('name', formData.name, 'required|min:4|max:255') ? 'is-invalid' : ''
                }
                onFocus={() => validator.current.showMessageFor('name')}
                name="name"
                value={formData.name}
                onChangeInput={changeInputHandler}
                type="name"
                placeholder="Name"
              >
                {validator.current.message('name', formData.name, 'required|min:4|max:255')}
              </AuthInput>
              <AuthInput
                className={validator.current.message('email', formData.email, 'required|email') ? 'is-invalid' : ''}
                name="email"
                value={formData.email}
                onChangeInput={changeInputHandler}
                type="email"
                placeholder="Email"
                onFocus={() => validator.current.showMessageFor('email')}
              >
                {validator.current.message('email', formData.email, 'required|email')}
              </AuthInput>
              <AuthInput
                className={
                  validator.current.message('password', formData.password, 'required|min:8|max:255') ? 'is-invalid' : ''
                }
                name="password"
                value={formData.password}
                onFocus={() => validator.current.showMessageFor('password')}
                onChangeInput={changeInputHandler}
                type="password"
                placeholder="Password"
              >
                {validator.current.message('password', formData.password, 'required|min:8|max:255')}
              </AuthInput>
            </Fragment>
          )}
          {roles === 'seller' && (
            <Fragment>
              <AuthInput
                className={
                  validator.current.message('name', formData.name, 'required|min:4|max:255') ? 'is-invalid' : ''
                }
                onFocus={() => validator.current.showMessageFor('name')}
                name="name"
                value={formData.name}
                onChangeInput={changeInputHandler}
                type="name"
                placeholder="Name"
              >
                {validator.current.message('name', formData.name, 'required|min:4|max:255')}
              </AuthInput>
              <AuthInput
                className={validator.current.message('email', formData.email, 'required|email') ? 'is-invalid' : ''}
                name="email"
                value={formData.email}
                onChangeInput={changeInputHandler}
                type="email"
                placeholder="Email"
                onFocus={() => validator.current.showMessageFor('email')}
              >
                {validator.current.message('email', formData.email, 'required|email')}
              </AuthInput>
              <AuthInput
                className={`form-control ${
                  validator.current.message('phone_number', formData.phoneNumber, 'required|min:10|max:15|numeric')
                    ? 'is-invalid'
                    : ''
                }`}
                name="phoneNumber"
                value={formData.phoneNumber}
                onChangeInput={changeInputHandler}
                type="text"
                onFocus={() => validator.current.showMessageFor('phone_number')}
                placeholder="Phone number"
              >
                {validator.current.message('phone_number', formData.phoneNumber, 'required|min:10|max:15|numeric')}
              </AuthInput>
              <AuthInput
                className={
                  validator.current.message('store_name', formData.storeName, 'required|min:5|max:255')
                    ? 'is-invalid'
                    : ''
                }
                name="storeName"
                value={formData.storeName}
                onChangeInput={changeInputHandler}
                type="text"
                onFocus={() => validator.current.showMessageFor('store_name')}
                placeholder="Store name"
              >
                {validator.current.message('store_name', formData.storeName, 'required|min:5|max:255')}
              </AuthInput>
              <AuthInput
                className={
                  validator.current.message('password', formData.password, 'required|min:8|max:255') ? 'is-invalid' : ''
                }
                name="password"
                value={formData.password}
                onFocus={() => validator.current.showMessageFor('password')}
                onChangeInput={changeInputHandler}
                type="password"
                placeholder="Password"
              >
                {validator.current.message('password', formData.password, 'required|min:8|max:255')}
              </AuthInput>
            </Fragment>
          )}
          <div className="col-md-6 offset-md-3 mb-4 d-grid">
            <Button type="submit" className="btn-submit rounded-pill">
              Register
            </Button>
          </div>
          <div className="col-md-6 offset-md-3 mb-3">
            <div className="text-center">
              Already have a Tokopedia account?{' '}
              <Link to="/auth/login" className="text-register d-inline">
                Login
              </Link>
            </div>
          </div>
        </div>
      </form>
    </LayoutAuthForm>
  );
};

export default Register;
