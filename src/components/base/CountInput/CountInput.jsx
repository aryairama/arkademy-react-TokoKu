import React, { Component } from 'react';
export class CountInput extends Component {
  render() {
    return (
      <>
        {this.props.redux === false && (
          <div className={this.props.className}>
            <p className="filter-title lh-1">{this.props.title}</p>
            <button
              className="btn-decrement-product"
              onClick={() => {
                this.props.value === 1 ? this.props.onClick(1) : this.props.onClick(this.props.value - 1);
              }}
            >
              &#9866;
            </button>
            <input
              type="number"
              className="form-control-quantity"
              readOnly
              value={this.props.value}
            />
            <button
              className="btn-increment-product"
              onClick={() => {
                if (this.props.value === this.props.max) {
                  this.props.onClick(this.props.value);
                } else {
                  this.props.onClick(this.props.value + 1);
                }
              }}
            >
              +
            </button>
          </div>
        )}
      </>
    );
  }
}
CountInput.defaultProps = {
  redux: false,
};
export default CountInput;
