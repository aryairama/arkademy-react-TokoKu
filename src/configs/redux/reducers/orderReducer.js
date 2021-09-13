const initialState = {
  btnBuy: false,
  payment: '',
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BTN_BUY':
      return {
        ...state,
        btnBuy: action.payload,
      };
    case 'SET_PAYMENT':
      return {
        ...state,
        payment: action.payload,
      };
    default:
      return state;
  }
};

export default orderReducer;
