import React from 'react';
import Logo from '../../../assets/img/icon/Vector.svg';
import style from './AuthLogos.module.css';

const AuthLogos = () => {
  return (
    <div className="text-center d-flex justify-content-center mt-5">
      <img className="img-fluid" src={Logo} alt="logo-app" />
      <p className={`${style['text-logo-ecommerce']} ${style['mt-4_5']}  ms-2`}>
        TokoKu
      </p>
    </div>
  );
};

export default AuthLogos;
