import React, { Component } from 'react';
export class CountInput extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <p className="filter-title lh-1">{this.props.title}</p>
        <button className="btn-decrement-product" onClick={() => this.props.onClick((e) => (e === 0 ? 0 : (e -= 1)))}>
          &#9866;
        </button>
        <input type="number" className="form-control-quantity" readOnly value={this.props.value} />
        <button className="btn-increment-product" onClick={() => this.props.onClick((e) => (e += 1))}>
          +
        </button>
      </div>
    );
  }
}

export default CountInput;
