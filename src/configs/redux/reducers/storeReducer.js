const initialState = {
  storeProducts: {},
  detailStore: {},
};

const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'STORE_PRODUCTS':
      return {
        ...state,
        storeProducts: action.payload,
      };
    case 'DETAIL_STORE':
      return {
        ...state,
        detailStore: action.payload,
      };
    default:
      return state;
  }
};

export default storeReducer;
