/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect, useState, useRef } from 'react';
import {
  Container,
  Input,
  InputGroup,
  ColorPicker,
  InputCheck,
  InputImg,
  Button,
} from '../../../components/base/index';
import { ContentCard } from '../../../components/module/index';
import { getCategories } from '../../../configs/redux/actions/categoryAction';
import { useSelector, useDispatch } from 'react-redux';
import { getColors } from '../../../configs/redux/actions/colorAction';
import { updateProduct,getDetailProduct } from '../../../configs/redux/actions/productAction';
import { Editor } from '@tinymce/tinymce-react';
import Select from 'react-select';
import { useParams } from 'react-router-dom';
import swal from 'sweetalert';

const UpdateProducts = (props) => {
  const {
    color: { colors },
    category: { categories: dataCategories },
    product:{ detailProduct },
  } = useSelector((state) => state);
  const { id } = useParams();
  const dispatch = useDispatch();
  const tinyEditor = useRef(null);
  const initializationData = {
    name: '',
    brand: '',
    category_id: '',
    price: 1,
    colors: [],
    size: '',
    quantity: 1,
    product_status: '',
    description: '',
    img_product: [],
    old_img_product: [],
  };
  const [formData, setFromData] = useState(initializationData);
  const [errorFrom, setErrorForm] = useState({ ...initializationData, quantity: '', price: '' });
  const [categories, setCategories] = useState([]);
  const formDataHandler = (e) => {
    setFromData((oldValue) => {
      return { ...oldValue, [e.target.name]: e.target.value };
    });
  };
  useEffect(async () => {
    dispatch(getColors('', 'ASC', 'ADD_COLORS', '', '', 'off'));
    dispatch(getCategories('', 'DESC', 'CATEGORIES','','','off'));
    dispatch(getDetailProduct(id))
  }, []);
  useEffect(() => {
    if (dataCategories.data) {
      setCategories((oldValue) =>
        dataCategories.data.map((value) => {
          return {
            value: value.category_id,
            label: value.name,
          };
        })
      );
    }
    if (Object.keys(detailProduct).length > 0) {
      const { img_products } = detailProduct;
      delete detailProduct.img_products;
      setFromData((oldValue) => {
        return {
          ...oldValue,
          ...detailProduct,
          colors: detailProduct.colors.map((color) => color.color_id),
          old_img: img_products,
        };
      });
    }
  }, [dataCategories.data,detailProduct]);
  const colorsHandler = (e) => {
    const options = formData.colors;
    let index;
    if (e.target.checked) {
      options.push(+e.target.value);
    } else {
      index = options.indexOf(+e.target.value);
      options.splice(index, 1);
    }
    setFromData((oldValue) => {
      return { ...oldValue, [e.target.name]: options };
    });
  };
  const old_img_product = (e) => {
    const options = formData.old_img_product;
    let index;
    if (e.target.checked) {
      options.push(+e.target.value);
    } else {
      index = options.indexOf(+e.target.value);
      options.splice(index, 1);
    }
    setFromData((oldValue) => {
      return { ...oldValue, [e.target.name]: options };
    });
  };
  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      await dispatch(updateProduct(formData, id))
      swal('Success', 'Data updated successfully', 'success');
      return props.history.push('/seller/myproducts');
    } catch (error) {
      swal('Error', 'Failed to sell product', 'error');
      if (error.response.data.statusCode === 422) {
        document.querySelector('.main-panel').scrollTo(0, 0);
        setErrorForm({ ...initializationData, quantity: '', price: '' });
        setErrorForm((oldValue) => {
          const inputError = {};
          error.response.data.error.forEach((error) => {
            inputError[error.param] = error.msg;
          });
          return { ...oldValue, ...inputError };
        });
      }
    }
  };
  const options = [
    { value: 'XS', label: 'XS' },
    { value: 'S', label: 'S' },
    { value: 'M', label: 'M' },
    { value: 'L', label: 'L' },
    { value: 'XL', label: 'XL' },
  ];
  return (
    <Container>
      <form onSubmit={submitHandler} encType="multipart/form-data">
        <ContentCard
          styleCard="mb-4"
          cardHeader={<div className="text-black-20px fw-bold">Inventory</div>}
          cardBody={
            <Fragment>
              <div className="row">
                <div className="col-lg-6 col-md-8 col-sm-12 col-12 mb-3">
                  <Input
                    id="name"
                    label="Name of goods"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={formDataHandler}
                    styleInput={errorFrom.name ? 'is-invalid' : ''}
                  />
                  {errorFrom.name && <div className="invalid-feedback">{errorFrom.name}</div>}
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-8 col-sm-12 col-12 mb-3">
                  <Input
                    label="Brand"
                    type="text"
                    name="brand"
                    value={formData.brand}
                    onChange={formDataHandler}
                    styleInput={errorFrom.brand ? 'is-invalid' : ''}
                  />
                  {errorFrom.brand && <div className="invalid-feedback">{errorFrom.brand}</div>}
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-8 col-sm-12 col-12 mb-3">
                  <label htmlFor="category" className="form-label text-black-50">
                    Category Product
                  </label>
                  <Select
                    value={categories.filter((category) => category.value === formData.category_id)}
                    className={errorFrom.category_id ? 'border border-danger is-invalid' : ''}
                    id="category"
                    options={categories}
                    name="category_id"
                    onChange={(e) =>
                      setFromData((oldValue) => {
                        return { ...oldValue, category_id: e.value };
                      })
                    }
                  ></Select>
                  {errorFrom.category_id && <div className="invalid-feedback">{errorFrom.category_id}</div>}
                </div>
              </div>
            </Fragment>
          }
        ></ContentCard>
        <ContentCard
          styleCard="mb-4"
          cardHeader={<div className="text-black-20px fw-bold">Item details</div>}
          cardBody={
            <Fragment>
              <div className="row">
                <div className="col-lg-6 col-md-8 col-sm-12 col-12 mb-3">
                  <Input
                    styleInput={`input-number-noarrow ${errorFrom.price ? 'is-invalid' : ''}`}
                    label="Unit price"
                    type="number"
                    name="price"
                    value={parseInt(formData.price, 10)}
                    onChange={formDataHandler}
                    min="1"
                  />
                  {errorFrom.price && <div className="invalid-feedback">{errorFrom.price}</div>}
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-8 col-sm-12 col-12 mb-3">
                  <InputGroup
                    styleInput="input-number-noarrow border-end-0"
                    type="number"
                    label="Stock"
                    min="1"
                    name="quantity"
                    value={formData.quantity}
                    onChange={formDataHandler}
                    rightButton={true}
                    textButton="Buah"
                    typeButton="button"
                    styleButton={`border-grey border-start-0 bg-transparent text-black-50 text-black-14px ${
                      errorFrom.quantity ? 'is-invalid' : ''
                    }`}
                  />
                  {errorFrom.quantity && <div className="invalid-feedback">{errorFrom.quantity}</div>}
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-8 col-sm-12 col-12 mb-3">
                  <label htmlFor="color_product1">Color Product</label>
                  <div
                    className={`d-flex flex-nowrap overflow-x py-2 px-2 mt-2 ${errorFrom.colors ? 'is-invalid' : ''}`}
                  >
                    {colors.data &&
                      colors.data.map((color) => (
                        <ColorPicker
                          key={color.color_id}
                          type="checkbox"
                          className={color.color_name === 'white' ? 'shadow' : ''}
                          id={`color_product${color.color_id}`}
                          color={color.color_name}
                          name="colors"
                          onClick={colorsHandler}
                          value={color.color_id}
                          productColors={formData.colors}
                        />
                      ))}
                  </div>
                  {errorFrom.colors && !Array.isArray(errorFrom.colors) && (
                    <div className="invalid-feedback">{errorFrom.colors}</div>
                  )}
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-8 col-sm-12 col-12 mb-3">
                  <label htmlFor="category" className="form-label text-black-50">
                    Size Product
                  </label>
                  <Select
                    className={errorFrom.size ? 'border border-danger is-invalid' : ''}
                    id="size"
                    options={options}
                    value={options.filter((data) => data.value === formData.size)}
                    name="size"
                    onChange={(e) =>
                      setFromData((oldValue) => {
                        return { ...oldValue, size: e.value };
                      })
                    }
                  ></Select>
                  {errorFrom.size && <div className="invalid-feedback">{errorFrom.size}</div>}
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-8 col-sm-12 col-12">
                  <p className="text-black-50 lh-1">Stock</p>
                  <div className={`form-check-inline ${errorFrom.product_status ? 'is-invalid' : ''}`}>
                    <InputCheck
                      type="radio"
                      value="new"
                      name="product_status"
                      id="product_new"
                      onClick={formDataHandler}
                      defaultChecked={formData.product_status}
                      label="new"
                      styleLabel="me-4"
                      styleInput="me-2"
                    />
                    <InputCheck
                      type="radio"
                      value="former"
                      name="product_status"
                      id="product_former"
                      onClick={formDataHandler}
                      defaultChecked={formData.product_status}
                      label="former"
                      styleLabel="me-4"
                      styleInput="me-2"
                    />
                  </div>
                  {errorFrom.product_status && <div className="invalid-feedback">{errorFrom.product_status}</div>}
                </div>
              </div>
            </Fragment>
          }
        ></ContentCard>
        <ContentCard
          styleCard="mb-4"
          cardHeader={<div className="text-black-20px fw-bold">Photo of goods</div>}
          cardBody={
            <Fragment>
              <label className="form-label text-black-50">Old Img Product</label>
              <div className="d-flex flex-nowrap overflow-x border border-dashed rounded-3">
                {formData.old_img &&
                  formData.old_img.map((img, index) => (
                    <div key={index} className="d-flex align-items-center m-2">
                      <InputCheck
                        type="checkbox"
                        value={img.img_product_id}
                        name="old_img_product"
                        id={`old_img_product${img.img_product_id}`}
                        styleInput="me-2"
                        onClick={old_img_product}
                        label={
                          <img
                            className="img-fluid rounded-3 img-small-product-gallery"
                            src={`${process.env.REACT_APP_API_URL}/${img.img_product}`}
                            alt="old_img_product"
                          />
                        }
                      />
                    </div>
                  ))}
              </div>
              <label className="form-label text-black-50 mt-2">New Img Product</label>
              <InputImg onChange={setFromData} />
            </Fragment>
          }
        ></ContentCard>
        <ContentCard
          styleCard="mb-4"
          cardHeader={<div className="text-black-20px fw-bold">Description</div>}
          cardBody={
            <Fragment>
              <div className={errorFrom.description ? 'is-invalid' : ''}>
                <Editor
                  apiKey="ye3sivj2b6om6cs63viibjhwr9hkpy3j4wxc1zrjag2g2adv"
                  onInit={(evt, editor) => (tinyEditor.current = editor)}
                  initialValue={formData.description}
                  init={{
                    height: 400,
                    menubar: true,
                    plugins: [
                      'advlist autolink lists link image charmap print preview anchor',
                      'searchreplace visualblocks code fullscreen',
                      'insertdatetime media table paste code help wordcount',
                    ],
                    toolbar:
                      'undo redo | formatselect fontsizeselect forecolor| ' +
                      'bold italic backcolor | alignleft aligncenter ' +
                      'alignright alignjustify | bullist numlist outdent indent | ' +
                      'removeformat | help',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                  }}
                  onSaveContent={(e) =>
                    setFromData((oldValue) => {
                      return { ...oldValue, description: e.target.getContent() };
                    })
                  }
                ></Editor>
              </div>
              {errorFrom.description && <div className="invalid-feedback">{errorFrom.description}</div>}
            </Fragment>
          }
        ></ContentCard>
        <div className=" text-end mb-4">
          <Button type="submit" className="btn-sm btn-orange rounded-pill px-5">
            Jual
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default UpdateProducts;
