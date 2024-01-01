import axios from "axios";
import { actionTypes } from "./../actionTypes";

export const searchParameter = (value) => (dispatch) => {
  axios
    .get("https://private-c5f8e8-kocakilyas.apiary-mock.com/api")
    .then((res) => {
      dispatch({ type: actionTypes.SEARCH_PARAMETER, payload: value });

      if (value === "") {
        dispatch({
          type: actionTypes.GET_PRODUCTS,
          payload: res.data.products,
        });
      } else {
        const newProducts = [];
        res.data.products.map((x) =>
          x.name.toLowerCase().search(value) > -1 ? newProducts.push(x) : null
        );

        dispatch({ type: actionTypes.GET_PRODUCTS, payload: newProducts });
      }
    })
    .catch((err) => dispatch({ type: actionTypes.SET_ERROR }));
};

export const getProduct = () => (dispatch) => {
  dispatch({ type: actionTypes.SET_LOADİNG });
  axios
    .get("https://private-c5f8e8-kocakilyas.apiary-mock.com/api")
    .then((res) =>
      dispatch({ type: actionTypes.GET_PRODUCTS, payload: res.data.products })
    )
    .catch((err) => dispatch({ type: actionTypes.SET_ERROR }));
};

export const filterParameter = (category) => (dispatch) => {
  axios
    .get("https://private-c5f8e8-kocakilyas.apiary-mock.com/api")
    .then((res) => {
      dispatch({ type: actionTypes.FILTER_PARAMETER, payload: category });
      if (category === "popular") {
        dispatch({
          type: actionTypes.GET_PRODUCTS,
          payload: res.data.products,
        });
      } else {
        const filtered = res.data.products.filter(
          (product) => product.salesMethod === category
        );
        dispatch({ type: actionTypes.GET_PRODUCTS, payload: filtered });
      }
    })
    .catch((err) => dispatch({ type: actionTypes.SET_ERROR }));
};
