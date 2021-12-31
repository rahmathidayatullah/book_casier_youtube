import {
  ADD_PRODUCT_TO_CART,
  MIN_ITEM_CART,
  PLUS_ITEM_CART,
  REMOVE_ITEM_CART,
  CLEAR_ALL_ITEMS_CART,
  START_CHECKOUT,
  ERROR_CHECKOUT,
  SUCCESS_CHECKOUT,
  CLEAR_STATUS,
} from "./constants";

const statuslist = {
  idle: "idle",
  process: "process",
  success: "success",
  error: "error",
};
const initialState = {
  data: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],

  statusCheckout: statuslist.idle,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    // get category
    case ADD_PRODUCT_TO_CART:
      return {
        ...state,
        data: action.tempCart,
      };
    case MIN_ITEM_CART:
      return {
        ...state,
        data: action.tempCart,
      };
    case PLUS_ITEM_CART:
      return {
        ...state,
        data: action.tempCart,
      };
    case REMOVE_ITEM_CART:
      return {
        ...state,
        data: action.sortirRemoveDataCart,
      };
    case START_CHECKOUT:
      return {
        ...state,
        statusCheckout: statuslist.process,
      };
    case ERROR_CHECKOUT:
      return {
        ...state,
        statusCheckout: statuslist.error,
      };
    case SUCCESS_CHECKOUT:
      return {
        ...state,
        statusCheckout: statuslist.success,
        dataPostChecout: action.data,
      };
    case CLEAR_ALL_ITEMS_CART:
      return {
        ...state,
        data: [],
      };
    case CLEAR_STATUS:
      return {
        ...state,
        statusCheckout: statuslist.idle,
        data: [],
      };
    default:
      return state;
  }
}
