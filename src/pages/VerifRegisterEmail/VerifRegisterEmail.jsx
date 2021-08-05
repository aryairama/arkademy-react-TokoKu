/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, Fragment } from 'react';
import qs from 'query-string';
import { default as axios } from '../../configs/axiosConfig';
import { Container } from '../../components/base';
import { ContentCard } from '../../components/module/index';
import Logo from '../../assets/img/icon/Vector.svg';
import EmailError from '../../assets/img/icon/emailerror.png';
import EmailSuccess from '../../assets/img/icon/emailsuccess.png';
import style from '../../pages/Auth/Register/style.module.css';
import { Link } from 'react-router-dom';

const VerifRegisterEmail = (props) => {
  const url = qs.parse(props.location.search);
  const [verif, setVerif] = useState('process');
  useEffect(() => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/users/verifregisteremail`, {
        token: url.veriftoken,
      })
      .then((res) => {
        if (res.data.statusCode === 200 || res.data.statusCode === 201) {
          setVerif('success');
          setTimeout(() => {
            props.history.push('/auth/login');
          }, 2000);
        }
      })
      .catch((err) => {
        if (err.response.data.statusCode === 403) {
          setVerif('failed');
        }
      });
  }, []);
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
                {verif !== 'success' && (
                  <p className="w-75 text-black-20px fw-bold mt-2 mb-4 text-center">Email failed to verify</p>
                )}
                {verif === 'success' && (
                  <p className="w-75 text-black-20px fw-bold mt-2 mb-4 text-center">Thank you for registering</p>
                )}
                <img
                  width="200px"
                  height="200px"
                  src={`${verif === 'failed' ? EmailError : EmailSuccess}`}
                  alt="icon-lock"
                />
                <p className="w-75 text-black-14px text-black-50 mt-4 text-center">
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

export default VerifRegisterEmail;
