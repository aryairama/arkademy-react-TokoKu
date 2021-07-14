import React from 'react';
const LayoutAuth = (props) => {
  return (
    <section className="container">
      <div className="row">
        <div className="offset-md-2 col-md-8">{props.children}</div>
      </div>
    </section>
  );
};
export default LayoutAuth;
