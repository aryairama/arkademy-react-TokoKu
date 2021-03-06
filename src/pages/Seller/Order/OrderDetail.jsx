/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Container } from '../../../components/base';
import { ContentCard } from '../../../components/module';
import { getOrderDetail, updateOrderStatus } from '../../../configs/redux/actions/orderAction';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import moment from 'moment';

const OrderDetail = (props) => {
  const [reload, setReload] = useState(false);
  const [cancel, setCancel] = useState(false);
  const [orderDetail, setOrderDetail] = useState({});
  const { id } = useParams();
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(async () => {
    const data = await dispatch(getOrderDetail(id, props.history, '/seller/myorder'));
    setOrderDetail(data);
  }, [id, reload]);
  useEffect(() => {
    if (Object.keys(orderDetail).length > 0) {
      if (user.store_id !== orderDetail.store_id) {
        props.history.push('/seller/myorder');
      }
      if (orderDetail.status === 'submit' || orderDetail.status === 'processed' || orderDetail.status === 'sent') {
        setCancel(true);
      } else {
        setCancel(false);
      }
    }
  }, [id, orderDetail, reload]);

  return (
    <>
      <Container className="mb-5">
        <ContentCard
          cardHeader={<div className="text-black-20px fw-bold">Order Detail</div>}
          cardBody={
            <>
              <div className="table table-responsive-md">
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <td className="fw-bold">Invoice Number</td>
                      <td>{orderDetail?.invoice_number}</td>
                    </tr>
                    <tr>
                      <td className="fw-bold">Payment</td>
                      <td>{orderDetail?.payment}</td>
                    </tr>
                    <tr>
                      <td className="fw-bold">Status</td>
                      <td>{orderDetail?.status}</td>
                    </tr>
                    <tr>
                      <td className="fw-bold">Total Price</td>
                      <td>Rp.{orderDetail?.total_price}</td>
                    </tr>
                    <tr>
                      <td className="fw-bold">Created at</td>
                      <td>{moment(orderDetail?.created_at).format('llll')}</td>
                    </tr>
                    <tr>
                      <td className="fw-bold">Product</td>
                      <td>
                        <ul>
                          {orderDetail?.products?.map((product, index) => (
                            <li key={index} className="d-flex flex-row align-items-center">
                              <img
                                style={{ width: '103px', height: '69px', objectFit: 'contain' }}
                                src={`${process.env.REACT_APP_API_URL}/${product.img_product}`}
                                alt=""
                              />
                              <p>{product.product_name}</p>
                              <p className="ps-2">x{product.quantity}</p>
                              <p className="ps-2">({product.color_name})</p>
                            </li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>Address</td>
                      <td>
                        {Object.keys(orderDetail).length > 0 && Object.keys(orderDetail?.address).length > 0 && (
                          <>
                            <div className="text-black-16px font-semi-bold lh-lg">{orderDetail?.address?.label}</div>
                            <div className="text-black-14px font-semi-bold lh-lg">
                              {orderDetail?.address?.recipients_name} ({orderDetail?.address?.phone_number})
                            </div>
                            <p className="text-black-14px">
                              {orderDetail?.address?.address}, [{orderDetail?.address?.city_or_subdistrict}]
                              {orderDetail?.address?.postal_code}
                            </p>
                          </>
                        )}
                      </td>
                    </tr>
                    {!(orderDetail.status === 'completed' || orderDetail.status === 'cancel') && (
                      <tr>
                        <td>Action</td>
                        <td className="text-center">
                          {cancel && (
                            <div
                              onClick={async () => {
                                await dispatch(updateOrderStatus(orderDetail.order_id, 'cancel'));
                                setReload(!reload);
                              }}
                              style={{ cursor: 'pointer' }}
                              className="badge bg-danger p-2 mx-2"
                            >
                              Cancel
                            </div>
                          )}
                          {orderDetail.status === 'submit' && (
                            <div
                              onClick={async () => {
                                await dispatch(updateOrderStatus(orderDetail.order_id, 'processed'));
                                setReload(!reload);
                              }}
                              style={{ cursor: 'pointer' }}
                              className="badge bg-orange p-2 mx-2"
                            >
                              Processed
                            </div>
                          )}
                          {orderDetail.status === 'processed' && (
                            <div
                              onClick={async () => {
                                await dispatch(updateOrderStatus(orderDetail.order_id, 'sent'));
                                setReload(!reload);
                              }}
                              style={{ cursor: 'pointer' }}
                              className="badge bg-primary p-2 mx-2"
                            >
                              Sent
                            </div>
                          )}
                          {orderDetail.status === 'sent' && (
                            <div
                              onClick={async () => {
                                await dispatch(updateOrderStatus(orderDetail.order_id, 'completed'));
                                setReload(!reload);
                              }}
                              style={{ cursor: 'pointer' }}
                              className="badge bg-success p-2 mx-2"
                            >
                              Completed
                            </div>
                          )}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </>
          }
        />
      </Container>
    </>
  );
};

export default OrderDetail;
