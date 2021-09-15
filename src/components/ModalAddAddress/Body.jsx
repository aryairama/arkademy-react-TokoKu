import React, { Fragment } from 'react';
import { Input, InputCheck } from '../base/index';
const Body = ({ address, addressHandler, insertPrimaryAddressHandler, validator, ...props }) => {
  return (
    <Fragment>
      <div className="text-black-24px fw-bold text-center mb-3">Add new address</div>
      <div className="row">
        <div className="col-md-12 col-12 mb-3">
          <Input
            styleLabel="text-black-14px mt-n4"
            label="Save address as (ex : home address, office address)"
            type="text"
            name="label"
            id="label"
            value={address.label}
            onChange={addressHandler}
            onFocus={() => validator.current.showMessageFor('label')}
            placeholder="Rumah"
          />
          {validator.current.message('label', address.label, 'required|min:4|max:255')}
        </div>
        <div className="col-lg-6">
          <div className="mb-3">
            <Input
              styleLabel="text-black-14px"
              label="Recipient’s name"
              type="text"
              name="recipients_name"
              id="recipients_name"
              value={address.recipients_name}
              onChange={addressHandler}
              onFocus={() => validator.current.showMessageFor('recipients_name')}
            />
            {validator.current.message(
              'recipients_name',
              address.recipients_name,
              'required|min:4|max:255'
            )}
          </div>
          <div className="mb-3">
            <Input
              styleLabel="text-black-14px"
              label="Address"
              type="text"
              name="address"
              id="address"
              value={address.address}
              onChange={addressHandler}
              onFocus={() => validator.current.showMessageFor('address')}
            />
            {validator.current.message('address', address.address, 'required|min:10')}
          </div>
          <div className="mb-3">
            <Input
              styleLabel="text-black-14px"
              label="City or Subdistrict"
              type="text"
              name="city_or_subdistrict"
              id="city_or_subdistrict"
              value={address.city_or_subdistrict}
              onChange={addressHandler}
              onFocus={() => validator.current.showMessageFor('city_or_subdistrict')}
            />
            {validator.current.message(
              'city_or_subdistrict',
              address.city_or_subdistrict,
              'required|min:5'
            )}
          </div>
          <div className="form-check d-lg-block d-none">
            <InputCheck
              defaultChecked={address.primary_address}
              type="checkbox"
              id="primary_address"
              styleLabel="text-black-14px"
              label="Make it the primary address"
              value="1"
              name="primary_address"
              onClick={insertPrimaryAddressHandler}
              onBlur={() => validator.current.showMessageFor('primary_address')}
            />
            {validator.current.message('primary_address', address.primary_address, 'required|in:0,1')}
          </div>
        </div>
        <div className="col-lg-6">
          <div className="mb-3">
            <Input
              styleLabel="text-black-14px"
              label="Recipient's telephone number"
              type="text"
              name="phone_number"
              id="phone_number"
              value={address.phone_number}
              onChange={addressHandler}
              onFocus={() => validator.current.showMessageFor('phone_number')}
            />
            {validator.current.message(
              'phone_number',
              address.phone_number,
              'required|numeric|min:10|max:15'
            )}
          </div>
          <div className="mb-3">
            <Input
              styleLabel="text-black-14px"
              label="Postal code"
              type="text"
              name="postal_code"
              id="postal_code"
              value={address.postal_code}
              onChange={addressHandler}
              onFocus={() => validator.current.showMessageFor('postal_code')}
            />
            {validator.current.message('postal_code', address.postal_code, 'required|min:5|max:5|numeric')}
          </div>
          <div className="form-check d-lg-none d-block">
            <InputCheck
              defaultChecked={address.primary_address}
              type="checkbox"
              id="primary_address2"
              styleLabel="text-black-14px"
              label="Make it the primary address"
              value="1"
              name="primary_address"
              onClick={insertPrimaryAddressHandler}
              onBlur={() => validator.current.showMessageFor('primary_address')}
            />
            {validator.current.message('primary_address', address.primary_address, 'required|in:0,1')}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Body;
