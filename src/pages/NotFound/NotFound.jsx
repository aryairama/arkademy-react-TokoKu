import React from 'react';
import icon404 from '../../assets/img/icon/404.png';

const NotFound = () => {
  return (
    <div style={{ minHeight: '90vh' }} className="mt-5 w-100 container">
      <img
        className="ms-auto me-auto mt-auto mb-auto d-block"
        src={icon404}
        style={{ width: '50%', height: '50%' }}
        alt="icon-404"
      />
    </div>
  );
};

export default NotFound;
