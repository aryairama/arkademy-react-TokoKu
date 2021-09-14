import { default as axios } from '../../axiosConfig';
import swal from 'sweetalert';

export const createOrder = (data, total, history) => async (dispatch, getState) => {
  const { payment } = getState().order;
  const orders = { order: data, total, payment };
  try {
    await axios.post('/orders', orders, {
      headers: {
        Authorization: `Bearer ${getState().user.user.accessToken}`,
      },
    });
    dispatch({ type: 'ADD_CART', payload: [] });
    dispatch({ type: 'TOTAL', payload: 0 });
    dispatch({ type: 'SET_PAYMENT', payload: '' });
    dispatch({ type: 'BTN_BUY', payload: false });
    swal('Success', 'Order successfully made', 'success');
    history.push('/');
  } catch (error) {
    console.log(error);
    swal('Error', error.response.data.message, 'error');
  }
  dispatch({ type: 'REQUEST' });
};

export const getOrderAll =
  (status, search = '', order, fieldOrder, limit, page) =>
  async (dispatch, getState) => {
    try {
      const data = await (
        await axios.get(
          `/orders?search=${search}&order=${order}&fieldOrder=${fieldOrder}&limit=${limit}&page=${page}&status=${status}`,
          {
            headers: {
              Authorization: `Bearer ${getState().user.user.accessToken}`,
            },
          }
        )
      ).data;
      return data;
    } catch (error) {
      console.log(error);
    }
  };
