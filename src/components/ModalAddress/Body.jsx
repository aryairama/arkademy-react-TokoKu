import React from 'react';
const Body = (props) => {
  return (
    <div className="d-flex flex-wrap flex-column align-items-center">
      <div className="text-black-24px fw-bold mt-n3">Choose another address</div>
      <div
        onClick={() => {
          props.onClickCloseAddress();
          props.onClickShowAddAddress();
        }}
        className="add-new-address d-flex flex-wrap w-100 justify-content-center rounded-3 py-2 mt-3"
      >
        <div className="text-black-50">Add new address</div>
      </div>
      <div className="list-address mt-4 p-3 rounded-3">
        <p className="text-black-16px font-semi-bold">Andreas Jane</p>
        <p className="text-black-14px mt-n2">
          Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia
          Note: blok c 16] Sokaraja, Kab. Banyumas, 53181
        </p>
        <span className="text-orange">Delete</span>
      </div>
    </div>
  );
};

export default Body;
