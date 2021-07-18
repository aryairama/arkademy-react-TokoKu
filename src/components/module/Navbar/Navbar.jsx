import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  let expand = props.expand || 'navbar-expand-md';
  if (expand.toLowerCase() === 'sm') {
    expand = 'navbar-expand-sm';
  } else if (expand.toLowerCase() === 'lg') {
    expand = 'navbar-expand-lg';
  } else {
    expand = 'navbar-expand-md';
  }
  return (
    <nav className={`navbar ${expand} navbar-light bg-white shadow fixed-top ${props.styleNavbar}`}>
      <div className="container">
        <Link to={props.urlLogo} className={`navbar-brand d-flex ${props.navbarBrand}`}>
          <img className="brand-ecommerce" src={props.urlLogoImg} alt="logo-app" />
          <p className="text-logo-ecommerce mb-n5 pt-2 ps-1">{props.textLogo}</p>
        </Link>
        {props.buttonSideBar}
        <button
          className="navbar-toggler btn-sm btn"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-ecommerce"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar-ecommerce">
          <div className="row flex-grow-1 mt-md-2 mt-4">
            <div className={`col-md-6 col-lg-6 col-12 mb-md-0 mb-3 ${props.styleLefthMenu}`}>{props.leftMenu}</div>
            <div className={`col-md-6 col-lg-6 col-12 ${props.styleRigthMenu}`}>{props.rigthMenu}</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
