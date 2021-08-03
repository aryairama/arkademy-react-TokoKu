import { default as axios } from '../../axiosConfig';
export const getStoreProducts =
  (dispatchType, search = '', order, fieldOrder, limit, page) =>
  async (dispatch, getState) => {
    try {
      const { data, pagination } = await (
        await axios.get(
          `/stores/product?search=${search}&order=${order}&fieldOrder=${fieldOrder}&limit=${limit}&page=${page}`,
          {
            headers: {
              Authorization: `Bearer ${getState().user.user.accessToken}`,
            },
          }
        )
      ).data;
      dispatch({ type: dispatchType, payload: { data, pagination } });
    } catch (error) {
      console.log(error);
    }
  };
