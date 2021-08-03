import { default as axios } from '../../axiosConfig';
export const getProducts =
  (limit, order, dispatchType, page = 1, search = '', fieldOrder = '') =>
  async (dispatch) => {
    try {
      const { data, pagination } = await (
        await axios.get(
          `/products?order=${order}&limit=${limit}&page=${page}&search=${search}&fieldOrder=${fieldOrder}`
        )
      ).data;
      dispatch({ type: dispatchType, payload: { data, pagination } });
    } catch (error) {
      console.log(error);
    }
  };

export const getDetailProduct = (id) => async (dispatch) => {
  try {
    const { data } = await (await axios.get(`/products/${id}`)).data;
    const { data: productsById, pagination } = await (await getProductsById(data.category_id)).data;
    dispatch({ type: 'DETAIL_PRODUCT', payload: data });
    dispatch({ type: 'PRODUCT_BY_ID', payload: { data: productsById, pagination } });
  } catch (error) {
    console.log(error);
  }
};

export const paginationProductsById = (id, page) => async (dispatch, getState) => {
  try {
    const { data, pagination } = await (await getProductsById(id, page)).data;
    dispatch({ type: 'PRODUCT_BY_ID', payload: { data, pagination } });
  } catch (error) {
    console.log(error);
  }
};

export const postProduct = (formData) => async (dispatch, getState) => {
  const product = new FormData();
  product.append('name', formData.name);
  product.append('brand', formData.brand);
  product.append('category_id', formData.category_id);
  product.append('price', formData.price);
  for (let i = 0; i < formData.colors.length; i++) {
    product.append('colors', formData.colors[i]);
  }
  product.append('size', formData.size);
  product.append('quantity', formData.quantity);
  product.append('product_status', formData.product_status);
  product.append('description', formData.description);
  for (let i = 0; i < formData.img_product.length; i++) {
    product.append('img_product', formData.img_product[i]);
  }
  const data = await axios.post('/products', product, {
    headers: {
      Authorization: `Bearer ${getState().user.user.accessToken}`,
      'Content-Type': 'multipart/form-data',
    },
  });
  dispatch({ type: 'REQUEST' });
  return data;
};

export const updateProduct = (formData, id) => async (dispatch, getState) => {
  const product = new FormData();
  product.append('name', formData.name);
  product.append('brand', formData.brand);
  product.append('category_id', formData.category_id);
  product.append('price', formData.price);
  for (let i = 0; i < formData.colors.length; i++) {
    product.append('colors', formData.colors[i]);
  }
  for (let i = 0; i < formData.old_img_product.length; i++) {
    product.append('old_img_product', formData.old_img_product[i]);
  }
  product.append('size', formData.size);
  product.append('quantity', formData.quantity);
  product.append('product_status', formData.product_status);
  product.append('description', formData.description);
  if (typeof formData.img_product !== 'undefined') {
    for (let i = 0; i < formData.img_product.length; i++) {
      product.append('img_product', formData.img_product[i]);
    }
  }
  const data = await axios.put(`/products/${id}`, product, {
    headers: {
      Authorization: `Bearer ${getState().user.user.accessToken}`,
      'Content-Type': 'multipart/form-data',
    },
  });
  dispatch({ type: 'REQUEST' });
  return data;
};

export const deleteProduct = (id) => async (dispatch, getState) => {
  try {
    const deleteData = await axios.delete(`/products/${id}`, {
      headers: {
        Authorization: `Bearer ${getState().user.user.accessToken}`,
      },
    });
    dispatch({ type: 'REQUEST' });
    return deleteData;
  } catch (error) {
    console.log(error);
  }
};

const getProductsById = async (id, page = 1) => {
  try {
    const data = await axios.get(`/products/category/${id}?page=${page}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
