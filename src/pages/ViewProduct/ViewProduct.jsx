/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  Container,
  Breadcrumb,
  ProductCard,
  ProductCardLayout,
  FooterMenu,
  buttonItemRender,
} from '../../components/base/index';
import {
  Navbar,
  NavbarLeftMenu,
  NavbarRightMenu,
  Modal as MyModal,
  ProductGallery,
  ProductDetail,
  ProductDescription,
  Footer,
} from '../../components/module/index';
import Pagination from 'rc-pagination';
import locale from 'rc-pagination/es/locale/en_US';
import { Body as ModalBody, Header as ModalHeader, Footer as ModalFooter } from '../../components/ModalFilter/Index';
import { Modal } from 'bootstrap';
import logoTokoKu from '../../assets/img/icon/Vector.svg';
import { getDetailProduct, paginationProductsById } from '../../configs/redux/actions/productAction';
import '../../assets/css/product.css';
import img from '../Home/img';

const ViewProduct = (props) => {
  const dispatch = useDispatch();
  const refModalFilter = useRef(null);
  const { id } = useParams();
  const { detailProduct, productsById } = useSelector((state) => state.product);
  const [page, setPage] = useState(1);
  const [modalFilter, setModalFilter] = useState(null);
  const modalShowHandler = () => modalFilter.show();
  const modalHideHandler = () => modalFilter.hide();
  useEffect(() => {
    dispatch(getDetailProduct(id));
    setModalFilter(new Modal(refModalFilter.current, { backdrop: 'static' }));
    window.scrollTo(0, 0);
  }, [id]);
  useEffect(() => {
    if (Object.keys(detailProduct).length > 0) {
      dispatch(paginationProductsById(page));
    }
  }, [page]);
  return (
    <Fragment>
      <Navbar
        expand="md"
        urlLogo="/"
        urlLogoImg={logoTokoKu}
        textLogo="TokoKu"
        leftMenu={<NavbarLeftMenu onClickFilter={modalShowHandler} />}
        rigthMenu={<NavbarRightMenu />}
      ></Navbar>
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
      <Footer
        detailBrand={
          <Fragment>
            <p>About TokoKu</p>
            <p className="text-black-14px">
              Situs jual beli online terlengkap dengan berbagai pilihan. Belanja online mudah dan menyenangkan di
              TokoKu. Pengiriman cepat.
            </p>
          </Fragment>
        }
        nameMenu1="Menu"
        menu1={
          <Fragment>
            <FooterMenu linkMenu="/" img={img.Home} textMenu="Home" />
            <FooterMenu linkMenu="/" img={img.Cart} textMenu="My Bag" />
            <FooterMenu linkMenu="/auth/login" img={img.Auth} textMenu="Login" />
            <FooterMenu linkMenu="/auth/register" img={img.Auth} textMenu="Register" />
          </Fragment>
        }
        nameMenu2="Social media"
        menu2={
          <Fragment>
            <FooterMenu linkMenu="/" img={img.Facebook} textMenu="Facebook" />
            <FooterMenu linkMenu="/" img={img.Twitter} textMenu="Twitter" />
            <FooterMenu linkMenu="/" img={img.Instagram} textMenu="Instagram" />
          </Fragment>
        }
      />
      {createPortal(
        <MyModal
          id="filterProducts"
          forwadedRef={refModalFilter}
          styleHeader="justify-content-start"
          styleFooter="justify-content-around m-0"
          header={<ModalHeader onClickFilter={modalHideHandler} />}
          body={<ModalBody />}
          footer={<ModalFooter onClickCloseFilter={modalHideHandler} />}
        />,
        document.getElementById('modal-root')
      )}
    </Fragment>
  );
};

export default ViewProduct;
