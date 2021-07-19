import { default as axios } from '../../configs/axiosConfig';
const getProducts = async (order) => {
  try {
    const data = await axios.get(`/products?order=${order}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getCategories = async () => {
  try {
    const data = await axios.get('/categories/?limit=20');
    return data;
  } catch (error) {
    console.log(error);
  }
};

const searchProducts = async (keyword, limit) => {
  try {
    const data = await axios.get(`/products?search=${keyword}&limit=${limit}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
const ConsumeApi = { getProducts, getCategories, searchProducts };

export default ConsumeApi;
