import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LayoutAuthForm } from '../../../components/module';
import AuthLogos from '../../../components/base/AuthLogos/AuthLogos';
import AuthInput from '../../../components/base/AuthInput/AuthInput';
import Button from '../../../components/base/Button/Button';
import '../../../assets/css/auth.css';

const ConfirmPassword = () => {
  const initialFormData = {
    password: '',
    confirmPassword:'',
  };
  const [formData, setFormData] = useState(initialFormData);
  const changeInputHandler = (e) => {
    setFormData((oldValue) => {
      return {
        ...oldValue,
        [e.target.name]: e.target.value,
      };
    });
  };
  return (
    <LayoutAuthForm>
      <AuthLogos />
      <p className="text-center text-auth-warning mt-3">Reset password</p>
      <p className=" text-black-14px text-orange text-center">
        You need to change your password to activate your account
      </p>
      <form className="form-login px-5 px-md-0 px-lg-0">
        <div className="row">
          <AuthInput
            name="password"
            value={formData.password}
            onChangeInput={changeInputHandler}
            type="password"
            placeholder="Password"
          />
          <AuthInput
            name="confirmPassword"
            value={formData.confirmPassword}
            onChangeInput={changeInputHandler}
            type="password"
            placeholder="Confirmation New Password"
          />
          <div className="col-md-6 offset-md-3 mb-3">
            <Link
              to="/auth/forgotpassword"
              className="text-end text-forgot-password d-block"
            >
              Forgot Password
            </Link>
          </div>
          <div className="col-md-6 offset-md-3 mb-4 d-grid">
            <Button type="button" className="btn-submit rounded-pill">
              Confirm Password
            </Button>
          </div>
        </div>
      </form>
    </LayoutAuthForm>
  );
};

export default ConfirmPassword;
