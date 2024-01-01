import { actionTypes } from "./../actionTypes";
const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  searchParameters: "",
  filterItem: "popular",
};

const productReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_LOADİNG:
      return { ...state, isLoading: true };

    case actionTypes.SET_ERROR:
      return { ...state, isLoading: false, isError: true };
    case actionTypes.GET_PRODUCTS:
      return { ...state, isLoading: false, isError: false, products: payload };

    case actionTypes.FILTER_PARAMETER:
      return { ...state, filterItem: payload };

    case actionTypes.SEARCH_PARAMETER:
      return { ...state, searchParameters: payload };

    default:
      return state;
  }
};

export default productReducers;
