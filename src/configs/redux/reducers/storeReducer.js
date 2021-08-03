const initialState = {
  storeProducts: {},
};

const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'STORE_PRODUCTS':
      return {
        ...state,
        storeProducts: action.payload,
      };
    default:
      return state;
  }
};

export default storeReducer;
