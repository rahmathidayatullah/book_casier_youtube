import { ADD_PRODUCT_TO_CART } from "./constants";

export const addProductToCart = (data) => {
  return (dispatch, getState) => {
    let dataCart = getState().listProductCheckout.data;
    console.log("data yang dikirm dari pages", data);
    console.log("dataCart action", dataCart);

    // add data to array from reducer
    dataCart.push(data);
    console.log("dataCart after push", dataCart);
    dispatch({
      type: ADD_PRODUCT_TO_CART,
      data,
    });
  };
};
