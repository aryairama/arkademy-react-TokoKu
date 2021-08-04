import { default as axios } from '../../axiosConfig';
import { getDetailStore } from './storeAction';
import swal from 'sweetalert';

export const login = (formData, history) => async (dispatch) => {
  try {
    const { data } = await (await axios.post('/users/login', formData)).data;
    dispatch({ type: 'LOGIN', payload: data });
    swal('Success', 'Login successful', 'success');
    if (data.roles === 'seller') {
      history.push('/seller/profilestore');
    } else if (data.roles === 'custommer') {
      history.push('/custommer/profile');
    }
  } catch (error) {
    swal('Error', 'Login failed', 'error');
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
