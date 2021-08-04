import swal from 'sweetalert';
import { getDetailProduct } from './productAction';

export const addCart = (dataProduct, history) => async (dispatch, getState) => {
  let foundProduct = false;
  if (Object.keys(getState().user.user).length < 1) {
    return history.push('/auth/login');
  }
  if (dataProduct.color_id === 0) {
    return swal('Error', 'Product color has not been selected', 'error');
  }
  await dispatch(getDetailProduct(dataProduct.product_id));
  let {
    cart: { carts: updateCarts },
    product: { detailProduct },
  } = getState();
  let totalAllProduct = 0;
  let totalPrice = 0;
  updateCarts.forEach((cart) => {
    if (cart.product_id === dataProduct.product_id) {
      totalAllProduct += cart.quantity;
    }
  });
  if (totalAllProduct + dataProduct.quantity > detailProduct.quantity) {
    return swal('Error', 'the number of goods exceeds the existing goods', 'error');
  } else {
    updateCarts.forEach((cart) => {
      if (cart.product_id === dataProduct.product_id && cart.color_id === dataProduct.color_id) {
        cart.quantity += dataProduct.quantity;
        cart.prices += dataProduct.quantity * parseInt(detailProduct.price, 10);
        foundProduct = true;
      } else {
        foundProduct = false;
      }
    });
  }
  if (foundProduct === false) {
    dataProduct.prices = dataProduct.quantity * parseInt(detailProduct.price, 10);
    updateCarts.push(dataProduct);
  }
  dispatch({ type: 'ADD_CART', payload: updateCarts });
  updateCarts.forEach((updateCart) => {
    totalPrice += updateCart.prices;
  });
  dispatch({ type: 'TOTAL', payload: totalPrice });
};
