const initialState = {
  categories: {},
  detailCategory: {},
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CATEGORIES':
      return {
        ...state,
        categories: action.payload,
      };
    case 'DETAIL_CATEGORY':
      return {
        ...state,
        detailCategory: action.payload,
      };
    default:
      return state;
  }
};

export default categoryReducer;
