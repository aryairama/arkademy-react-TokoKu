/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useState, useRef, useEffect } from 'react';
import { Modal } from 'bootstrap';
import { createPortal } from 'react-dom';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Footer, Modal as MyModal, NavbarLeftMenu, Navbar, NavbarAuthRight } from '../../components/module/index';
import {
  ProductCardLayout,
  ProductCard,
  Container,
  FooterMenu,
  Breadcrumb,
  buttonItemRender,
} from '../../components/base/index';
import Pagination from 'rc-pagination';
import locale from 'rc-pagination/es/locale/en_US';
import ModalHeader from '../../components/ModalFilter/Header';
import ModalBody from '../../components/ModalFilter/Body';
import ModalFooter from '../../components/ModalFilter/Footer';
import { paginationProductsById } from '../../configs/redux/actions/productAction';
import { getDetailCategory } from '../../configs/redux/actions/categoryAction';
import logoTokoKu from '../../assets/img/icon/Vector.svg';
import img from '../Home/img';

const ProductsByCategory = (props) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const {
    product: { productsById },
    category: { detailCategory },
  } = useSelector((state) => state);
  const refModalFilter = useRef(null);
  const [modalFilter, setModalFilter] = useState(null);
  const [page, setPage] = useState(1);
  const modalShowHandler = () => modalFilter.show();
  const modalHideHandler = () => modalFilter.hide();
  useEffect(() => {
    setModalFilter(new Modal(refModalFilter.current, { backdrop: 'static' }));
    dispatch(paginationProductsById(id, page));
    dispatch(getDetailCategory(id));
    window.scrollTo(0, 0);
  }, [id, page]);
  return (
    <Fragment>
      <Navbar
        expand="md"
        urlLogo="/"
        urlLogoImg={logoTokoKu}
        textLogo="TokoKu"
        leftMenu={<NavbarLeftMenu onClickFilter={modalShowHandler} />}
        rigthMenu={<NavbarAuthRight />}
      ></Navbar>
      <Container className="mt-10 ps-4">
        <Breadcrumb
          url={['/', '/category', `/category/${detailCategory.category_id}`]}
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

export default ProductsByCategory;
