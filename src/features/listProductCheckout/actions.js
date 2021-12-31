import {
  ADD_PRODUCT_TO_CART,
  MIN_ITEM_CART,
  PLUS_ITEM_CART,
  REMOVE_ITEM_CART,
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
      if (items.quantity === 1) {
        // function remove/delete
        dispatch(removeItemCart(id));
      } else {
        items.quantity = items.quantity - 1;
        localStorage.setItem("cart", JSON.stringify(tempCart));

        dispatch({
          type: MIN_ITEM_CART,
          tempCart,
        });
      }
    });
  };
};

export const removeItemCart = (id) => {
  return (dispatch, getState) => {
    let dataCart = getState().listProductCheckout.data;
    let sortirRemoveDataCart = dataCart.filter((items) => items.id !== id);

    localStorage.setItem("cart", JSON.stringify(sortirRemoveDataCart));

    dispatch({
      type: REMOVE_ITEM_CART,
      sortirRemoveDataCart,
    });
  };
};

export const plusItemCart = (id) => {
  return (dispatch, getState) => {
    let dataCart = getState().listProductCheckout.data;
    let tempCart = [...dataCart];

    tempCart.forEach((items) => {
      if (items.id === id) {
        if (items.quantity === items.stock) {
          // items.quantity = items.quantity + 0;
          alert("Stock tidak cukup");
        } else {
          items.quantity = items.quantity + 1;
        }
      }
    });

    localStorage.setItem("cart", JSON.stringify(tempCart));

    dispatch({
      type: PLUS_ITEM_CART,
      tempCart,
    });
  };
};
