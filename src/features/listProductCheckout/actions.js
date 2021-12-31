import { ADD_PRODUCT_TO_CART } from "./constants";

export const addProductToCart = (data) => {
  return (dispatch, getState) => {
    let dataCart = getState().listProductCheckout.data;

    let tempCart = [...dataCart];

    if (!tempCart.length) {
      tempCart.push(data);
    } else {
      tempCart.forEach((items) => {
        if (items.id === data.id) {
          items.quantity = items.quantity + 1;
        } else if (!tempCart.find((items) => items.id === data.id)) {
          tempCart.push(data);
        }
      });
    }

    // add data to array from reducer

    localStorage.setItem("cart", JSON.stringify(tempCart));

    dispatch({
      type: ADD_PRODUCT_TO_CART,
      tempCart,
    });
  };
};
