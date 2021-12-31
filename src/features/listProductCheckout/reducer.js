import {
  ADD_PRODUCT_TO_CART,
  MIN_ITEM_CART,
  PLUS_ITEM_CART,
  REMOVE_ITEM_CART,
  CLEAR_ALL_ITEMS_CART,
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
    case CLEAR_ALL_ITEMS_CART:
      return {
        ...state,
        data: [],
      };
    default:
      return state;
  }
}
