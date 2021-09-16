/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect, useRef, useState } from 'react';
import { Container, buttonItemRender } from '../../../components/base/index';
import { ContentCard, Modal as MyModal } from '../../../components/module/index';
import { Modal } from 'bootstrap';
import { createPortal } from 'react-dom';
import { ModalAddAddressHeader, ModalAddAddressBody, ModalAddAddressFooter } from '../../../components/ModalAddAddress';
import SimpleReactValidator from 'simple-react-validator';
import { getAddress, deleteAddress } from '../../../configs/redux/actions/userAction';
import { useDispatch } from 'react-redux';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import locale from 'rc-pagination/es/locale/en_US';

const Address = () => {
  const [reloadAddData, setReloadAddData] = useState(false);
  const dispatch = useDispatch();
  const [dataAddress, setDataAddress] = useState({});
  const [page, setPage] = useState(1);
  const refModalAddAddress = useRef(null);
  const [modalAddAddress, setModalAddAddress] = useState(null);
  const initialInsertState = {
    primary_address: '0',
    label: '',
    recipients_name: '',
    phone_number: '',
    city_or_subdistrict: '',
    address: '',
    postal_code: '',
  };
  const [insertAddress, setInsertAddress] = useState(initialInsertState);
  const modalAddAddressShowHandler = () => modalAddAddress.show();
  const modalAddAddressHideHandler = () => modalAddAddress.hide();
  const insertAddressHandler = (e) => setInsertAddress((oldVal) => ({ ...oldVal, [e.target.name]: e.target.value }));
  const validatorInsert = useRef(new SimpleReactValidator({ className: 'small text-danger' }));
  const insertPrimaryAddressHandler = (e) => {
    if (e.target.checked) {
      setInsertAddress((oldVal) => ({ ...oldVal, [e.target.name]: e.target.value }));
    } else {
      setInsertAddress((oldVal) => ({ ...oldVal, [e.target.name]: '0' }));
    }
  };
  useEffect(async () => {
    try {
      setModalAddAddress(new Modal(refModalAddAddress.current, { backdrop: 'static' }));
    } catch (error) {
      console.log(error);
    }
  }, []);
  useEffect(async () => {
    const { data, pagination } = await dispatch(getAddress('', 'DESC', 'primary_address', 2, page));
    setDataAddress({ data, pagination });
  }, [page, reloadAddData]);
  return (
    <Fragment>
      <Container className="mb-5">
        <ContentCard
          cardHeader={
            <Fragment>
              <div className="text-black-20px fw-bold">Choose another address</div>
              <div className="text-black-14px text-black-50">Manage your shipping address</div>
            </Fragment>
          }
          cardBody={
            <div className="row">
              <div className="col-12">
                <div className="d-flex flex-wrap flex-column align-items-center pb-5">
                  <div
                    onClick={modalAddAddressShowHandler}
                    className="add-new-address d-flex flex-wrap w-100 justify-content-center rounded-3 py-4 mt-3"
                  >
                    <div className="text-black-50">Add new address</div>
                  </div>
                  {dataAddress?.data?.map((address, index) => (
                    <div
                      key={index}
                      className={`list-address mt-4 p-3 rounded-3 w-100 ${
                        address.primary_address === 0 ? 'border-dark' : ''
                      }`}
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
                          onClick={async() => {
                            await dispatch(deleteAddress(address.address_id));
                            setReloadAddData(!reloadAddData);
                          }}
                          style={{ cursor: 'pointer' }}
                          className="text-orange"
                        >
                          Delete
                        </div>
                      )}
                      {address.primary_address === 0 && <div style={{ cursor: 'pointer' }}>Primary</div>}
                    </div>
                  ))}
                  <div className="row mt-3">
                    <div className="col-12">
                      {dataAddress?.pagination && (
                        <Pagination
                          current={page}
                          total={dataAddress?.pagination.countData}
                          pageSize={dataAddress?.pagination.limit ? dataAddress?.pagination.limit : 1}
                          itemRender={buttonItemRender}
                          onChange={(current, pageSize) => setPage(current)}
                          locale={locale}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
        />
      </Container>
      {createPortal(
        <MyModal
          id="addAddress"
          forwadedRef={refModalAddAddress}
          styleDialog="modal-lg"
          styleBody="px-5 h-min-60vh"
          styleHeader="justify-content-end border-0 mb-3"
          header={
            <ModalAddAddressHeader
              initialtState={initialInsertState}
              validator={validatorInsert}
              setAddress={setInsertAddress}
              onClickCloseAddAddress={modalAddAddressHideHandler}
            />
          }
          body={
            <ModalAddAddressBody
              initialtState={initialInsertState}
              address={insertAddress}
              addressHandler={insertAddressHandler}
              validator={validatorInsert}
              setAddress={setInsertAddress}
              insertPrimaryAddressHandler={insertPrimaryAddressHandler}
            />
          }
          footer={
            <ModalAddAddressFooter
              setReload={setReloadAddData}
              address={insertAddress}
              initialtState={initialInsertState}
              validator={validatorInsert}
              setAddress={setInsertAddress}
              onClickCloseAddAddress={modalAddAddressHideHandler}
            />
          }
        />,
        document.getElementById('modal-root')
      )}
    </Fragment>
  );
};

export default Address;
