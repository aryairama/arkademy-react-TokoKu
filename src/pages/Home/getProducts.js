import { default as axios } from '../../configs/axiosConfig';
const getProduct = async (order) => {
  try {
    const data = await axios.get(`/products?order=${order}`);
    return data
  } catch (error) {
    console.log(error)
  }
};

export default getProduct;
