import React, { Fragment } from 'react';
import { Container } from '../../../components/base';
import { ContentCard } from '../../../components/module';
import IconProdcutsNotFound from '../../../assets/img/icon/undraw_respond_8wjt_1.svg';
import IconSearch from '../../../assets/img/icon/Search.svg';
const MyOrderCancel = () => {
  return (
    <Container className="mb-5">
      <ContentCard
        cardBody={
          <Fragment>
            <div className="text-black-20px fw-bold">My order</div>
            <nav>
              <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <button
                  className="nav-link nav-tab-orange ps-0"
                  id="all_items"
                  data-bs-toggle="tab"
                  data-bs-target="#tab_all_items"
                  type="button"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                >
                  All items
                </button>
                <button
                  className="nav-link nav-tab-orange"
                  id="get_paid"
                  data-bs-toggle="tab"
                  data-bs-target="#tab_get_paid"
                  type="button"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                >
                  Get paid
                </button>
                <button
                  className="nav-link nav-tab-orange"
                  id="processed"
                  data-bs-toggle="tab"
                  data-bs-target="#tab_processed"
                  type="button"
                  role="tab"
                  aria-controls="nav-contact"
                  aria-selected="false"
                >
                  Processed
                </button>
                <button
                  className="nav-link nav-tab-orange"
                  id="sent"
                  data-bs-toggle="tab"
                  data-bs-target="#tab_sent"
                  type="button"
                  role="tab"
                  aria-controls="nav-contact"
                  aria-selected="false"
                >
                  Sent
                </button>
                <button
                  className="nav-link nav-tab-orange"
                  id="completed"
                  data-bs-toggle="tab"
                  data-bs-target="#tab_completed"
                  type="button"
                  role="tab"
                  aria-controls="nav-contact"
                  aria-selected="false"
                >
                  Completed
                </button>
                <button
                  className="nav-link nav-tab-orange active"
                  id="order_cancel"
                  data-bs-toggle="tab"
                  data-bs-target="#tab_order_cancel"
                  type="button"
                  role="tab"
                  aria-controls="nav-contact"
                  aria-selected="false"
                >
                  Order cancel
                </button>
              </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
              <div className="tab-pane h-min-60vh fade" id="tab_all_items" role="tabpanel" aria-labelledby="nav-home-tab">
                <div className="d-flex flex-column pt-3">
                  <div className="input-group input-group-sm input-group-myorder">
                    <button className="input-group-text border-grey bg-transparent rounded-pill-start border-end-0">
                      <img src={IconSearch} alt="icon-search" aria-label="button search" />
                    </button>
                    <input type="text" className="form-control rounded-pill-end border-start-0" placeholder="Search" />
                  </div>
                  <div className="data-notfound align-self-center mt-10">
                    <img src={IconProdcutsNotFound} width="165px" height="147px" alt="icon-product" />
                  </div>
                  <p className="text-black-16px text-black-50 pt-5 text-center">You don't have a product yet</p>
                </div>
              </div>
              <div className="tab-pane h-min-60vh fade" id="tab_get_paid" role="tabpanel" aria-labelledby="nav-profile-tab">
                <div className="d-flex flex-column pt-3">
                  <div className="input-group input-group-sm input-group-myorder">
                    <button className="input-group-text border-grey bg-transparent rounded-pill-start border-end-0">
                      <img src={IconSearch} alt="icon-search" aria-label="button search" />
                    </button>
                    <input type="text" className="form-control rounded-pill-end border-start-0" placeholder="Search" />
                  </div>
                  <div className="data-notfound align-self-center mt-10">
                    <img src={IconProdcutsNotFound} width="165px" height="147px" alt="icon-product" />
                  </div>
                  <p className="text-black-16px text-black-50 pt-5 text-center">You don't have a product yet</p>
                </div>
              </div>
              <div
                className="tab-pane h-min-60vh fade"
                id="tab_processed"
                role="tabpanel"
                aria-labelledby="nav-contact-tab"
              >
                <div className="d-flex flex-column pt-3">
                  <div className="input-group input-group-sm input-group-myorder">
                    <button className="input-group-text border-grey bg-transparent rounded-pill-start border-end-0">
                      <img src={IconSearch} alt="icon-search" aria-label="button search" />
                    </button>
                    <input type="text" className="form-control rounded-pill-end border-start-0" placeholder="Search" />
                  </div>
                  <div className="data-notfound align-self-center mt-10">
                    <img src={IconProdcutsNotFound} width="165px" height="147px" alt="icon-product" />
                  </div>
                  <p className="text-black-16px text-black-50 pt-5 text-center">You don't have a product yet</p>
                </div>
              </div>
              <div className="tab-pane h-min-60vh fade" id="tab_sent" role="tabpanel" aria-labelledby="nav-contact-tab">
                <div className="d-flex flex-column pt-3">
                  <div className="input-group input-group-sm input-group-myorder">
                    <button className="input-group-text border-grey bg-transparent rounded-pill-start border-end-0">
                      <img src={IconSearch} alt="icon-search" aria-label="button search" />
                    </button>
                    <input type="text" className="form-control rounded-pill-end border-start-0" placeholder="Search" />
                  </div>
                  <div className="data-notfound align-self-center mt-10">
                    <img src={IconProdcutsNotFound} width="165px" height="147px" alt="icon-product" />
                  </div>
                  <p className="text-black-16px text-black-50 pt-5 text-center">You don't have a product yet</p>
                </div>
              </div>
              <div
                className="tab-pane h-min-60vh fade"
                id="tab_completed"
                role="tabpanel"
                aria-labelledby="nav-contact-tab"
              >
                <div className="d-flex flex-column pt-3">
                  <div className="input-group input-group-sm input-group-myorder">
                    <button className="input-group-text border-grey bg-transparent rounded-pill-start border-end-0">
                      <img src={IconSearch} alt="icon-search" aria-label="button search" />
                    </button>
                    <input type="text" className="form-control rounded-pill-end border-start-0" placeholder="Search" />
                  </div>
                  <div className="data-notfound align-self-center mt-10">
                    <img src={IconProdcutsNotFound} width="165px" height="147px" alt="icon-product" />
                  </div>
                  <p className="text-black-16px text-black-50 pt-5 text-center">You don't have a product yet</p>
                </div>
              </div>
              <div
                className="tab-pane h-min-60vh fade show active"
                id="tab_order_cancel"
                role="tabpanel"
                aria-labelledby="nav-contact-tab"
              >
                <div className="d-flex flex-column pt-3">
                  <div className="input-group input-group-sm input-group-myorder">
                    <button className="input-group-text border-grey bg-transparent rounded-pill-start border-end-0">
                      <img src={IconSearch} alt="icon-search" aria-label="button search" />
                    </button>
                    <input type="text" className="form-control rounded-pill-end border-start-0" placeholder="Search" />
                  </div>
                  <div className="data-notfound align-self-center mt-10">
                    <img src={IconProdcutsNotFound} width="165px" height="147px" alt="icon-product" />
                  </div>
                  <p className="text-black-16px text-black-50 pt-5 text-center">You don't have a product yet</p>
                </div>
              </div>
            </div>
          </Fragment>
        }
      />
    </Container>
  );
};

export default MyOrderCancel;
