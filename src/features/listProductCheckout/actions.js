import {
  ADD_PRODUCT_TO_CART,
  MIN_ITEM_CART,
  PLUS_ITEM_CART,
} from "./constants";

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

export const minItemCart = (id) => {
  return (dispatch, getState) => {
    let dataCart = getState().listProductCheckout.data;
    let tempCart = [...dataCart];

    tempCart.forEach((items) => {
      if (items.id === id) {
        items.quantity = items.quantity - 1;
      }
    });

    localStorage.setItem("cart", JSON.stringify(tempCart));

    dispatch({
      type: MIN_ITEM_CART,
      tempCart,
    });
  };
};

export const plusItemCart = (id) => {
  return (dispatch, getState) => {
    let dataCart = getState().listProductCheckout.data;
    let tempCart = [...dataCart];

    tempCart.forEach((items) => {
      if (items.id === id) {
        items.quantity = items.quantity + 1;
      }
    });

    localStorage.setItem("cart", JSON.stringify(tempCart));

    dispatch({
      type: PLUS_ITEM_CART,
      tempCart,
    });
  };
};
