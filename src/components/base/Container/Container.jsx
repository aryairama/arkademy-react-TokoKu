import React from 'react';

const Container = (props) => {
  return (
    <section className={`container ${props.className}`}>
      {props.children}
    </section>
  );
};

export default Container;
