/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect, useRef, useState } from 'react';
import Navbar from '../../components/module/Navbar/Navbar';
import { Modal } from 'bootstrap';
import { createPortal } from 'react-dom';
import logoTokoKu from '../../assets/img/icon/Vector.svg';
import NavbarLeftMenu from '../../components/module/Navbar/NavbarLeftMenu';
import NavbarRightMenu from '../../components/module/Navbar/NavbarRightMenu';
import Carousel from '../../components/module/Carousel/Carousel';
import ProductCardLayout from '../../components/base/ProductCardLayout/ProductCardLayout';
import ProductCard from '../../components/base/ProductCard/ProductCard';
import Container from '../../components/base/Container/Container';
import Footer from '../../components/module/Footer/Footer';
import FooterMenu from '../../components/base/FooterMenu/FooterMenu';
import ConfigCarousel from '../../configs/Carousel';
import MyModal from '../../components/module/Modal/Modal';
import ModalHeader from '../../components/ModalFilter/Header';
import ModalBody from '../../components/ModalFilter/Body';
import ModalFooter from '../../components/ModalFilter/Footer';
import getProduct from './getProducts';
import img from './img';

const Home = (props) => {
  const refModalFilter = useRef(null);
  const [modalFilter, setModalFilter] = useState(null);
  const [newProducts, setNewProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);
  const modalShowHandler = () => modalFilter.show();
  const modalHideHandler = () => modalFilter.hide();
  useEffect(async () => {
    try {
      const { data: data1 } = await (await getProduct('DESC')).data;
      const { data: data2 } = await (await getProduct('ASC')).data;
      setNewProducts(data1);
      setPopularProducts(data2);
      setModalFilter(new Modal(refModalFilter.current, { backdrop: 'static' }));
    } catch (error) {
      console.log(error);
    }
  }, []);
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
        <Carousel settings={ConfigCarousel.configTrendCarousel}>
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
      <Container className="mt-5">
        <div className="row">
          <div className="col-12">
            <p className="header-product">Category</p>
            <p className="header-product-text mt-n4">What are you currently looking for</p>
          </div>
        </div>
        <Carousel settings={ConfigCarousel.configCetgoryCarousel}>
          <div className="card d-flex bg-red card-category justify-content-center align-items-center">
            <img className="card-img w-60" src={img.categoryImg4} alt="style-trend" />
            <div className="card-img-overlay d-flex align-items-center justify-content-center">
              <a
                href="./pages/tShirt.html"
                className="text-black-20px text-white fw-bold text-decoration-none stretched-link"
              >
                T-Shirt
              </a>
            </div>
          </div>
          <div className="card d-flex bg-blue card-category justify-content-center align-items-center">
            <img className="card-img w-60" src={img.categoryImg5} alt="style-trend" />
            <div className="card-img-overlay d-flex align-items-center justify-content-center">
              <a
                href="./pages/tShirt.html"
                className="text-black-20px text-white fw-bold text-decoration-none stretched-link"
              >
                Shorts
              </a>
            </div>
          </div>
          <div className="card d-flex bg-orange card-category justify-content-center align-items-center">
            <img className="card-img w-60" src={img.categoryImg2} alt="style-trend" />
            <div className="card-img-overlay d-flex align-items-center justify-content-center">
              <a
                href="./pages/tShirt.html"
                className="text-black-20px text-white fw-bold text-decoration-none stretched-link"
              >
                Shorts
              </a>
            </div>
          </div>
          <div className="card d-flex bg-pink card-category justify-content-center align-items-center">
            <img className="card-img w-60" src={img.categoryImg1} alt="style-trend" />
            <div className="card-img-overlay d-flex align-items-center justify-content-center">
              <a
                href="./pages/tShirt.html"
                className="text-black-20px text-white fw-bold text-decoration-none stretched-link"
              >
                Shorts
              </a>
            </div>
          </div>
          <div className="card d-flex bg-green card-category justify-content-center align-items-center">
            <img className="card-img w-60" src={img.categoryImg3} alt="style-trend" />
            <div className="card-img-overlay d-flex align-items-center justify-content-center">
              <a
                href="./pages/tShirt.html"
                className="text-black-20px text-white fw-bold text-decoration-none stretched-link"
              >
                Shorts
              </a>
            </div>
          </div>
          <div className="card d-flex bg-red card-category justify-content-center align-items-center">
            <img className="card-img w-60" src={img.categoryImg4} alt="style-trend" />
            <div className="card-img-overlay d-flex align-items-center justify-content-center">
              <a
                href="./pages/tShirt.html"
                className="text-black-20px text-white fw-bold text-decoration-none stretched-link"
              >
                T-Shirt
              </a>
            </div>
          </div>
          <div className="card d-flex bg-blue card-category justify-content-center align-items-center">
            <img className="card-img w-60" src={img.categoryImg5} alt="style-trend" />
            <div className="card-img-overlay d-flex align-items-center justify-content-center">
              <a
                href="./pages/tShirt.html"
                className="text-black-20px text-white fw-bold text-decoration-none stretched-link"
              >
                Shorts
              </a>
            </div>
          </div>
          <div className="card d-flex bg-orange card-category justify-content-center align-items-center">
            <img className="card-img w-60" src={img.categoryImg2} alt="style-trend" />
            <div className="card-img-overlay d-flex align-items-center justify-content-center">
              <a
                href="./pages/tShirt.html"
                className="text-black-20px text-white fw-bold text-decoration-none stretched-link"
              >
                Shorts
              </a>
            </div>
          </div>
          <div className="card d-flex bg-pink card-category justify-content-center align-items-center">
            <img className="card-img w-60" src={img.categoryImg1} alt="style-trend" />
            <div className="card-img-overlay d-flex align-items-center justify-content-center">
              <a
                href="./pages/tShirt.html"
                className="text-black-20px text-white fw-bold text-decoration-none stretched-link"
              >
                Shorts
              </a>
            </div>
          </div>
          <div className="card d-flex bg-green card-category justify-content-center align-items-center">
            <img className="card-img w-60" src={img.categoryImg3} alt="style-trend" />
            <div className="card-img-overlay d-flex align-items-center justify-content-center">
              <a
                href="./pages/tShirt.html"
                className="text-black-20px text-white fw-bold text-decoration-none stretched-link"
              >
                Shorts
              </a>
            </div>
          </div>
        </Carousel>
      </Container>
      <Container className="mt-5">
        <div className="row">
          <div className="col-12">
            <p className="header-product">New</p>
            <p className="header-product-text mt-n4">You’ve never seen it before!</p>
          </div>
        </div>
        <ProductCardLayout>
          {newProducts.map((newProduct) => (
            <ProductCard
              urlProduct="/"
              key={newProduct.product_id}
              productTitle={newProduct.name}
              imgProduct={`${process.env.REACT_APP_API_URL}/${newProduct.img_product}`}
              productPrice={parseInt(newProduct.price)}
              productBrand={newProduct.brand}
            />
          ))}
        </ProductCardLayout>
      </Container>
      <Container className="mt-5">
        <div className="row">
          <div className="col-12">
            <p className="header-product">Popular</p>
            <p className="header-product-text mt-n4">Find clothes that are trending recently!</p>
          </div>
        </div>
        <ProductCardLayout>
          {popularProducts.map((newProduct) => (
            <ProductCard
              urlProduct="/"
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
          footer={<ModalFooter onClickCloseFilter={ modalHideHandler }/>}
        />,
        document.getElementById('modal-root')
      )}
    </Fragment>
  );
};

export default Home;
