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

export const paginationProductsById = (id,page) => async (dispatch, getState) => {
  try {
    const { data, pagination } = await (await getProductsById(id, page)).data;
    dispatch({ type: 'PRODUCT_BY_ID', payload: { data, pagination } });
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
