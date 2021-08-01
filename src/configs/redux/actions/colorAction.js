import { default as axios } from '../../axiosConfig';

export const getColors =
  (limit = '', order, dispatchType, page = 1, search = '', pagination = 'on', fieldOrder = '') =>
  async (dispatch) => {
    try {
      if (pagination === 'on') {
        const { data, pagination } = await (
          await axios.get(
            `/colors?search=${search}&order=${order}&fieldOrder=${fieldOrder}&limit=${limit}&page=${page}`
          )
        ).data;
        dispatch({ type: dispatchType, payload: { data, pagination } });
      } else if (pagination === 'off') {
        const { data } = await (await axios.get(`/colors?order=${order}&pagination=${pagination}`)).data;
        dispatch({ type: dispatchType, payload: { data, pagination : {} } });
      }
    } catch (error) {
      console.log(error);
    }
  };
