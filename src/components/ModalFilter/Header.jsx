import React, { Fragment } from 'react';
import closeSvg from '../../assets/img/icon/close.svg';
const Header = (props) => {
  return (
    <Fragment>
      <button onClick={props.onClickFilter} type="button" className="border-0 bg-transparent">
        <img src={closeSvg} alt="icon-close-filter" />
      </button>
      <h5 className="modal-title ms-2 mt-1" id="staticBackdropLabel">
        Filter
      </h5>
    </Fragment>
  );
};

export default Header;
