import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Breadcrumb extends Component {
  render() {
    return (
      <nav style={{ '--bs-breadcrumb-divider': '">"' }}>
        <ol className="breadcrumb">
          {this.props.url.map((url, index) => (
            <Link to={url} key={index} className="breadcrumb-item beadcrumb-text text-black-50 text-decoration-none">
              {this.props.textUrl[index]}
            </Link>
          ))}
        </ol>
      </nav>
    );
  }
}

export default Breadcrumb;
