import { default as axios } from '../../configs/axiosConfig';

const detailProduct = async (id) => {
  try {
    const data = await axios.get(`/products/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getProductsById = async (id) => {
  try {
    const data = await axios.get(`/products/category/${id}`);
    return data
  } catch (error) {
    console.log(error);
  }
}

const ConsumeApi = {
  detailProduct,
  getProductsById
};

export default ConsumeApi;
