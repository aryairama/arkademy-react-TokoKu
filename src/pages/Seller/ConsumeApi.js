import { default as axios } from '../../configs/axiosConfig';

export const getProducts = async (search, order, fieldOrder, limit, page) => {
  try {
    const data = await axios.get(
      `/products?search=${search}&order=${order}&fieldOrder=${fieldOrder}&limit=${limit}&page=${page}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getCategories = async (pagination) => {
  try {
    const data = await axios.get('/categories/?pagination=off');
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const postProduct = async (formData) => {
  try {
    const product = new FormData();
    product.append('name', formData.name);
    product.append('brand', formData.brand);
    product.append('category_id', formData.category_id);
    product.append('price', formData.price);
    product.append('colors', formData.colors);
    product.append('size', formData.size);
    product.append('quantity', formData.quantity);
    product.append('product_status', formData.product_status);
    product.append('description', formData.description);
    product.append('imgProduct', formData.imgProduct);
    const data = await axios.post('/products', product);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateProduct = async (formData,id) => {
  try {
    const product = new FormData();
    product.append('name', formData.name);
    product.append('brand', formData.brand);
    product.append('category_id', formData.category_id);
    product.append('price', formData.price);
    product.append('colors', formData.colors);
    product.append('size', formData.size);
    product.append('quantity', formData.quantity);
    product.append('product_status', formData.product_status);
    product.append('description', formData.description);
    if (typeof formData.imgProduct !== 'undefined') {
      product.append('imgProduct', formData.imgProduct);
    }
    const data = await axios.put(`/products/${id}`, product);
    return data
  } catch (error) {
    console.log(error);
  }
}
