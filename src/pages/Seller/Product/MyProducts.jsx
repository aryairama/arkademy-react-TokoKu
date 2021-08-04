/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect, useState } from 'react';
import { Container, InputGroup, NotFound, buttonItemRender, Button } from '../../../components/base/index';
import { ContentCard } from '../../../components/module/index';
import { getStoreProducts } from '../../../configs/redux/actions/storeAction';
import { deleteProduct } from '../../../configs/redux/actions/productAction';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import iconNotfound from '../../../assets/img/icon/undraw_opinion_dxp8_1.svg';
import arrowUpDOwn from '../../../assets/img/icon/arrow_up_down.svg';
import searchIcon from '../../../assets/img/icon/Search.svg';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';

const MyProducts = () => {
  const {
    store: { storeProducts },
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState({});
  const [productAllItems, setProductAllItems] = useState([]);
  const [fieldOrder, setFieldOrder] = useState('product_id');
  const [search, setSearch] = useState({
    allItems: '',
  });
  const [sort, setSort] = useState({
    allItems: true,
  });
  const [limit, setLimit] = useState({
    allItems: 10,
  });
  const limitHandler = (e) => {
    setLimit((oldValue) => {
      return { ...oldValue, [e.target.name]: e.target.value };
    });
  };
  const searchHandler = (e) => {
    setSearch((oldValue) => {
      return { ...oldValue, [e.target.name]: e.target.value };
    });
  };
  const sortHandler = (value, name) => {
    setSort((oldValue) => {
      return { ...oldValue, [name]: value };
    });
  };
  const order = sort.allItems ? 'DESC' : 'ASC';
  useEffect(async () => {
    dispatch(getStoreProducts('STORE_PRODUCTS', search.allItems, order, fieldOrder, limit.allItems, page));
  }, [search.allItems, sort.allItems, limit.allItems, fieldOrder, page]);
  useEffect(() => {
    if (storeProducts.data) {
      setProductAllItems(storeProducts.data);
    }
    if (storeProducts.pagination) {
      setPagination(storeProducts.pagination);
    }
  }, [storeProducts.data, storeProducts.pagination]);
  const paginationHandler = (current, pageSize) => {
    setPage(current);
  };

  const handleDelete = (id) => {
    swal({
      title: 'Are you sure?',
      text: 'Deleted data cannot be recovered',
      icon: 'warning',
      buttons: {
        cancel: {
          text: 'Cancel',
          value: null,
          visible: true,
        },
        delete: {
          text: 'Delete',
          value: true,
          visible: true,
          className: 'bg-danger text-white',
        },
      },
    }).then(async (value) => {
      if (value) {
        await dispatch(deleteProduct(id));
        dispatch(getStoreProducts('STORE_PRODUCTS', search.allItems, order, fieldOrder, limit.allItems, page));
        if (storeProducts.data) {
          setProductAllItems(storeProducts.data);
        }
        if (storeProducts.pagination) {
          setPagination(storeProducts.pagination);
        }
        swal('Success', 'Data deleted successfully', 'success');
      }
    });
  };
  return (
    <Fragment>
      <Container>
        <ContentCard
          cardBody={
            <Fragment>
              <div className="text-black-20px fw-bold">My product</div>
              <div className="row">
                <div className="col-12">
                  <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                      <button
                        className="nav-link nav-tab-orange active ps-0"
                        id="all_items"
                        data-bs-toggle="tab"
                        data-bs-target="#tab_all_items"
                        type="button"
                      >
                        All items
                      </button>
                      <button
                        className="nav-link nav-tab-orange"
                        id="sold_out"
                        data-bs-toggle="tab"
                        data-bs-target="#tab_sold_out"
                        type="button"
                      >
                        Sold out
                      </button>
                      <button
                        className="nav-link nav-tab-orange"
                        id="archived"
                        data-bs-toggle="tab"
                        data-bs-target="#tab_archived"
                        type="button"
                      >
                        Archived
                      </button>
                    </div>
                  </nav>
                  <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane h-min-60vh fade show active" id="tab_all_items">
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
                                <th
                                  className="text-black-50"
                                  onClick={() => {
                                    setFieldOrder('name');
                                    sortHandler(!sort.allItems, 'allItems');
                                  }}
                                >
                                  Product name <img className="img-fluid" src={arrowUpDOwn} alt="arrow-up-down" />
                                </th>
                                <th
                                  className="text-black-50"
                                  onClick={() => {
                                    setFieldOrder('price');
                                    sortHandler(!sort.allItems, 'allItems');
                                  }}
                                >
                                  Price <img className="img-fluid" src={arrowUpDOwn} alt="arrow-up-down" />
                                </th>
                                <th
                                  className="text-black-50"
                                  onClick={() => {
                                    setFieldOrder('quantity');
                                    sortHandler(!sort.allItems, 'allItems');
                                  }}
                                >
                                  Stock <img className="img-fluid" src={arrowUpDOwn} alt="arrow-up-down" />
                                </th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              {productAllItems.length < 1 && <NotFound icon={iconNotfound} />}
                              {productAllItems.map((value, index) => (
                                <tr key={index}>
                                  <td>{value.name}</td>
                                  <td>{parseInt(value.price, 10)}</td>
                                  <td>{value.quantity}</td>
                                  <td>
                                    <Link
                                      to={`/seller/updateproducts/${value.product_id}`}
                                      className="btn btn-sm btn-outline-orange mx-1 text-decoration-none"
                                    >
                                      Edit
                                    </Link>
                                    <Button
                                      className="btn btn-sm btn-outline-orange mx-1"
                                      onClick={() => handleDelete(value.product_id)}
                                    >
                                      Delete
                                    </Button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                            <tfoot>
                              <tr>
                                <td colSpan="4">
                                  {pagination && (
                                    <Pagination
                                      current={page}
                                      total={pagination.countData}
                                      pageSize={pagination.limit ? pagination.limit : 1}
                                      itemRender={buttonItemRender}
                                      onChange={paginationHandler}
                                    />
                                  )}
                                </td>
                              </tr>
                            </tfoot>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane h-min-60vh fade" id="tab_sold_out"></div>
                    <div className="tab-pane h-min-60vh fade" id="tab_archived"></div>
                  </div>
                </div>
              </div>
            </Fragment>
          }
        />
      </Container>
    </Fragment>
  );
};

export default MyProducts;
