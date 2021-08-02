/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Breadcrumb, ProductCard, ProductCardLayout, buttonItemRender } from '../../components/base/index';
import { ProductGallery, ProductDetail, ProductDescription } from '../../components/module/index';
import Pagination from 'rc-pagination';
import locale from 'rc-pagination/es/locale/en_US';
import { getDetailProduct, paginationProductsById } from '../../configs/redux/actions/productAction';
import '../../assets/css/product.css';

const ViewProduct = (props) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { detailProduct, productsById } = useSelector((state) => state.product);
  const [page, setPage] = useState(1);
  useEffect(() => {
    dispatch(getDetailProduct(id));
    window.scrollTo(0, 0);
  }, [id]);
  useEffect(() => {
    if (Object.keys(detailProduct).length > 0) {
      dispatch(paginationProductsById(detailProduct.category_id, page));
    }
  }, [page]);
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
              name={detailProduct.name}
              brand={detailProduct.brand}
              price={detailProduct.price}
              colors={detailProduct.colors}
            />
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
