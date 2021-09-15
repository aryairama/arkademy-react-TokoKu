/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ProductCardLayout, ProductCard, Container, Breadcrumb, buttonItemRender } from '../../components/base/index';
import Pagination from 'rc-pagination';
import locale from 'rc-pagination/es/locale/en_US';
import { paginationProductsById } from '../../configs/redux/actions/productAction';
import { getDetailCategory } from '../../configs/redux/actions/categoryAction';
import img from '../Home/img';

const ProductsByCategory = (props) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const {
    product: { productsById },
    category: { detailCategory },
  } = useSelector((state) => state);
  const [page, setPage] = useState(1);
  useEffect(() => {
    dispatch(paginationProductsById(id, page));
    dispatch(getDetailCategory(id));
    window.scrollTo(0, 0);
  }, [id, page]);
  return (
    <Fragment>
      <Container className="mt-10 ps-4">
        <Breadcrumb
          url={['/', '/', `/category/${detailCategory.category_id}`]}
          textUrl={['Home', 'Category', detailCategory.name]}
        />
      </Container>
      <Container className={`mt-3 ${productsById.data && productsById.data.length === 0 ? 'h-min-60vh' : ''}`}>
        <div className="row">
          <div className="col-12">
            <p className="header-product">{detailCategory.name}</p>
          </div>
        </div>
        {productsById.data && productsById.data.length === 0 && (
          <div className="d-flex flex-column align-items-center">
            <img className="mt-10" src={img.IconNotFound} alt="" />
            <p className="text-black-16px text-black-50 pt-5">Related products do not exist</p>
          </div>
        )}
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

export default ProductsByCategory;
