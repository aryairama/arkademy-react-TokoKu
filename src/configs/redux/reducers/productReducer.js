const initialState = {
  newProducts: {},
  popularProducts: {},
  detailProduct: {},
  productsById:{}
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_PRODUCTS':
      return {
        ...state,
        newProducts: action.payload,
      };
    case 'POPULAR_PRODUCTS':
      return {
        ...state,
        popularProducts: action.payload,
      };
    case 'DETAIL_PRODUCT':
      return {
        ...state,
        detailProduct: action.payload,
      };
    case 'PRODUCT_BY_ID':
      return {
        ...state,
        productsById: action.payload
      };
    default:
      return state;
  }
};

export default productReducer;
