import {
  PRODUCTS_LIST_FAIL,
  PRODUCTS_LIST_REQUEST,
  PRODUCTS_LIST_SUCCESS,
} from "../Constants/productsConstants";
import Axios from "axios";

const getProductsUrl = "http://localhost:5000/api/products";

export const listProducts = () => async (dispatch) => {
  dispatch({
    type: PRODUCTS_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(getProductsUrl);
    dispatch({ type: PRODUCTS_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCTS_LIST_FAIL, payload: error.message });
  }
};
