import React, { useRef, useState, useEffect } from 'react';
import LayoutAuth from '../../../components/module/LayoutAuth/LayoutAuth';
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
    <LayoutAuth>
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
            <div className="text-end text-forgot-password d-block">
              Forgot Password
            </div>
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
              <div className="text-register d-inline">Register</div>
            </div>
          </div>
        </div>
      </form>
      <MyModal
        id="passwordConfirmation"
        forwadedRef={refResetPassword}
        styleBody="d-flex flex-column align-items-center"
        body={<Body/>}
      ></MyModal>
    </LayoutAuth>
  );
};

export default ResetPassword;
