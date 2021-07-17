import React from 'react';
import { Link } from 'react-router-dom';
const CategoryCard = (props) => {
  let bgCard = '';
  let bgRandom = Math.floor(Math.random() * (6 - 1) + 1);
  if (bgRandom === 1) {
    bgCard = 'blue';
  } else if (bgRandom === 2) {
    bgCard = 'red';
  } else if (bgRandom === 3) {
    bgCard = 'orange'
  } else if (bgRandom === 4) {
    bgCard = 'pink'
  } else if (bgRandom === 5) {
    bgCard = 'green'
  }
  return (
    <div className={`card d-flex bg-${bgCard} card-category justify-content-center align-items-center`}>
      <img className="card-img w-60" src={`${process.env.REACT_APP_API_URL}/${props.img_category}`} alt="style-trend" />
      <div className="card-img-overlay d-flex align-items-center justify-content-center">
        <Link
          to={`/category/${props.category_id}`}
          className="text-black-20px text-white fw-bold text-decoration-none stretched-link"
        >
          {props.name}
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
