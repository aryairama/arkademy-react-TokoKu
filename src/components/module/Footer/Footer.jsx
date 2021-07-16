import React from 'react';

const Footer = (props) => {
  return (
    <footer className="footer shadow pt-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4 d-flex flex-column">{props.detailBrand}</div>
          <div className="col-md-4 mt-sm-0 mt-3">
            <p>{props.nameMenu1}</p>
            <ul className="social-media">{props.menu1}</ul>
          </div>
          <div className="col-md-4 mt-sm-0 mt-3">
            <p>{props.nameMenu2}</p>
            <ul className="social-media">{props.menu2}</ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
