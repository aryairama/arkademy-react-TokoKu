/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Breadcrumb, ProductCard, ProductCardLayout, buttonItemRender } from '../../components/base/index';
import { ProductGallery, ProductDetail, ProductDescription } from '../../components/module/index';
import Pagination from 'rc-pagination';
import locale from 'rc-pagination/es/locale/en_US';
import { getDetailProduct, paginationProductsById } from '../../configs/redux/actions/productAction';
import { addCart } from '../../configs/redux/actions/cartAction';
import '../../assets/css/product.css';

const ViewProduct = (props) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const {
    product: { detailProduct, productsById },
    user: { user },
  } = useSelector((state) => state);
  const [page, setPage] = useState(1);
  const [product, setProduct] = useState({
    product_id: id,
    quantity: 1,
    color_id: 0,
    brand: '',
    img_product: '',
    color_name: '',
  });
  const handlerQuantity = (e) => {
    setProduct((oldValue) => {
      return { ...oldValue, quantity: e };
    });
  };
  const handlerChange = (e) => {
    const color = detailProduct.colors.find((color) => color.color_id === parseInt(e.target.value, 10));
    setProduct((oldValue) => {
      return { ...oldValue, [e.target.name]: e.target.value, color_name: color.color_name };
    });
  };
  useEffect(() => {
    dispatch(getDetailProduct(id));
    window.scrollTo(0, 0);
  }, [id]);
  useEffect(() => {
    if (Object.keys(detailProduct).length > 0) {
      if (detailProduct.quantity < 1) {
        props.history.push('/')
      }
      dispatch(paginationProductsById(detailProduct.category_id, page));
    }
  }, [page]);
  useEffect(() => {
    if (Object.keys(detailProduct).length > 0) {
      const { quantity, ...product } = detailProduct;
      setProduct((oldValue) => {
        return { ...oldValue, ...product };
      });
    }
  }, [detailProduct]);
  const disableBuyProduct = () => {
    if (Object.keys(user).length > 0 && user.roles === 'seller') {
      return detailProduct.store_id === user.store_id;
    }
  };
  return (
    <Fragment>
      <Container className="mt-10">
        <Breadcrumb
          url={['/', '/category', `/category/${detailProduct.category_id}`]}
          textUrl={['Home', 'Category', detailProduct.category_name]}
        />
      </Container>
      <Container className="mt-5">
        <div className="row">
          <div className="col-md-4">
            <ProductGallery img_products={detailProduct.img_products} />
          </div>
          <div className="col-md-8">
            <ProductDetail
              handlerChange={handlerChange}
              handlerQuantity={handlerQuantity}
              quantity={product.quantity}
              quantityProduct={detailProduct.quantity}
              name={detailProduct.name}
              brand={detailProduct.brand}
              price={detailProduct.price}
              colors={detailProduct.colors}
            />
            <div className="product-button-action d-flex  justify-content-end mt-lg-5 mt-4">
              {/* <button className="btn btn-sm btn-outline-orange rounded-pill w-25 py-md-2">Chat</button> */}
              <button
                onClick={() => dispatch(addCart(product, props.history))}
                disabled={disableBuyProduct()}
                className="btn btn-sm btn-outline-orange rounded-pill w-25 py-md-2 mx-3"
              >
                Add bag
              </button>
              <button disabled={disableBuyProduct()} className="btn btn-sm btn-orange rounded-pill w-40 py-md-2">
                Buy Now
              </button>
            </div>
          </div>
          <div className="col-md-12 mt-5">
            <ProductDescription description={detailProduct.description} />
          </div>
          <hr className="divider-filter" />
        </div>
      </Container>
      <Container className="mt-5">
        <div className="row">
          <div className="col-12">
            <p className="header-product">You can also like this</p>
            <p className="header-product-text mt-n4">You’ve never seen it before!</p>
          </div>
        </div>
        <ProductCardLayout>
          {productsById.data &&
            productsById.data.map((newProduct) => (
              <ProductCard
                urlProduct={`/product/${newProduct.product_id}`}
                key={newProduct.product_id}
                productTitle={newProduct.name}
                imgProduct={`${process.env.REACT_APP_API_URL}/${newProduct.img_product}`}
                productPrice={parseInt(newProduct.price)}
                productBrand={newProduct.brand}
              />
            ))}
        </ProductCardLayout>
        <div className="row">
          <div className="col-md-12">
            {productsById.pagination && (
              <Pagination
                current={page}
                total={productsById.pagination.countData}
                pageSize={productsById.pagination.limit ? productsById.pagination.limit : 1}
                itemRender={buttonItemRender}
                onChange={(current, pageSize) => setPage(current)}
                locale={locale}
              />
            )}
          </div>
        </div>
      </Container>
    </Fragment>
  );
};

export default ViewProduct;
