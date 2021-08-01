/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import qs from 'query-string';
import { default as axios } from '../../configs/axiosConfig';
import { Container } from '../../components/base';

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
  return <Container>Verif Register email : {verif}</Container>;
};

export default VerifRegisterEmail;
