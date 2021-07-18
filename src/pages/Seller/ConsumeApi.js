import { default as axios } from '../../configs/axiosConfig';

export const getProducts = async (search, order, fieldOrder, limit,page) => {
  try {
    const data = await axios.get(
      `/products?search=${search}&order=${order}&fieldOrder=${fieldOrder}&limit=${limit}&page=${page}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
