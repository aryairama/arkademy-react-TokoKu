/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useState, useEffect, useRef } from 'react';
import { Container, InputCheck } from '../../../components/base/index';
import { ContentCard } from '../../../components/module/index';
import { useSelector, useDispatch } from 'react-redux';
import SimpleReactValidator from 'simple-react-validator';
import { updateProfile } from '../../../configs/redux/actions/userAction';
import swal from 'sweetalert';
import { DropdownDate } from 'react-dropdown-date';
import defaultProfile from '../../../assets/img/profile/current_profile.png';

const Profile = () => {
  const validator = useRef(
    new SimpleReactValidator({
      messages: {
        numeric: ':attribute must be number',
      },
      className: 'small text-danger',
    })
  );
  const {
    user: { user },
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  const initialization = {
    name: '',
    email: '',
    phone_number: '',
    gender: '',
    avatar: '',
    date_of_birth: '',
  };
  const formatDate = (date) => {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  };
  const [userProfile, setUserProfile] = useState(initialization);
  const [backendError, setBackendError] = useState({});
  const changeHandler = (e) => {
    setUserProfile((oldValue) => {
      return { ...oldValue, [e.target.name]: e.target.value };
    });
  };
  useEffect(() => {
    setUserProfile((oldValue) => {
      return {
        ...oldValue,
        ...user,
        email: '',
        avatar: '',
        date_of_birth: new Date(user.date_of_birth).toISOString().slice(0, 10),
      };
    });
  }, []);
  useEffect(() => {
    validator.current.showMessages();
  }, [userProfile]);
  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      console.log(userProfile);
      const { data } = await (await dispatch(updateProfile(userProfile))).data;
      dispatch({ type: 'LOGIN', payload: { ...user, ...data } });
      swal('Success', 'Data update successfully', 'success');
    } catch (error) {
      swal('Error', 'Failed to update profile', 'error');
      if (error.response.data.statusCode === 422) {
        document.querySelector('.main-panel').scrollTo(0, 0);
        setBackendError({
          avatar: '',
          email: '',
        });
        setBackendError((oldValue) => {
          const inputError = {};
          error.response.data.error.forEach((error) => {
            inputError[error.param] = error.msg;
          });
          return { ...oldValue, ...inputError };
        });
      }
    }
  };
  return (
    <Container className="mb-5">
      <ContentCard
        cardHeader={
          <Fragment>
            <div className="text-black-20px fw-bold">My Profile</div>
            <div className="text-black-14px text-black-50">Manage your profile information</div>
          </Fragment>
        }
        cardBody={
          <form onSubmit={submitHandler} className="row">
            <div className="col-lg-8 col-md-12 col-12 order-lg-0 order-1">
              <div className="row mb-3">
                <label htmlFor="name" className="col-sm-3 col-form-label text-black-50">
                  Name
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className={`form-control ${
                      !validator.current.check(userProfile.name, 'required|min:4|max:255') ? 'is-invalid' : ''
                    }`}
                    id="name"
                    name="name"
                    value={userProfile.name}
                    onChange={changeHandler}
                  />
                  {validator.current.message('name', userProfile.name, 'required|min:4|max:255')}
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="email" className="col-sm-3 col-form-label text-black-50">
                  email
                </label>
                <div className="col-sm-9">
                  <input
                    type="email"
                    className={`form-control ${
                      !validator.current.check(userProfile.email, 'email') ? 'is-invalid' : ''
                    }`}
                    id="email"
                    name="email"
                    placeholder={user.email}
                    onChange={changeHandler}
                  />
                  {validator.current.message('email', userProfile.email, 'email')}
                  {backendError.email && <div className="small text-danger">{backendError.email}</div>}
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="phone_number" className="col-sm-3 col-form-label text-black-50">
                  Phone number
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className={`form-control ${
                      !validator.current.check(userProfile.phone_number, 'required|min:10|max:15|numeric')
                        ? 'is-invalid'
                        : ''
                    }`}
                    id="phone_number"
                    name="phone_number"
                    value={userProfile.phone_number === null ? '' : userProfile.phone_number}
                    onChange={changeHandler}
                  />
                  {validator.current.message(
                    'phone_number',
                    userProfile.phone_number,
                    'required|min:10|max:15|numeric'
                  )}
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="gender_laki" className="col-sm-3 col-form-label text-black-50">
                  Gender
                </label>
                <div className="col-sm-9">
                  <div className="form-check-inline">
                    <InputCheck
                      type="radio"
                      value="male"
                      name="gender"
                      id="gender_laki"
                      onClick={changeHandler}
                      defaultChecked={userProfile.gender === null ? '' : userProfile.gender}
                      label="Laki-Laki"
                      styleLabel="me-4"
                      styleInput="me-2"
                    />
                    <InputCheck
                      type="radio"
                      value="female"
                      name="gender"
                      id="gender_perempuan"
                      onClick={changeHandler}
                      defaultChecked={userProfile.gender === null ? '' : userProfile.gender}
                      label="Perempuan"
                      styleLabel="me-4"
                      styleInput="me-2"
                    />
                  </div>
                  {validator.current.message('gender', userProfile.gender, 'required|in:male,female')}
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="phone_number" className="col-sm-3 col-form-label text-black-50">
                  Date of birth
                </label>
                <div className="col-sm-9">
                  {userProfile.date_of_birth && (
                    <DropdownDate
                      startDate={'1945-01-01'}
                      classes={{
                        dateContainer: 'd-flex justify-content-between',
                        day: 'form-select',
                        year: 'form-select',
                        month: 'form-select',
                      }}
                      defaultValues={{
                        year: 'Select year',
                        month: 'Select month',
                        day: 'Select day',
                      }}
                      onDateChange={(date) => {
                        console.log(formatDate(date));
                        setUserProfile((oldValue) => {
                          return { ...oldValue, date_of_birth: formatDate(date) };
                        });
                      }}
                      selectedDate={userProfile.date_of_birth}
                    />
                  )}
                  {validator.current.message('date_of_birth', userProfile.date_of_birth, 'required')}
                </div>
              </div>
              <div className="row mb-3 mt-5">
                <div className="offset-3 col-9">
                  <button
                    disabled={validator.current.allValid() ? false : true}
                    type="submit"
                    className="btn btn-orange rounded-pill px-5"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-12 order-lg-0 order-0 d-flex flex-wrap justify-content-evenly">
              <hr className="d-lg-block d-none" width="1" size="150" />
              <div className="d-flex flex-wrap flex-column align-items-center pb-3">
                <input
                  style={{ display: 'none' }}
                  type="file"
                  name="avatar"
                  id="avatar"
                  accept="image/jpeg, image/png"
                  onChange={(e) =>
                    setUserProfile((oldValue) => {
                      return { ...oldValue, avatar: e.target.files[0] };
                    })
                  }
                />
                {user.avatar && user.avatar.length > 10 && !userProfile.avatar && (
                  <img
                    className=" rounded-circle"
                    src={`${process.env.REACT_APP_API_URL}/${user.avatar}`}
                    width="110px"
                    height="110px"
                    alt="current-profile"
                  />
                )}
                {userProfile.avatar && !user.avatar && (
                  <img
                    className=" rounded-circle"
                    src={URL.createObjectURL(userProfile.avatar)}
                    width="110px"
                    height="110px"
                    alt="current-profile"
                  />
                )}
                {!userProfile.avatar && !user.avatar && (
                  <img
                    className=" rounded-circle"
                    src={defaultProfile}
                    width="110px"
                    height="110px"
                    alt="current-profile"
                  />
                )}
                {userProfile.avatar && user.avatar && (
                  <img
                    className=" rounded-circle"
                    src={URL.createObjectURL(userProfile.avatar)}
                    width="110px"
                    height="110px"
                    alt="current-profile"
                  />
                )}
                {backendError.avatar && <div className="small text-danger">{backendError.avatar}</div>}
                <label htmlFor="avatar" className="btn btn-outline-orange rounded-pill mt-2">
                  Select image
                </label>
              </div>
            </div>
          </form>
        }
      />
    </Container>
  );
};

export default Profile;
