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

export const getDetailStore = () => async (dispatch, getState) => {
  try {
    const { data } = await (
      await axios.get('/stores/detail', {
        headers: {
          Authorization: `Bearer ${getState().user.user.accessToken}`,
        },
      })
    ).data;
    dispatch({ type: 'DETAIL_STORE', payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateProfileStore = (dataProfileStore) => async (dispatch, getState) => {
  const newProfileStore = new FormData();
  newProfileStore.append('store_name', dataProfileStore.store_name);
  newProfileStore.append('phone_number', dataProfileStore.phone_number);
  newProfileStore.append('store_description', dataProfileStore.store_description);
  newProfileStore.append('avatar', dataProfileStore.avatar);
  newProfileStore.append('email', dataProfileStore.email);
  const data = axios.post('/stores/update', newProfileStore, {
    headers: {
      Authorization: `Bearer ${getState().user.user.accessToken}`,
    },
  });
  dispatch({ type: 'REQUEST' });
  return data;
};
