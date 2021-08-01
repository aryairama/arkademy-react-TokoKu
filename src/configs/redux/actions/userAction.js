import { default as axios } from '../../axiosConfig';
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
