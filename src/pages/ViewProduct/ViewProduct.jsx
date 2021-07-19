/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useParams } from 'react-router-dom';
import { Container, Breadcrumb, ProductCard, ProductCardLayout,FooterMenu } from '../../components/base/index';
import {
  Navbar,
  NavbarLeftMenu,
  NavbarRightMenu,
  Modal as MyModal,
  ProductGallery,
  ProductDetail,
  ProductDescription,
  Footer
} from '../../components/module/index';
import { Body as ModalBody, Header as ModalHeader, Footer as ModalFooter } from '../../components/ModalFilter/Index';
import { Modal } from 'bootstrap';
import logoTokoKu from '../../assets/img/icon/Vector.svg';
import ConsumeApi from './ConsumeApi';
import '../../assets/css/product.css';
import img from '../Home/img'

const ViewProduct = (props) => {
  let { id } = useParams();
  const refModalFilter = useRef(null);
  const [detailProduct, setDetailProduct] = useState({});
  const [productsById, setProductsById] = useState([]);
  const [modalFilter, setModalFilter] = useState(null);
  const modalShowHandler = () => modalFilter.show();
  const modalHideHandler = () => modalFilter.hide();
  useEffect(async () => {
    try {
      const { data: data1 } = await (await ConsumeApi.detailProduct(id)).data;
      const { data: data2 } = await (await ConsumeApi.getProductsById(data1[0].category_id)).data;
      setDetailProduct(data1[0]);
      setProductsById(data2);
      setModalFilter(new Modal(refModalFilter.current, { backdrop: 'static' }));
    } catch (error) {
      console.log(error);
    }
    window.scrollTo(0, 0);
  }, [id]);
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
            <ProductGallery img_product={detailProduct.img_product} />
          </div>
          <div className="col-md-8">
            <ProductDetail
              name={detailProduct.name}
              brand={detailProduct.brand}
              price={detailProduct.price}
              color={detailProduct.colors}
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
          {productsById.map((newProduct) => (
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
