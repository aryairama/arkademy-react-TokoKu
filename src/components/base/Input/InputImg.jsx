import React, { useState } from 'react';
import iconBox from '../../../assets/img/icon/box.svg';

const InputImg = (props) => {
  const [previewImg, setPreviewImg] = useState(null);
  return (
    <div className="border border-dashed rounded-3 p-5 pb-0 ">
      <div className="row flex-nowrap overflow-x pb-5 align-items-center">
        <div className="col">
          <div className="card img-preview-primary">
            <div className="card-body d-flex justify-content-center align-items-center">
              <img className="img-fluid" src={previewImg ? previewImg : iconBox} alt="" />
              <div className="img-preview-primary-waypoint">Foto utama</div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card img-preview-secondary">
            <div className="card-body d-flex justify-content-center align-items-center">
              <img className="img-fluid" src={iconBox} alt="" />
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card img-preview-secondary">
            <div className="card-body d-flex justify-content-center align-items-center">
              <img className="img-fluid" src={iconBox} alt="" />
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card img-preview-secondary">
            <div className="card-body d-flex justify-content-center align-items-center">
              <img className="img-fluid" src={iconBox} alt="" />
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card img-preview-secondary">
            <div className="card-body d-flex justify-content-center align-items-center">
              <img className="img-fluid" src={iconBox} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-center">
          <hr />
          <label htmlFor="img_product" className="btn button-auth rounded-pill btn-sm">
            Uploud foto
          </label>
        </div>
      </div>
      <input
        type="file"
        accept="image/jpeg, image/png"
        id="img_product"
        style={{ marginLeft: '-2000px' }}
        onChange={(e) => {
          props.onChange((oldValue) => {
            return { ...oldValue, imgProduct: e.target.files[0] };
          });
          setPreviewImg(URL.createObjectURL(e.target.files[0]));
        }}
      />
    </div>
  );
};

export default InputImg;
