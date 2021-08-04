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
  swal('Success', 'successful add to cart','success');
};

export const incQuantity = (product_id, color_id) => async (dispatch, getState) => {
  await dispatch(getDetailProduct(product_id));
  const {
    cart: { carts: updateCarts },
    product: { detailProduct },
  } = getState();
  let oldProductQuantity = 0;
  let totalPrice = 0;
  updateCarts.forEach((updateCart) => {
    if (updateCart.product_id === product_id) {
      oldProductQuantity += updateCart.quantity;
    }
  });
  if (oldProductQuantity + 1 <= detailProduct.quantity) {
    updateCarts.forEach((updateCart) => {
      if (updateCart.product_id === product_id && updateCart.color_id === color_id) {
        if (updateCart.quantity + 1 > detailProduct.quantity) {
          return false;
        } else if (updateCart.quantity + 1 <= detailProduct.quantity) {
          updateCart.quantity += 1;
          updateCart.prices += parseInt(detailProduct.price, 10);
        }
      }
    });
  }
  dispatch({ type: 'ADD_CART', payload: updateCarts });
  updateCarts.forEach((updateCart) => {
    totalPrice += updateCart.prices;
  });
  dispatch({ type: 'TOTAL', payload: totalPrice });
};

export const decQuantity = (product_id, color_id) => async (dispatch, getState) => {
  await dispatch(getDetailProduct(product_id));
  const {
    cart: { carts: updateCarts },
    product: { detailProduct },
  } = getState();
  let totalPrice = 0;
  updateCarts.forEach((updateCart) => {
    if (updateCart.product_id === product_id && updateCart.color_id === color_id) {
      if (updateCart.quantity === 1) {
        return false;
      } else if (updateCart.quantity > 1) {
        updateCart.quantity -= 1;
        updateCart.prices -= parseInt(detailProduct.price, 10);
      }
    }
  });
  dispatch({ type: 'ADD_CART', payload: updateCarts });
  updateCarts.forEach((updateCart) => {
    totalPrice += updateCart.prices;
  });
  dispatch({ type: 'TOTAL', payload: totalPrice });
};

export const deleteCart = (carts, allDelete) => async (dispatch, getState) => {
  if (allDelete === true) {
    dispatch({ type: 'ADD_CART', payload: [] });
    dispatch({ type: 'TOTAL', payload: 0 });
  } else if (allDelete === false) {
    let totalPrice = 0;
    const deleteCarts = getState().cart.carts.filter((cart) => {
      return carts.some((keyCart) => {
        return !(keyCart.product_id === cart.product_id && keyCart.color_id === cart.color_id);
      });
    });
    dispatch({ type: 'ADD_CART', payload: deleteCarts });
    getState().cart.carts.forEach((updateCart) => {
      totalPrice += updateCart.prices;
    });
    dispatch({ type: 'TOTAL', payload: totalPrice });
  }
};
