import React from 'react';

const NavbarLeftMenu = () => {
  return (
    <div className="row flex-grow-1 gx-0">
      <div className="offset-4 col-2 d-none d-md-block">
        <a href="./myBag.html" className="btn-icon ms-lg-4">
          <img src="../asset/img/icon/keranjang.svg" alt="" />
        </a>
      </div>
      <div className="col-md-6 col-8 d-flex">
        <a
          href="../auth/login.html"
          className="btn btn-sm btn-orange rounded-pill w-50 me-3"
        >
          Login
        </a>
        <a
          href="../auth/register.html"
          className="btn btn-sm button-auth rounded-pill w-50"
        >
          Signup
        </a>
      </div>
    </div>
  );
};

export default NavbarLeftMenu;
