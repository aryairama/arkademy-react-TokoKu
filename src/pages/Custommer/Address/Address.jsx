/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect, useRef, useState } from 'react';
import { Container } from '../../../components/base/index';
import { ContentCard, Modal as MyModal } from '../../../components/module/index';
import { Modal } from 'bootstrap';
import { createPortal } from 'react-dom';
import { ModalAddAddressHeader, ModalAddAddressBody, ModalAddAddressFooter } from '../../../components/ModalAddAddress';
const Address = () => {
  const refModalAddAddress = useRef(null);
  const [modalAddAddress, setModalAddAddress] = useState(null);
  const modalAddAddressShowHandler = () => modalAddAddress.show();
  const modalAddAddressHideHandler = () => modalAddAddress.hide();
  useEffect(async () => {
    try {
      setModalAddAddress(new Modal(refModalAddAddress.current, { backdrop: 'static' }));
    } catch (error) {
      console.log(error);
    }
  }, []);
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
                  <div className="list-address mt-4 p-3 rounded-3">
                    <p className="text-black-16px font-semi-bold">Andreas Jane</p>
                    <p className="text-black-14px mt-n2">
                      Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181
                      [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas, 53181
                    </p>
                    <span className="text-orange">Delete</span>
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
          header={<ModalAddAddressHeader onClickCloseAddAddress={modalAddAddressHideHandler} />}
          body={<ModalAddAddressBody />}
          footer={<ModalAddAddressFooter onClickCloseAddAddress={modalAddAddressHideHandler} />}
        />,
        document.getElementById('modal-root')
      )}
    </Fragment>
  );
};

export default Address;
