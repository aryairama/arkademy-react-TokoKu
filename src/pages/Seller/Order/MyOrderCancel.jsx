/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useState, useEffect } from 'react';
import { Container, InputGroup, NotFound, buttonItemRender } from '../../../components/base';
import { ContentCard } from '../../../components/module';
import iconNotfound from '../../../assets/img/icon/undraw_respond_8wjt_1.svg';
import searchIcon from '../../../assets/img/icon/Search.svg';
import arrowUpDOwn from '../../../assets/img/icon/arrow_up_down.svg';
import { Link } from 'react-router-dom';
import { getOrderStoreAll } from '../../../configs/redux/actions/orderAction';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';

const MyOrderCancel = () => {
  const dispatch = useDispatch();
  const [pageAllOrder, setPageAllOrder] = useState(1);
  const [pageOrderProcessed, setpPageOrderProcessed] = useState(1);
  const [pageOrderSent, setpPageOrderSent] = useState(1);
  const [pageOrderCompleted, setpPageOrderCompleted] = useState(1);
  const [pageOrderCancel, setpPageOrderCancel] = useState(1);
  const [orderAll, setOrderAll] = useState({});
  const [orderProcessed, setOrderProcessed] = useState({});
  const [orderSent, setOrderSent] = useState({});
  const [orderCompleted, setOrderCompleted] = useState({});
  const [orderCancel, setOrderCancel] = useState({});
  const [search, setSearch] = useState({
    allItems: '',
    processed: '',
    sent: '',
    completed: '',
    cancel: '',
  });
  const [sort, setSort] = useState({
    allItems: true,
    processed: true,
    sent: true,
    completed: true,
    cancel: true,
  });
  const [limit, setLimit] = useState({
    allItems: 5,
    processed: 5,
    sent: 5,
    completed: 5,
    cancel: 5,
  });
  const [fieldOrder, setFieldOrder] = useState({
    allItems: 'order_id',
    processed: 'order_id',
    sent: 'order_id',
    completed: 'order_id',
    cancel: 'order_id',
  });
  useEffect(async () => {
    const { data, pagination } = await dispatch(
      getOrderStoreAll(
        '',
        search.allItems,
        sort.allItems ? 'DESC' : 'ASC',
        fieldOrder.allItems,
        limit.allItems,
        pageAllOrder
      )
    );
    setOrderAll({ data, pagination });
  }, [search.allItems, sort.allItems, fieldOrder.allItems, limit.allItems, pageAllOrder]);
  useEffect(async () => {
    const { data, pagination } = await dispatch(
      getOrderStoreAll(
        'processed',
        search.processed,
        sort.processed ? 'DESC' : 'ASC',
        fieldOrder.processed,
        limit.processed,
        pageOrderProcessed
      )
    );
    setOrderProcessed({ data, pagination });
  }, [search.processed, sort.processed, fieldOrder.processed, limit.processed, pageOrderProcessed]);
  useEffect(async () => {
    const { data, pagination } = await dispatch(
      getOrderStoreAll('sent', search.sent, sort.sent ? 'DESC' : 'ASC', fieldOrder.sent, limit.sent, pageOrderSent)
    );
    setOrderSent({ data, pagination });
  }, [search.sent, sort.sent, fieldOrder.sent, limit.sent, pageOrderSent]);
  useEffect(async () => {
    const { data, pagination } = await dispatch(
      getOrderStoreAll(
        'completed',
        search.completed,
        sort.completed ? 'DESC' : 'ASC',
        fieldOrder.completed,
        limit.completed,
        pageOrderCompleted
      )
    );
    setOrderCompleted({ data, pagination });
  }, [search.completed, sort.completed, fieldOrder.completed, limit.completed, pageOrderCompleted]);
  useEffect(async () => {
    const { data, pagination } = await dispatch(
      getOrderStoreAll(
        'cancel',
        search.cancel,
        sort.cancel ? 'DESC' : 'ASC',
        fieldOrder.cancel,
        limit.cancel,
        pageOrderCancel
      )
    );
    setOrderCancel({ data, pagination });
  }, [search.cancel, sort.cancel, fieldOrder.cancel, limit.cancel, pageOrderCancel]);
  const searchHandler = (e) => setSearch((oldVal) => ({ ...oldVal, [e.target.name]: e.target.value }));
  const limitHandler = (e) => setLimit((oldVal) => ({ ...oldVal, [e.target.name]: e.target.value }));
  const sortHandler = (value, name) => setSort((oldVal) => ({ ...oldVal, [name]: value }));
  const fieldOrderHandler = (value, name) => setFieldOrder((oldVal) => ({ ...oldVal, [name]: value }));
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
                {/* <button
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
                </button> */}
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
              <div
                className="tab-pane h-min-60vh fade"
                id="tab_all_items"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
              >
                <div className="d-flex flex-column pt-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <InputGroup
                      leftButton="true"
                      styleInputGroup="input-group-sm input-group-myorder"
                      styleButton="border-grey bg-transparent rounded-pill-start border-end-0"
                      styleInput="rounded-pill-end border-start-0"
                      textButton={<img src={searchIcon} alt="icon-search" aria-label="button search" />}
                      name="allItems"
                      type="text"
                      placeholder="Search"
                      onChange={searchHandler}
                      value={search.allItems}
                    />
                    <select
                      name="allItems"
                      id="limitAllItems"
                      className="form-select form-select-sm h-50 w-25 mt-3"
                      defaultValue={limit.allItems}
                      onChange={limitHandler}
                    >
                      <option value="5">5</option>
                      <option value="10">10</option>
                      <option value="25">25</option>
                      <option value="50">50</option>
                      <option value="100">100</option>
                    </select>
                  </div>
                  <div className="table-responsive-md pt-3">
                    <table className="table table-secondary">
                      <thead>
                        <tr>
                          <th>Invoice number</th>
                          <th>Status</th>
                          <th>Payment</th>
                          <th
                            className="text-black-50"
                            onClick={() => {
                              fieldOrderHandler('total_price', 'allItems');
                              sortHandler(!sort.allItems, 'allItems');
                            }}
                          >
                            Total price
                            <img className="img-fluid" src={arrowUpDOwn} alt="arrow-up-down" />
                          </th>
                          <th>Created at</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {orderAll?.data && orderAll?.data?.length > 0 ? (
                          <tr></tr>
                        ) : (
                          <NotFound colSpan={6} icon={iconNotfound} />
                        )}
                        {orderAll?.data?.map((value, index) => (
                          <tr key={index}>
                            <td>{value.invoice_number}</td>
                            <td>{value.status}</td>
                            <td>{value.payment}</td>
                            <td>{value.total_price}</td>
                            <td>{moment(value.created_at).format('llll')}</td>
                            <td>
                              <Link
                                to={`/seller/myorder/${value.order_id}`}
                                className="btn btn-sm btn-outline-orange mx-1 text-decoration-none"
                              >
                                View
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot>
                        <tr>
                          <td colSpan="6">
                            {orderAll?.pagination && (
                              <Pagination
                                current={pageAllOrder}
                                total={orderAll?.pagination.countData}
                                pageSize={orderAll?.pagination.limit ? orderAll?.pagination.limit : 1}
                                itemRender={buttonItemRender}
                                onChange={(current, pageSize) => setPageAllOrder(current)}
                              />
                            )}
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
              </div>
              {/* <div
                className="tab-pane h-min-60vh fade"
                id="tab_get_paid"
                role="tabpanel"
                aria-labelledby="nav-profile-tab"
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
              </div> */}
              <div
                className="tab-pane h-min-60vh fade"
                id="tab_processed"
                role="tabpanel"
                aria-labelledby="nav-contact-tab"
              >
                <div className="d-flex flex-column pt-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <InputGroup
                      leftButton="true"
                      styleInputGroup="input-group-sm input-group-myorder"
                      styleButton="border-grey bg-transparent rounded-pill-start border-end-0"
                      styleInput="rounded-pill-end border-start-0"
                      textButton={<img src={searchIcon} alt="icon-search" aria-label="button search" />}
                      name="processed"
                      type="text"
                      placeholder="Search"
                      onChange={searchHandler}
                      value={search.processed}
                    />
                    <select
                      name="processed"
                      id="limitAllItems"
                      className="form-select form-select-sm h-50 w-25 mt-3"
                      defaultValue={limit.processed}
                      onChange={limitHandler}
                    >
                      <option value="5">5</option>
                      <option value="10">10</option>
                      <option value="25">25</option>
                      <option value="50">50</option>
                      <option value="100">100</option>
                    </select>
                  </div>
                  <div className="table-responsive-md pt-3">
                    <table className="table table-secondary">
                      <thead>
                        <tr>
                          <th>Invoice number</th>
                          <th>Status</th>
                          <th>Payment</th>
                          <th
                            className="text-black-50"
                            onClick={() => {
                              fieldOrderHandler('total_price', 'processed');
                              sortHandler(!sort.processed, 'processed');
                            }}
                          >
                            Total price
                            <img className="img-fluid" src={arrowUpDOwn} alt="arrow-up-down" />
                          </th>
                          <th>Created at</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {orderProcessed?.data && orderProcessed?.data?.length > 0 ? (
                          <tr></tr>
                        ) : (
                          <NotFound colSpan={6} icon={iconNotfound} />
                        )}
                        {orderProcessed?.data?.map((value, index) => (
                          <tr key={index}>
                            <td>{value.invoice_number}</td>
                            <td>{value.status}</td>
                            <td>{value.payment}</td>
                            <td>{value.total_price}</td>
                            <td>{moment(value.created_at).format('llll')}</td>
                            <td>
                              <Link
                                to={`/seller/myorder/${value.order_id}`}
                                className="btn btn-sm btn-outline-orange mx-1 text-decoration-none"
                              >
                                View
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot>
                        <tr>
                          <td colSpan="6">
                            {orderProcessed?.pagination && (
                              <Pagination
                                current={pageAllOrder}
                                total={orderProcessed?.pagination.countData}
                                pageSize={orderProcessed?.pagination.limit ? orderProcessed?.pagination.limit : 1}
                                itemRender={buttonItemRender}
                                onChange={(current, pageSize) => setpPageOrderProcessed(current)}
                              />
                            )}
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
              </div>
              <div className="tab-pane h-min-60vh fade" id="tab_sent" role="tabpanel" aria-labelledby="nav-contact-tab">
                <div className="d-flex flex-column pt-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <InputGroup
                      leftButton="true"
                      styleInputGroup="input-group-sm input-group-myorder"
                      styleButton="border-grey bg-transparent rounded-pill-start border-end-0"
                      styleInput="rounded-pill-end border-start-0"
                      textButton={<img src={searchIcon} alt="icon-search" aria-label="button search" />}
                      name="sent"
                      type="text"
                      placeholder="Search"
                      onChange={searchHandler}
                      value={search.sent}
                    />
                    <select
                      name="sent"
                      id="limitAllItems"
                      className="form-select form-select-sm h-50 w-25 mt-3"
                      defaultValue={limit.sent}
                      onChange={limitHandler}
                    >
                      <option value="5">5</option>
                      <option value="10">10</option>
                      <option value="25">25</option>
                      <option value="50">50</option>
                      <option value="100">100</option>
                    </select>
                  </div>
                  <div className="table-responsive-md pt-3">
                    <table className="table table-secondary">
                      <thead>
                        <tr>
                          <th>Invoice number</th>
                          <th>Status</th>
                          <th>Payment</th>
                          <th
                            className="text-black-50"
                            onClick={() => {
                              fieldOrderHandler('total_price', 'sent');
                              sortHandler(!sort.sent, 'sent');
                            }}
                          >
                            Total price
                            <img className="img-fluid" src={arrowUpDOwn} alt="arrow-up-down" />
                          </th>
                          <th>Created at</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {orderSent?.data && orderSent?.data?.length > 0 ? (
                          <tr></tr>
                        ) : (
                          <NotFound colSpan={6} icon={iconNotfound} />
                        )}
                        {orderSent?.data?.map((value, index) => (
                          <tr key={index}>
                            <td>{value.invoice_number}</td>
                            <td>{value.status}</td>
                            <td>{value.payment}</td>
                            <td>{value.total_price}</td>
                            <td>{moment(value.created_at).format('llll')}</td>
                            <td>
                              <Link
                                to={`/seller/myorder/${value.order_id}`}
                                className="btn btn-sm btn-outline-orange mx-1 text-decoration-none"
                              >
                                View
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot>
                        <tr>
                          <td colSpan="6">
                            {orderSent?.pagination && (
                              <Pagination
                                current={pageAllOrder}
                                total={orderSent?.pagination.countData}
                                pageSize={orderSent?.pagination.limit ? orderSent?.pagination.limit : 1}
                                itemRender={buttonItemRender}
                                onChange={(current, pageSize) => setpPageOrderSent(current)}
                              />
                            )}
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane h-min-60vh fade"
                id="tab_completed"
                role="tabpanel"
                aria-labelledby="nav-contact-tab"
              >
                <div className="d-flex flex-column pt-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <InputGroup
                      leftButton="true"
                      styleInputGroup="input-group-sm input-group-myorder"
                      styleButton="border-grey bg-transparent rounded-pill-start border-end-0"
                      styleInput="rounded-pill-end border-start-0"
                      textButton={<img src={searchIcon} alt="icon-search" aria-label="button search" />}
                      name="completed"
                      type="text"
                      placeholder="Search"
                      onChange={searchHandler}
                      value={search.completed}
                    />
                    <select
                      name="completed"
                      id="limitAllItems"
                      className="form-select form-select-sm h-50 w-25 mt-3"
                      defaultValue={limit.completed}
                      onChange={limitHandler}
                    >
                      <option value="5">5</option>
                      <option value="10">10</option>
                      <option value="25">25</option>
                      <option value="50">50</option>
                      <option value="100">100</option>
                    </select>
                  </div>
                  <div className="table-responsive-md pt-3">
                    <table className="table table-secondary">
                      <thead>
                        <tr>
                          <th>Invoice number</th>
                          <th>Status</th>
                          <th>Payment</th>
                          <th
                            className="text-black-50"
                            onClick={() => {
                              fieldOrderHandler('total_price', 'completed');
                              sortHandler(!sort.completed, 'completed');
                            }}
                          >
                            Total price
                            <img className="img-fluid" src={arrowUpDOwn} alt="arrow-up-down" />
                          </th>
                          <th>Created at</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {orderCompleted?.data && orderCompleted?.data?.length > 0 ? (
                          <tr></tr>
                        ) : (
                          <NotFound colSpan={6} icon={iconNotfound} />
                        )}
                        {orderCompleted?.data?.map((value, index) => (
                          <tr key={index}>
                            <td>{value.invoice_number}</td>
                            <td>{value.status}</td>
                            <td>{value.payment}</td>
                            <td>{value.total_price}</td>
                            <td>{moment(value.created_at).format('llll')}</td>
                            <td>
                              <Link
                                to={`/seller/myorder/${value.order_id}`}
                                className="btn btn-sm btn-outline-orange mx-1 text-decoration-none"
                              >
                                View
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot>
                        <tr>
                          <td colSpan="6">
                            {orderCompleted?.pagination && (
                              <Pagination
                                current={pageAllOrder}
                                total={orderCompleted?.pagination.countData}
                                pageSize={orderCompleted?.pagination.limit ? orderCompleted?.pagination.limit : 1}
                                itemRender={buttonItemRender}
                                onChange={(current, pageSize) => setpPageOrderCompleted(current)}
                              />
                            )}
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane h-min-60vh fade show active"
                id="tab_order_cancel"
                role="tabpanel"
                aria-labelledby="nav-contact-tab"
              >
                <div className="d-flex flex-column pt-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <InputGroup
                      leftButton="true"
                      styleInputGroup="input-group-sm input-group-myorder"
                      styleButton="border-grey bg-transparent rounded-pill-start border-end-0"
                      styleInput="rounded-pill-end border-start-0"
                      textButton={<img src={searchIcon} alt="icon-search" aria-label="button search" />}
                      name="cancel"
                      type="text"
                      placeholder="Search"
                      onChange={searchHandler}
                      value={search.cancel}
                    />
                    <select
                      name="cancel"
                      id="limitAllItems"
                      className="form-select form-select-sm h-50 w-25 mt-3"
                      defaultValue={limit.cancel}
                      onChange={limitHandler}
                    >
                      <option value="5">5</option>
                      <option value="10">10</option>
                      <option value="25">25</option>
                      <option value="50">50</option>
                      <option value="100">100</option>
                    </select>
                  </div>
                  <div className="table-responsive-md pt-3">
                    <table className="table table-secondary">
                      <thead>
                        <tr>
                          <th>Invoice number</th>
                          <th>Status</th>
                          <th>Payment</th>
                          <th
                            className="text-black-50"
                            onClick={() => {
                              fieldOrderHandler('total_price', 'cancel');
                              sortHandler(!sort.cancel, 'cancel');
                            }}
                          >
                            Total price
                            <img className="img-fluid" src={arrowUpDOwn} alt="arrow-up-down" />
                          </th>
                          <th>Created at</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {orderCancel?.data && orderCancel?.data?.length > 0 ? (
                          <tr></tr>
                        ) : (
                          <NotFound colSpan={6} icon={iconNotfound} />
                        )}
                        {orderCancel?.data?.map((value, index) => (
                          <tr key={index}>
                            <td>{value.invoice_number}</td>
                            <td>{value.status}</td>
                            <td>{value.payment}</td>
                            <td>{value.total_price}</td>
                            <td>{moment(value.created_at).format('llll')}</td>
                            <td>
                              <Link
                                to={`/seller/myorder/${value.order_id}`}
                                className="btn btn-sm btn-outline-orange mx-1 text-decoration-none"
                              >
                                View
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot>
                        <tr>
                          <td colSpan="6">
                            {orderCancel?.pagination && (
                              <Pagination
                                current={pageAllOrder}
                                total={orderCancel?.pagination.countData}
                                pageSize={orderCancel?.pagination.limit ? orderCancel?.pagination.limit : 1}
                                itemRender={buttonItemRender}
                                onChange={(current, pageSize) => setpPageOrderCancel(current)}
                              />
                            )}
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
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
