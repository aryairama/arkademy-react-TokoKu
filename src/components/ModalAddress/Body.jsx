import React from 'react';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import locale from 'rc-pagination/es/locale/en_US';
import { buttonItemRender } from '../base';

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
      {props.dataAddress?.data?.map((address, index) => (
        <div
          key={index}
          className={`list-address mt-4 p-3 rounded-3 w-100 ${address.primary_address === 0 ? 'border-dark' : ''}`}
        >
          <div className="text-black-16px font-semi-bold lh-lg">{address.label}</div>
          <div className="text-black-14px font-semi-bold lh-lg">
            {address.recipients_name} ({address.phone_number})
          </div>
          <p className="text-black-14px">
            {address.address}, [{address.city_or_subdistrict}], {address.postal_code}
          </p>
          {address.primary_address === 0 && (
            <div
              onClick={async () => {
                await props.dispatch(props.deleteAddress(address.address_id));
                props.setReload(!props.reloadAddData);
              }}
              style={{ cursor: 'pointer' }}
              className="text-orange"
            >
              Delete
            </div>
          )}
          {address.primary_address === 0 && (
            <div
              onClick={async () => {
                await props.dispatch(props.setPrimaryAddress(address.address_id));
                props.setReload(!props.reloadAddData);
              }}
              style={{ cursor: 'pointer' }}
            >
              Primary
            </div>
          )}
        </div>
      ))}
      <div className="row mt-3">
        <div className="col-12">
          {props.dataAddress?.pagination && (
            <Pagination
              current={props.page}
              total={props.dataAddress?.pagination.countData}
              pageSize={props.dataAddress?.pagination.limit ? props.dataAddress?.pagination.limit : 1}
              itemRender={buttonItemRender}
              onChange={(current, pageSize) => props.setPage(current)}
              locale={locale}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Body;
