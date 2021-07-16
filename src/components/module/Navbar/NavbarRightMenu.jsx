import React from 'react';
import logoSearch from '../../../assets/img/icon/Search.svg';
import iconFilter from '../../../assets/img/icon/filter.svg';
import iconCart from '../../../assets/img/icon/keranjang.svg';

const NavbarRightMenu = () => {
  return (
    <div className="row flex-grow-1">
      <div className="col-sm-10 col-9">
        <div className="input-group input-group-sm home-seacrh rounded-pill">
          <input
            type="text"
            className="form-control border-end-0 rounded-pill-start"
            placeholder="Search"
          />
          <span className="input-group-text bg-white border-start-0 rounded-pill-end">
            <img src={logoSearch} alt="logo-search" />
          </span>
        </div>
      </div>
      <div className="col-sm-2 col-3 d-flex">
        <button
          className="btn-filter ms-md-0 ms-n3"
          data-bs-target="#filter-prouct"
          data-bs-toggle="modal"
        >
          <img src={iconFilter} alt="icon-filter" />
        </button>
        <a href="./myBag.html" className="btn-icon d-md-none d-block">
          <img src={iconCart} alt="icon-chart" />
        </a>
      </div>
    </div>
  );
};

export default NavbarRightMenu;
