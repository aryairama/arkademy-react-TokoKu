import { default as axios } from '../../axiosConfig';

export const getCategories =
  (limit = '', order, dispatchType, page = 1, search = '', pagination = 'on', fieldOrder = '') =>
  async (dispatch) => {
    try {
      if (pagination === 'on') {
        const { data, pagination } = await (
          await axios.get(
            `/categories?search=${search}&order=${order}&fieldOrder=${fieldOrder}&limit=${limit}&page=${page}`
          )
        ).data;
        dispatch({ type: dispatchType, payload: { data, pagination } });
      } else if (pagination === 'off') {
        const { data } = await (await axios.get(`/categories/?order=${order}&pagination=${pagination}`)).data;
        dispatch({ type: dispatchType, payload: { data, pagination: {} } });
      }
    } catch (error) {
      console.log(error);
    }
  };

export const getDetailCategory = (id) => async (dispatch) => {
  try {
    const { data } = await (await axios.get(`categories/${id}`)).data;
    dispatch({ type: 'DETAIL_CATEGORY', payload: data });
  } catch (error) {
    console.log(error);
  }
};
