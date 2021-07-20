/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useState, useRef, useEffect } from 'react';
import { Modal } from 'bootstrap';
import { createPortal } from 'react-dom';
import { useParams } from 'react-router-dom';
import {
  Footer,
  Modal as MyModal,
  NavbarLeftMenu,
  Navbar,
  NavbarAuthRight,
} from '../../components/module/index';
import { ProductCardLayout, ProductCard, Container, FooterMenu, Breadcrumb } from '../../components/base/index';
import ModalHeader from '../../components/ModalFilter/Header';
import ModalBody from '../../components/ModalFilter/Body';
import ModalFooter from '../../components/ModalFilter/Footer';
import logoTokoKu from '../../assets/img/icon/Vector.svg';
import ConsumeApi from '../ViewProduct/ConsumeApi';
import { detailCategory } from './ConsumeApi';
import img from '../Home/img';
const ProductsByCategory = (props) => {
  const { id } = useParams();
  const refModalFilter = useRef(null);
  const [modalFilter, setModalFilter] = useState(null);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState({});
  const modalShowHandler = () => modalFilter.show();
  const modalHideHandler = () => modalFilter.hide();
  useEffect(async () => {
    try {
      setModalFilter(new Modal(refModalFilter.current, { backdrop: 'static' }));
      const { data: data1 } = await (await ConsumeApi.getProductsById(id)).data;
      const { data: data2 } = await (await detailCategory(id)).data;
      setProducts(data1);
      setCategory(data2[0]);
    } catch (error) {
      console.log(error);
    }
    window.scrollTo(0, 0);
  }, [id]);
  console.log();
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
          url={['/', '/category', `/category/${category.category_id}`]}
          textUrl={['Home', 'Category', category.name]}
        />
      </Container>
      <Container className={`mt-3 ${products.length === 0 ? 'h-min-60vh' : ''}`}>
        <div className="row">
          <div className="col-12">
            <p className="header-product">{category.name}</p>
          </div>
          {products.length === 0 && (
            <div className="d-flex flex-column align-items-center">
              <img className="mt-10" src={img.IconNotFound} alt="" />
              <p className="text-black-16px text-black-50 pt-5">Related products do not exist</p>
            </div>
          )}
          <ProductCardLayout>
            {products.map((newProduct) => (
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
