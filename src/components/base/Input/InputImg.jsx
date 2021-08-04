import React, { useState } from 'react';
import iconBox from '../../../assets/img/icon/box.svg';

const InputImg = (props) => {
  const [previewImg, setPreviewImg] = useState([]);
  let count = previewImg.length;
  const defaultPreview = [];
  for (let index = count; index < 5; index++) {
    defaultPreview.push(
      <div className="col" key={index}>
        <div className={`card ${count === 0 && index === 0 ? 'img-preview-primary' : 'img-preview-secondary'}`}>
          <div className="card-body d-flex justify-content-center align-items-center">
            <img className="img-fluid" src={iconBox} alt="" />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="border border-dashed rounded-3 p-5 pb-0 ">
      <div className="row flex-nowrap overflow-x pb-5 align-items-center">
        {previewImg.map((img, index) => (
          <div className="col" key={index}>
            <div className={`card ${index === 0 ? 'img-preview-primary' : 'img-preview-secondary'}`}>
              <div className="card-body d-flex justify-content-center align-items-center">
                <img className="img-fluid" src={URL.createObjectURL(img)} alt="" />
                {index === 0 && <div className="img-preview-primary-waypoint">Foto utama</div>}
              </div>
            </div>
          </div>
        ))}
        {defaultPreview}
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
        onBlur={props.onBlur}
        multiple
        type="file"
        accept="image/jpeg, image/png"
        id="img_product"
        style={{ marginLeft: '-2000px' }}
        onChange={(e) => {
          props.onChange((oldValue) => {
            return { ...oldValue, img_product: [...e.target.files] };
          });
          setPreviewImg([...e.target.files]);
        }}
      />
    </div>
  );
};

export default InputImg;
