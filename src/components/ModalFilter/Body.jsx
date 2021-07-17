import React, { Fragment } from 'react';
import '../../assets/css/modalFilter.css';
import ColorPicker from '../base/ColorPicker/ColorPicker';
import InputPicker from '../base/InputPicker/InputPicker';
const Body = (props) => {
  return (
    <Fragment>
      <div className="filter-colors">
        <p className="filter-title">Colors</p>
        <div className="d-flex flex-wrap justify-content-start">
          <ColorPicker id="color1" color="black" value="black" />
          <ColorPicker id="color2" color="white shadow" value="white" />
          <ColorPicker id="color3" color="red" value="red" />
          <ColorPicker id="color4" color="pink" value="pink" />
          <ColorPicker id="color5" color="brown" value="brown" />
          <ColorPicker id="color6" color="blue" value="blue" />
        </div>
      </div>
      <hr className="mx-n3 divider-filter" />
      <div className="filter-size">
        <p className="filter-title">Size</p>
        <div className="d-flex flex-wrap justify-content-start">
          <InputPicker id="size1" value="XS">
            XS
          </InputPicker>
          <InputPicker id="size2" value="S">
            S
          </InputPicker>
          <InputPicker id="size3" value="M">
            M
          </InputPicker>
          <InputPicker id="size4" value="L">
            L
          </InputPicker>
          <InputPicker id="size5" value="XL">
            XL
          </InputPicker>
        </div>
      </div>
      <hr className="mx-n3 divider-filter" />
      <div className="filter-category">
        <p className="filter-title">Category</p>
        <div className="d-flex flex-wrap justify-content-start">
          <InputPicker id="category1" value="All">
            All
          </InputPicker>
          <InputPicker id="category2" value="Women">
            Women
          </InputPicker>
          <InputPicker id="category3" value="Men">
            Men
          </InputPicker>
          <InputPicker id="category4" value="Boys">
            Boys
          </InputPicker>
          <InputPicker id="category5" value="Girls">
            Girls
          </InputPicker>
        </div>
      </div>
      <hr className="mx-n3 divider-filter" />
      <div className="filter-brand">
        <p className="filter-title">Brand</p>
        <select name="brand" id="brand" className="form-select">
          <option value="adidas">adidas Originals, Jack & Jones, s.Oliver</option>
          <option value="adidas">adidas Originals, Jack & Jones, s.Oliver</option>
        </select>
      </div>
      <hr className="mx-n3 divider-filter"/>
    </Fragment>
  );
};

export default Body;
