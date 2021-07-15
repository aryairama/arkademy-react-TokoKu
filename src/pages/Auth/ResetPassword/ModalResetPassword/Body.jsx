import React, { Fragment } from 'react';
import Logo from '../../../../assets/img/icon/Vector.svg'
import IconLock from '../../../../assets/img/icon/lock1.png'
import Button from '../../../../components/base/Button/Button';

const Body = () => {
  return (
    <Fragment>
      <div className="d-flex">
        <img className="img-fluid" src={Logo} alt="logo-ecommerce" />
        <p className="text-logo-ecommerce mt-4_5 ms-2">TokoKu</p>
      </div>
      <p className="w-75 text-black-20px fw-bold mt-4_5 mb-4 text-center">
        Request to Reset Your Account Password
      </p>
      <img src={IconLock} alt="icon-lock" />
      <p className="w-75 text-black-14px text-black-50 mt-4_5 text-center">
        The following is the button for you to reset the password.
      </p>
      <Button className="btn btn-orange rounded-pill mb-4">
        Change password
      </Button>
    </Fragment>
  );
};

export default Body;
