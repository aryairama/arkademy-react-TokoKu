import React from 'react';
import { Link } from 'react-router-dom';

const FooterMenu = (props) => {
  return (
    <li>
      <Link to={props.linkMenu}>
        <img className="img-fluid" src={props.img} alt="icon-footer-menu" />
        {props.textMenu}
      </Link>
    </li>
  );
};

export default FooterMenu;
