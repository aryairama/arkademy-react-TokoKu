import { default as axios } from '../../configs/axiosConfig';
export const detailCategory = async (id) => {
  try {
    const data = await axios.get(`categories/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
