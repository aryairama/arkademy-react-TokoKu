import { default as axios } from '../../axiosConfig';

export const getCategories = () => async (dispatch) => {
  try {
    const { data } = await (await axios.get('/categories/?limit=20')).data;
    dispatch({ type: 'CATEGORIES', payload: data });
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
