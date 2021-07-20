import React, { Fragment } from 'react';
import { Input, InputCheck } from '../base/index';
const Body = (props) => {
  return (
    <Fragment>
      <div className="text-black-24px fw-bold text-center mb-3">Add new address</div>
      <div className="row">
        <div className="col-md-12 col-12 mb-3">
          <Input
            styleLabel="text-black-14px mt-n4"
            label="Save address as (ex : home address, office address)"
            type="text"
            name="full_address"
            id="full_address"
            placeholder="Rumah"
          />
        </div>
        <div className="col-lg-6">
          <div className="mb-3">
            <Input styleLabel="text-black-14px" label="Recipient’s name" type="text" name="name" id="name" />
          </div>
          <div className="mb-3">
            <Input styleLabel="text-black-14px" label="Address" type="text" name="address" id="address" />
          </div>
          <div className="mb-3">
            <Input
              styleLabel="text-black-14px"
              label="City or Subdistrict"
              type="text"
              name="city_or_ubdistrict"
              id="city_or_ubdistrict"
            />
          </div>
          <div className="form-check d-lg-block d-none">
            <InputCheck
              type="checkbox"
              id="primary_address"
              styleLabel="text-black-14px"
              label="Make it the primary address"
              value="true"
              name="primary_address"
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="mb-3">
            <Input
              styleLabel="text-black-14px"
              label="Recipient's telephone number"
              type="number"
              name="phone_number"
              id="phone_number"
            />
          </div>
          <div className="mb-3">
            <Input styleLabel="text-black-14px" label="Postal code" type="number" name="postal_code" id="postal_code" />
          </div>
          <div className="form-check d-lg-none d-block">
            <InputCheck
              type="checkbox"
              id="primary_address"
              styleLabel="text-black-14px"
              label="Make it the primary address"
              value="true"
              name="primary_address"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Body;
