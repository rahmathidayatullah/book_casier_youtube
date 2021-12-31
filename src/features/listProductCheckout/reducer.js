import { ADD_PRODUCT_TO_CART } from "./constants";

const statuslist = {
  idle: "idle",
  process: "process",
  success: "success",
  error: "error",
};
const initialState = {
  data: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    // get category
    case ADD_PRODUCT_TO_CART:
      return {
        ...state,
        status: action.data,
      };
    default:
      return state;
  }
}
