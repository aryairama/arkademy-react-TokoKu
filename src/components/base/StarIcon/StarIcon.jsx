import React from 'react';
import Star from '../../../assets/img/icon/Star.svg';

const StarIcon = (props) => {
  return (
    <li className={props.className}>
      <img className="img-fluid" src={Star} alt="icon-rating" />
    </li>
  );
};

export default StarIcon;
