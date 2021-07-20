import React, { Fragment, useState } from 'react';
import { Container } from '../../../components/base/index';
import { ContentCard } from '../../../components/module/index';
import currentProfile from '../../../assets/img/profile/current_profile.png'
const ProfileStore = () => {
  const initialization = {
    name: 'Johanes Mikael',
    email: 'johanes@gmail.com',
    phone_number: '08901289012',
    store_description: '',
  };
  const [userProfile, setUserProfile] = useState(initialization);
  const changeHandler = (e) => {
    setUserProfile((oldValue) => {
      return { ...oldValue, [e.target.name]: e.target.value };
    });
  };
  return (
    <Container className="mb-5">
      <ContentCard
        cardHeader={
          <Fragment>
            <div className="text-black-20px fw-bold">My profile store</div>
            <div className="text-black-14px text-black-50">Manage your profile information</div>
          </Fragment>
        }
        cardBody={
          <div className="row">
            <div className="col-lg-8 col-md-12 col-12 order-lg-0 order-1">
              <div className="row mb-3">
                <label htmlFor="name" className="col-sm-3 col-form-label text-black-50">
                  Name Store
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={userProfile.name}
                    onChange={changeHandler}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="email" className="col-sm-3 col-form-label text-black-50">
                  email
                </label>
                <div className="col-sm-9">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={userProfile.email}
                    onChange={changeHandler}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="phone_number" className="col-sm-3 col-form-label text-black-50">
                  Phone number
                </label>
                <div className="col-sm-9">
                  <input
                    type="number"
                    className="form-control"
                    id="phone_number"
                    name="phone_number"
                    value={userProfile.phone_number}
                    onChange={changeHandler}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="phone_number" className="col-sm-3 col-form-label text-black-50">
                  Store description
                </label>
                <div className="col-sm-9">
                  <textarea
                    className="form-control"
                    name="store_description"
                    id="store_description"
                    cols="30"
                    rows="5"
                    value={userProfile.store_description}
                    onChange={changeHandler}
                  ></textarea>
                </div>
              </div>
              <div className="row mb-3 mt-5">
                <div className="offset-3 col-9">
                  <button type="submit" className="btn btn-orange rounded-pill px-5">
                    Save
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-12 order-lg-0 order-0 d-flex flex-wrap justify-content-evenly">
              <hr className="d-lg-block d-none" width="1" size="150" />
              <div className="d-flex flex-wrap flex-column align-items-center pb-3">
                <img
                  className=" rounded-circle"
                  src={currentProfile}
                  width="110px"
                  height="110px"
                  alt="current-profile"
                />
                <button className="btn btn-outline-orange rounded-pill mt-2">Select image</button>
              </div>
            </div>
          </div>
        }
      />
    </Container>
  );
};

export default ProfileStore;
