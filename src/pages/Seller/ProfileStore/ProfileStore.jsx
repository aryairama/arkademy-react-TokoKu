/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useState, useEffect, useRef } from 'react';
import { Container } from '../../../components/base/index';
import { ContentCard } from '../../../components/module/index';
import { getDetailStore, updateProfileStore } from '../../../configs/redux/actions/storeAction';
import { useSelector, useDispatch } from 'react-redux';
import SimpleReactValidator from 'simple-react-validator';
import swal from 'sweetalert';

const ProfileStore = () => {
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
    store: { detailStore },
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  const initialization = {
    store_name: '',
    phone_number: '',
    store_description: '',
    avatar: '',
    email: '',
  };
  const [userProfile, setUserProfile] = useState(initialization);
  const [backendError,setBackendError] =useState({})
  const changeHandler = (e) => {
    setUserProfile((oldValue) => {
      return { ...oldValue, [e.target.name]: e.target.value };
    });
  };
  useEffect(() => {
    dispatch(getDetailStore());
  }, []);
  useEffect(() => {
    setUserProfile((oldValue) => {
      return { ...oldValue, ...detailStore, email: '' };
    });
    validator.current.showMessages();
  }, [detailStore]);
  useEffect(() => {
    validator.current.showMessages();
  }, [userProfile]);
  const handlerSubmit = async (e) => {
    try {
      e.preventDefault();
      const { data } = await (await dispatch(updateProfileStore(userProfile))).data;
      dispatch({ type: 'LOGIN', payload: { ...data, accessToken: user.accessToken, refreshToken: user.refreshToken } });
      swal('Success', 'Data update successfully', 'success');
    } catch (error) {
      swal('Error', 'Failed to update profile seller', 'error');
      if (error.response.data.statusCode === 422) {
        document.querySelector('.main-panel').scrollTo(0, 0);
        setBackendError({
          avatar: '',
          email : ''
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
            <div className="text-black-20px fw-bold">My profile store</div>
            <div className="text-black-14px text-black-50">Manage your profile information</div>
          </Fragment>
        }
        cardBody={
          <form onSubmit={handlerSubmit} className="row">
            <div className="col-lg-8 col-md-12 col-12 order-lg-0 order-1">
              <div className="row mb-3">
                <label htmlFor="name" className="col-sm-3 col-form-label text-black-50">
                  Name Store
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className={`form-control ${validator.current.fieldValid('store_name') === false ? 'is-invalid' : ''}`}
                    id="store_name"
                    name="store_name"
                    value={userProfile.store_name}
                    onChange={changeHandler}
                  />
                  {validator.current.message('store_name', userProfile.store_name, 'required|min:5|max:255')}
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="email" className="col-sm-3 col-form-label text-black-50">
                  email
                </label>
                <div className="col-sm-9">
                  <input
                    type="email"
                    className={`form-control ${validator.current.fieldValid('email') === false ? 'is-invalid' : ''}`}
                    id="email"
                    name="email"
                    placeholder={detailStore.email}
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
                    className={`form-control ${validator.current.fieldValid('phone_number') === false? 'is-invalid' : ''}`}
                    id="phone_number"
                    name="phone_number"
                    value={userProfile.phone_number}
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
                <label htmlFor="phone_number" className="col-sm-3 col-form-label text-black-50">
                  Store description
                </label>
                <div className="col-sm-9">
                  <textarea
                    className={`form-control ${validator.current.fieldValid('store_description') === false ? 'is-invalid' : ''}`}
                    name="store_description"
                    id="store_description"
                    cols="30"
                    rows="5"
                    value={userProfile.store_description}
                    onChange={changeHandler}
                  ></textarea>
                  {validator.current.message('store_description', userProfile.store_description, 'required|min:10')}
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
                <img
                  className=" rounded-circle"
                  src={
                    userProfile.avatar
                      ? URL.createObjectURL(userProfile.avatar)
                      : `${process.env.REACT_APP_API_URL}/${user.avatar}`
                  }
                  width="110px"
                  height="110px"
                  alt="current-profile"
                />
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

export default ProfileStore;
