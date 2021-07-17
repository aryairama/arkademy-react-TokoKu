import React from 'react';
import { Link } from 'react-router-dom';
import cart from '../../../assets/img/icon/keranjang.svg';
const NavbarRightMenu = () => {
  return (
    <div className="row flex-grow-1 gx-0">
      <div className="offset-4 col-2 d-none d-md-block">
        <a href="./myBag.html" className="btn-icon ms-lg-4">
          <img src={cart} alt="" />
        </a>
      </div>
      <div className="col-md-6 col-8 d-flex">
        <Link to="/auth/login" className="btn btn-sm btn-orange rounded-pill w-50 me-3">
          Login
        </Link>
        <Link to="/auth/register" className="btn btn-sm button-auth rounded-pill w-50">
          Signup
        </Link>
      </div>
    </div>
  );
};

export default NavbarRightMenu;
