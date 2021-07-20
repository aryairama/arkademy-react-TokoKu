import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPortal } from 'react-dom';
import { LayoutAuthForm } from '../../../components/module';
import AuthLogos from '../../../components/base/AuthLogos/AuthLogos';
import AuthInput from '../../../components/base/AuthInput/AuthInput';
import Button from '../../../components/base/Button/Button';
import MyModal from '../../../components/module/Modal/Modal';
import { Modal } from 'bootstrap';
import Body from './ModalResetPassword/Body';
import '../../../assets/css/auth.css';

const ResetPassword = () => {
  const refResetPassword = useRef(null);
  const [modalResetPassword, setModalResetPassword] = useState(null);
  const initialFormData = {
    email: '',
  };
  const [formData, setFormData] = useState(initialFormData);
  const modalShowHandler = () => modalResetPassword.show();
  const modalHideHandler = () => modalResetPassword.hide();
  useEffect(() => {
    setModalResetPassword(new Modal(refResetPassword.current));
  }, []);
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
      <form className="form-login px-5 px-md-0 px-lg-0">
        <div className="row">
          <AuthInput
            name="email"
            value={formData.email}
            onChangeInput={changeInputHandler}
            type="email"
            placeholder="Email"
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
            <Button
              type="button"
              className="btn-submit rounded-pill"
              onClick={modalShowHandler}
            >
              Reset Password
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
      {createPortal(
        <MyModal
          id="passwordConfirmation"
          forwadedRef={refResetPassword}
          styleBody="d-flex flex-column align-items-center"
          body={<Body onClick={modalHideHandler}/>}
        />,
        document.getElementById('modal-root')
      )}
    </LayoutAuthForm>
  );
};

export default ResetPassword;
