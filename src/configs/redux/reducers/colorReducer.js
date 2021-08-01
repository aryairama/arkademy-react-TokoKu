const initialState = {
  colors: {},
};

const colorReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_COLORS':
      return {
        ...state,
        colors: action.payload,
      };
    default:
      return state;
  }
};

export default colorReducer;
