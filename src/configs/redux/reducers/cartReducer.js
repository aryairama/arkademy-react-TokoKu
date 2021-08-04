const initialState = {
  carts: [],
  total: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CART':
      return {
        ...state,
        carts: action.payload,
      };
    case 'TOTAL':
      return {
        ...state,
        total: action.payload,
      };
    default:
      return state;
  }
};

export default cartReducer;
