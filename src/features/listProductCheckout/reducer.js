import { ADD_PRODUCT_TO_CART } from "./constants";

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
    default:
      return state;
  }
}
