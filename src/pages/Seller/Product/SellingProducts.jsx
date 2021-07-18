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
import { getCategories, postProduct } from '../ConsumeApi';
import { Editor } from '@tinymce/tinymce-react';
import Select from 'react-select';

const SellingProducts = (props) => {
  const tinyEditor = useRef(null);
  const initializationData = {
    name: '',
    brand: '',
    category_id: '',
    price: 1,
    colors: '',
    size: '',
    quantity: 1,
    product_status: '',
    description: '',
    imgProduct: null,
  };
  const [formData, setFromData] = useState(initializationData);
  const [categories, setCategories] = useState([]);
  const formDataHandler = (e) => {
    setFromData((oldValue) => {
      return { ...oldValue, [e.target.name]: e.target.value };
    });
  };
  useEffect(async () => {
    const { data } = await (await getCategories('off')).data;
    setCategories((oldValue) =>
      data.map((value) => {
        return {
          value: value.category_id,
          label: value.name,
        };
      })
    );
  }, []);

  const submitHandler = async (e) => {
    try {
      e.preventDefault()
      postProduct(formData);
      setFromData(initializationData)
      return props.history.push('/seller/myproducts');
    } catch (error) {
      console.log(error);
    }
  }
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
                    label="Name of goods"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={formDataHandler}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-8 col-sm-12 col-12 mb-3">
                  <Input label="Brand" type="text" name="brand" value={formData.brand} onChange={formDataHandler} />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-8 col-sm-12 col-12 mb-3">
                  <label htmlFor="category" className="form-label text-black-50">
                    Category Product
                  </label>
                  <Select
                    id="category"
                    options={categories}
                    name="category_id"
                    onChange={(e) =>
                      setFromData((oldValue) => {
                        return { ...oldValue, category_id: e.value };
                      })
                    }
                  ></Select>
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
                    styleInput="input-number-noarrow"
                    label="Unit price"
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={formDataHandler}
                    min="1"
                  />
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
                    styleButton="border-grey border-start-0 bg-transparent text-black-50 text-black-14px"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-8 col-sm-12 col-12 mb-3">
                  <label htmlFor="color_product1">Color Product</label>
                  <div className="d-flex flex-wrap mt-2">
                    <ColorPicker
                      type="radio"
                      id="color_product1"
                      color="red"
                      name="colors"
                      onClick={formDataHandler}
                      value="red"
                      defaultChecked={formData.colors}
                    />
                    <ColorPicker
                      type="radio"
                      id="color_product2"
                      color="black"
                      name="colors"
                      value="black"
                      onClick={formDataHandler}
                      defaultChecked={formData.colors}
                    />
                    <ColorPicker
                      type="radio"
                      id="color_product3"
                      color="white"
                      name="colors"
                      className="shadow"
                      value="white"
                      onClick={formDataHandler}
                      defaultChecked={formData.colors}
                    />
                    <ColorPicker
                      type="radio"
                      id="color_product4"
                      color="blue"
                      name="colors"
                      value="blue"
                      onClick={formDataHandler}
                      defaultChecked={formData.colors}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-8 col-sm-12 col-12 mb-3">
                  <label htmlFor="category" className="form-label text-black-50">
                    Size Product
                  </label>
                  <Select
                    id="size"
                    options={[
                      { value: 'XS', label: 'XS' },
                      { value: 'S', label: 'S' },
                      { value: 'M', label: 'M' },
                      { value: 'L', label: 'L' },
                      { value: 'XL', label: 'XL' },
                    ]}
                    name="size"
                    onChange={(e) =>
                      setFromData((oldValue) => {
                        return { ...oldValue, size: e.value };
                      })
                    }
                  ></Select>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-8 col-sm-12 col-12">
                  <p className="text-black-50 lh-1">Stock</p>
                  <div className="form-check-inline">
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
                </div>
              </div>
            </Fragment>
          }
        ></ContentCard>
        <ContentCard
          styleCard="mb-4"
          cardHeader={<div className="text-black-20px fw-bold">Photo of goods</div>}
          cardBody={<InputImg onChange={setFromData} />}
        ></ContentCard>
        <ContentCard
          styleCard="mb-4"
          cardHeader={<div className="text-black-20px fw-bold">Description</div>}
          cardBody={
            <Editor
              apiKey="ye3sivj2b6om6cs63viibjhwr9hkpy3j4wxc1zrjag2g2adv"
              onInit={(evt, editor) => (tinyEditor.current = editor)}
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
              onChange={(e) =>
                setFromData((oldValue) => {
                  return { ...oldValue, description: e.target.getContent() };
                })
              }
            ></Editor>
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

export default SellingProducts;
