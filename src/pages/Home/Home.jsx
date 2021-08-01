/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect, useRef, useState } from 'react';
import { Modal } from 'bootstrap';
import { createPortal } from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import logoTokoKu from '../../assets/img/icon/Vector.svg';
import {
  Footer,
  ContentCard,
  Modal as MyModal,
  Carousel,
  NavbarLeftMenu,
  NavbarRightMenu,
  Navbar,
} from '../../components/module/index';
import Pagination from 'rc-pagination';
import locale from 'rc-pagination/es/locale/en_US';
import { ProductCardLayout, ProductCard, CategoryCard, Container, FooterMenu, buttonItemRender} from '../../components/base/index';
import { configTrendCarousel, configCetgoryCarousel } from '../../configs/Carousel';
import { Header as ModalHeader, Body as ModalBody, Footer as ModalFooter } from '../../components/ModalFilter/Index';
import { getProducts, getCategories } from '../../configs/redux/actions/productAction';
import ConsumeApi from './ConsumeApi';
import img from './img';
import qs from 'query-string';

const Home = (props) => {
  const dispatch = useDispatch();
  const { newProducts, popularProducts, categories } = useSelector((state) => state.product);
  const [search, setSearch] = useState([]);
  const url = qs.parse(props.location.search);
  const refModalFilter = useRef(null);
  const [modalFilter, setModalFilter] = useState(null);
  const [page,setPage] = useState(1)
  const modalShowHandler = () => modalFilter.show();
  const modalHideHandler = () => modalFilter.hide();
  const searchProducts = async () => {
    if (url) {
      try {
        const { data: data4 } = await (await ConsumeApi.searchProducts(url.search, 30)).data;
        setSearch(data4);
      } catch (error) {
        console.log(error);
      }
    }
  };
  useEffect(async () => {
    try {
      dispatch(getProducts(5, 'ASC', 'NEW_PRODUCTS'));
      dispatch(getProducts(10, 'DESC', 'POPULAR_PRODUCTS'));
      dispatch(getCategories());
      searchProducts();
      setModalFilter(new Modal(refModalFilter.current, { backdrop: 'static' }));
    } catch (error) {
      console.log(error);
    }
  }, [url.search]);
  useEffect(async () => {
    dispatch(getProducts(10, 'DESC', 'POPULAR_PRODUCTS',page));
  },[page])

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
      <Container className={`mt-10 ${url.search || search.length > 0 ? 'd-block' : 'd-none'}`}>
        <div className="row">
          <div className="col-12">
            <p className={`header-product ${search.length > 0 ? 'd-block' : 'd-none'}`}>Result</p>
            <ContentCard />
            <ContentCard
              styleCard={`mb-n5 ${search.length > 0 ? 'd-none' : 'd-block'}`}
              cardBody={
                <Fragment>
                  <p className="header-product">Result</p>
                  <hr />
                  <p className="text-black-16px">Product not found</p>
                </Fragment>
              }
            />
          </div>
        </div>
        <ProductCardLayout>
          {search.map((product) => (
            <ProductCard
              urlProduct={`/product/${product.product_id}`}
              key={product.product_id}
              productTitle={product.name}
              imgProduct={`${process.env.REACT_APP_API_URL}/${product.img_product}`}
              productPrice={parseInt(product.price)}
              productBrand={product.brand}
            />
          ))}
        </ProductCardLayout>
      </Container>
      <Container className={`mt-10 ${search.length > 0 ? 'd-none' : 'd-block'}`}>
        <Carousel settings={configTrendCarousel}>
          <div className="card">
            <img className="card-img" src={img.trendImg1} alt="style-trend" />
            <div className="card-img-overlay d-flex align-items-center justify-content-center">
              <p className="carousel-trend-text">Trends in 2020</p>
            </div>
          </div>
          <div className="card">
            <img className="card-img" src={img.trendImg2} alt="style-trend" />
            <div className="card-img-overlay d-flex align-items-center justify-content-center">
              <p className="carousel-trend-text">Trends in 2020</p>
            </div>
          </div>
          <div className="card">
            <img className="card-img" src={img.trendImg1} alt="style-trend" />
            <div className="card-img-overlay d-flex align-items-center justify-content-center">
              <p className="carousel-trend-text">Trends in 2020</p>
            </div>
          </div>
          <div className="card">
            <img className="card-img" src={img.trendImg2} alt="style-trend" />
            <div className="card-img-overlay d-flex align-items-center justify-content-center">
              <p className="carousel-trend-text">Trends in 2020</p>
            </div>
          </div>
          <div className="card">
            <img className="card-img" src={img.trendImg1} alt="style-trend" />
            <div className="card-img-overlay d-flex align-items-center justify-content-center">
              <p className="carousel-trend-text">Trends in 2020</p>
            </div>
          </div>
          <div className="card">
            <img className="card-img" src={img.trendImg2} alt="style-trend" />
            <div className="card-img-overlay d-flex align-items-center justify-content-center">
              <p className="carousel-trend-text">Trends in 2020</p>
            </div>
          </div>
        </Carousel>
      </Container>
      <Container className={`mt-5 ${search.length > 0 ? 'd-none' : 'd-block'}`}>
        <div className="row">
          <div className="col-12">
            <p className="header-product">Category</p>
            <p className="header-product-text mt-n4">What are you currently looking for</p>
          </div>
        </div>
        <Carousel settings={configCetgoryCarousel}>
          {categories.map((category) => (
            <CategoryCard
              key={category.category_id}
              name={category.name}
              category_id={category.category_id}
              img_category={category.img_category}
            />
          ))}
        </Carousel>
      </Container>

      <Container className={`mt-5 ${search.length > 0 ? 'd-none' : 'd-block'}`}>
        <div className="row">
          <div className="col-12">
            <p className="header-product">New</p>
            <p className="header-product-text mt-n4">You’ve never seen it before!</p>
          </div>
        </div>
        <ProductCardLayout>
          {newProducts.data &&
            newProducts.data.map((newProduct) => (
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
      <Container className={`mt-5 ${search.length > 0 ? 'd-none' : 'd-block'}`}>
        <div className="row">
          <div className="col-12">
            <p className="header-product">Popular</p>
            <p className="header-product-text mt-n4">Find clothes that are trending recently!</p>
          </div>
        </div>
        <ProductCardLayout>
          {popularProducts.data &&
            popularProducts.data.map((popularProduct) => (
              <ProductCard
                urlProduct={`/product/${popularProduct.product_id}`}
                key={popularProduct.product_id}
                productTitle={popularProduct.name}
                imgProduct={`${process.env.REACT_APP_API_URL}/${popularProduct.img_product}`}
                productPrice={parseInt(popularProduct.price)}
                productBrand={popularProduct.brand}
              />
            ))}
        </ProductCardLayout>
        <div className="row">
          <div className="col-md-12">
            {popularProducts.pagination && (
              <Pagination
                current={page}
                total={popularProducts.pagination.countData}
                pageSize={popularProducts.pagination.limit ? popularProducts.pagination.limit : 1}
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

export default Home;
