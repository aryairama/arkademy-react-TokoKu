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
    const data = await dispatch(getOrderDetail(id, props.history));
    setOrderDetail(data);
  }, [id, reload]);
  useEffect(() => {
    if (Object.keys(orderDetail).length > 0) {
      if (user.user_id !== orderDetail.user_id) {
        props.history.push('/custommer/myorder');
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
                    {cancel && (
                      <tr>
                        <td>Action</td>
                        <td className="text-center">
                          <div
                            onClick={async() => {
                              await dispatch(updateOrderStatus(orderDetail.order_id, 'cancel'));
                              setReload(!reload);
                            }}
                            style={{ cursor: 'pointer' }}
                            className="badge bg-danger p-2"
                          >
                            Cancel
                          </div>
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
