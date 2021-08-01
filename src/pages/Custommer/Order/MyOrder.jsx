import React, { Fragment } from 'react';
import { Container } from '../../../components/base';
import { ContentCard } from '../../../components/module';
const MyOrder = () => {
  return (
    <Container className="mb-5">
      <ContentCard
        cardBody={
          <Fragment>
            <div className="text-black-20px fw-bold">My order</div>
            <nav>
              <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <button
                  className="nav-link nav-tab-orange active ps-0"
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
                  id="not_yet_paid"
                  data-bs-toggle="tab"
                  data-bs-target="#tab_not_yet_paid"
                  type="button"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                >
                  Not yet paid
                </button>
                <button
                  className="nav-link nav-tab-orange"
                  id="packed"
                  data-bs-toggle="tab"
                  data-bs-target="#tab_packed"
                  type="button"
                  role="tab"
                  aria-controls="nav-contact"
                  aria-selected="false"
                >
                  Packed
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
                  className="nav-link nav-tab-orange"
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
              <div
                className="tab-pane h-min-60vh fade show active"
                id="tab_all_items"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
              ></div>
              <div
                className="tab-pane h-min-60vh fade"
                id="tab_not_yet_paid"
                role="tabpanel"
                aria-labelledby="nav-profile-tab"
              ></div>
              <div
                className="tab-pane h-min-60vh fade"
                id="tab_packed"
                role="tabpanel"
                aria-labelledby="nav-contact-tab"
              ></div>
              <div
                className="tab-pane h-min-60vh fade"
                id="tab_sent"
                role="tabpanel"
                aria-labelledby="nav-contact-tab"
              ></div>
              <div
                className="tab-pane h-min-60vh fade"
                id="tab_completed"
                role="tabpanel"
                aria-labelledby="nav-contact-tab"
              ></div>
              <div
                className="tab-pane h-min-60vh fade"
                id="tab_order_cancel"
                role="tabpanel"
                aria-labelledby="nav-contact-tab"
              ></div>
            </div>
          </Fragment>
        }
      />
    </Container>
  );
};

export default MyOrder;
