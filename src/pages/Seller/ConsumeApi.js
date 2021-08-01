import { default as axios } from '../../configs/axiosConfig';
import swal from 'sweetalert';

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
    const product = new FormData();
    product.append('name', formData.name);
    product.append('brand', formData.brand);
    product.append('category_id', formData.category_id);
    product.append('price', formData.price);
    for (let i = 0; i < formData.colors.length; i++){
      product.append('colors', formData.colors[i]);
    }
    product.append('size', formData.size);
    product.append('quantity', formData.quantity);
    product.append('product_status', formData.product_status);
    product.append('description', formData.description);
    for (let i = 0; i < formData.img_product.length; i++){
      product.append('img_product', formData.img_product[i]);
    }
    const data = await axios.post('/products', product, {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJuYW1lIjoiYXJ5YWlyYW1hIiwicm9sZXMiOiJzZWxsZXIiLCJhdmF0YXIiOiJwdWJsaWMvaW1nL2F2YXRhcnMvOGNiMWE3NzQtOTNhNC00N2MzLTk2NzQtMzFhNDMzMTg5MzRlLnBuZyIsImdlbmRlciI6Im1hbGUiLCJkYXRlX29mX2JpcnRoIjoiMjAyMS0wNy0xNFQxNzowMDowMC4wMDBaIiwic3RhdHVzIjoiYWN0aXZlIiwidmVyaWZfZW1haWwiOjEsImlhdCI6MTYyNzc0Mjc4NiwiZXhwIjoxNjI3NzQ2Mzg2fQ.WdPG4bVt9BhZV_1WH0owmzgireMMvK1SXahqw-i3VLI`,
        'Content-Type': 'multipart/form-data',
      },
    });
    return data;
};

export const updateProduct = async (formData, id, history) => {
  try {
    const product = new FormData();
    product.append('name', formData.name);
    product.append('brand', formData.brand);
    product.append('category_id', formData.category_id);
    product.append('price', formData.price);
    for (let i = 0; i < formData.colors.length; i++) {
      product.append('colors', formData.colors[i]);
    }
    for (let i = 0; i < formData.old_img_product.length; i++) {
      product.append('old_img_product', formData.old_img_product[i]);
    }
    product.append('size', formData.size);
    product.append('quantity', formData.quantity);
    product.append('product_status', formData.product_status);
    product.append('description', formData.description);
    if (typeof formData.img_product !== 'undefined') {
      for (let i = 0; i < formData.img_product.length; i++) {
        product.append('img_product', formData.img_product[i]);
      }
    }
    await axios.put(`/products/${id}`, product, {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJuYW1lIjoiYXJ5YWlyYW1hIiwicm9sZXMiOiJzZWxsZXIiLCJhdmF0YXIiOiJwdWJsaWMvaW1nL2F2YXRhcnMvOGNiMWE3NzQtOTNhNC00N2MzLTk2NzQtMzFhNDMzMTg5MzRlLnBuZyIsImdlbmRlciI6Im1hbGUiLCJkYXRlX29mX2JpcnRoIjoiMjAyMS0wNy0xNFQxNzowMDowMC4wMDBaIiwic3RhdHVzIjoiYWN0aXZlIiwidmVyaWZfZW1haWwiOjEsImlhdCI6MTYyNzgxODQxOCwiZXhwIjoxNjI3ODIyMDE4fQ.YwKpKt1eiy1dzYUCnjoDGAP5Oad-wuu316zmoRMG5mE`,
        'Content-Type': 'multipart/form-data',
      },
    });
    swal('Success', 'Data updated successfully', 'success');
    return history.push('/seller/myproducts');
  } catch (error) {
    swal('Error', 'Data failed to update', 'error');
    console.log(error);
  }
};

export const deleteProduct = async (id) => {
  try {
    const deleteData = await axios.delete(`/products/${id}`);
    return deleteData;
  } catch (error) {
    console.log(error);
  }
};
