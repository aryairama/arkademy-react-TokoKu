import React, { Fragment } from 'react';
import { Container } from '../../../components/base/index';
import { ContentCard } from '../../../components/module';
import Logo from '../../../assets/img/icon/Vector.svg';
import iconGmail from '../../../assets/img/icon/icon_gmail.png';
import style from './style.module.css';
import { Link } from 'react-router-dom';
const CheckEmail = () => {
  return (
    <Container>
      <div className="row mt-4">
        <div className="offset-md-3 col-md-6">
          <ContentCard
            styleCard={`mb-5 ${style['card-verif']}`}
            styleBody="d-flex flex-column align-items-center"
            cardBody={
              <Fragment>
                <div className="d-flex">
                  <img className="img-fluid" src={Logo} alt="logo-ecommerce" />
                  <p className="text-logo-ecommerce mt-4_5 ms-2">TokoKu</p>
                </div>
                <p className="w-75 text-black-20px fw-bold mt-2 mb-2 text-center">Thank you for registering</p>
                <img width="255px" height="255px" src={iconGmail} alt="icon-lock" />
                <p className="w-75 text-black-14px text-black-50 mt-2 text-center">
                  Check the message in your email, then verify and your account is ready to use
                </p>
                <Link to="/auth/login" className="btn btn-orange rounded-pill w-50 mb-3">
                  Login Now
                </Link>
              </Fragment>
            }
          />
        </div>
      </div>
    </Container>
  );
};

export default CheckEmail;
