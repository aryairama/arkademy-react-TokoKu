import { default as axios } from '../../axiosConfig';
import { getDetailStore } from './storeAction';
import swal from 'sweetalert';

export const login = (formData, history) => async (dispatch) => {
  try {
    const { data } = await (await axios.post('/users/login', formData)).data;
    if (data.roles === 'seller' && formData.roles === 'seller') {
      history.push('/seller/profilestore');
    } else if (data.roles === 'custommer' && formData.roles === 'custommer') {
      history.push('/custommer/profile');
    } else if (data.roles !== formData.roles) {
      return swal('Error', 'please login according to your account status', 'error');
    }
    swal('Success', 'Login successful', 'success');
    dispatch({ type: 'LOGIN', payload: data });
  } catch (error) {
    swal('Error', error.response.data.message, 'error');
  }
};

export const logout = (history) => async (dispatch, getState) => {
  try {
    await axios.delete('/users/logout', {
      headers: {
        Authorization: `Bearer ${getState().user.user.accessToken}`,
      },
    });
    dispatch({ type: 'LOGOUT', payload: {} });
    dispatch({ type: 'ADD_CART', payload: [] });
    dispatch({ type: 'TOTAL', payload: 0 });
    history.push('/auth/login');
  } catch (error) {
    swal('Error', 'Logout failed', 'error');
  }
};

export const refreshToken = (data) => (dispatch, getState) => {
  const { user: oldDataUser } = getState().user;
  const user = { ...oldDataUser, ...data };
  dispatch({ type: 'REFRESHTOKEN', payload: user });
};

export const updateProfile = (data) => async (dispatch, getState) => {
  const { user } = getState().user;
  const profile = new FormData();
  profile.append('name', data.name);
  profile.append('phone_number', data.phone_number);
  profile.append('gender', data.gender);
  profile.append('date_of_birth', data.date_of_birth);
  profile.append('roles', data.roles);
  if (user.roles === 'seller') {
    await dispatch(getDetailStore());
    const { detailStore } = getState().store;
    profile.append('store_name', detailStore.store_name);
    profile.append('store_description', detailStore.store_description);
  }
  if (data.email.length > 1) {
    profile.append('email', data.email);
  }
  if (data.avatar !== '' && !!data.avatar.type.match('image*')) {
    profile.append('avatar', data.avatar);
  }
  const sendData = await axios.post(`users/${user.user_id}`, profile, {
    headers: {
      Authorization: `Bearer ${getState().user.user.accessToken}`,
    },
  });
  return sendData;
};

export const register = (data, history) => async (dispatch, getState) => {
  try {
    if (data.roles === 'seller') {
      await axios.post('/users/register/seller', {
        name: data.name,
        store_name: data.storeName,
        password: data.password,
        email: data.email,
        phone_number: data.phoneNumber,
      });
    } else if (data.roles === 'custommer') {
      await axios.post('/users/register/custommer', data);
    }
    swal('Success', 'Register successful', 'success');
    history.push('/checkemail');
  } catch (error) {
    if (error.response.data.statusCode === 422) {
      swal('Error', error.response.data.error[0].msg, 'error');
    } else {
      swal('Error', 'Register failed', 'error');
    }
  }
  dispatch({ type: 'REQUEST' });
};

export const insertAddress = (formData, closeModal) => async (dispatch, getState) => {
  try {
    await axios.post('/addresses', formData, {
      headers: {
        Authorization: `Bearer ${getState().user.user.accessToken}`,
      },
    });
    closeModal()
    swal('Success', 'Successfully added address', 'success');
  } catch (error) {
    swal('Error', error.response.data.message, 'error');
    console.log(error);
  }
};
