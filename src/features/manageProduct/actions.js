import debounce from "debounce-promise";
import {
  START_HANDLECHANGE_IMG,
  ERROR_HANDLECHANGE_IMG,
  SUCCESS_HANDLECHANGE_IMG,
  START_CREATE_PRODUCT,
  ERROR_CREATE_PRODUCT,
  SUCCESS_CREATE_PRODUCT,
  START_FETCH_PRODUCT,
  ERROR_FETCH_PRODUCT,
  SUCCESS_FETCH_PRODUCT,
  START_DELETE_PRODUCT,
  ERROR_DELETE_PRODUCT,
  SUCCESS_DELETE_PRODUCT,
} from "./constants";
import {
  postImageProduct,
  postProduct,
  getAllProduct,
  deleteProduct,
} from "../../api/manageProduct";
let debouncedFetchProduct = debounce(getAllProduct, 1000);

export const fetchAllProduct = () => {
  return async (dispatch, getState) => {
    let limitState = getState().manageProduct.limit;
    let keywordState = getState().manageProduct.keyword;
    let categoryState = getState().manageProduct.category;

    const params = {
      keyword: keywordState,
      limit: limitState,
      category: categoryState,
    };
    dispatch({
      type: START_FETCH_PRODUCT,
    });
    try {
      let {
        data: { data },
      } = await debouncedFetchProduct(params);
      // console.log("response fetching all product", data);
      dispatch({
        type: SUCCESS_FETCH_PRODUCT,
        data,
      });
    } catch (error) {
      dispatch({
        type: ERROR_FETCH_PRODUCT,
      });
    }
  };
};
export const createImageProduct = (form) => {
  return async (dispatch, getState) => {
    dispatch({
      type: START_HANDLECHANGE_IMG,
    });
    try {
      let { data } = await postImageProduct(form);
      dispatch({
        type: SUCCESS_HANDLECHANGE_IMG,
        data,
      });
    } catch (error) {
      dispatch({
        type: ERROR_HANDLECHANGE_IMG,
      });
    }
  };
};

export const createProduct = (form) => {
  return async (dispatch, getState) => {
    dispatch({
      type: START_CREATE_PRODUCT,
    });
    try {
      let { data } = await postProduct(form);
      dispatch({
        type: SUCCESS_CREATE_PRODUCT,
        data,
      });
    } catch (error) {
      dispatch({
        type: ERROR_CREATE_PRODUCT,
      });
    }
  };
};

export const removeProduct = (id) => {
  return async (dispatch, getState) => {
    dispatch({
      type: START_DELETE_PRODUCT,
    });
    //
    try {
      let {
        data: { data },
      } = await deleteProduct(id);

      dispatch({
        type: SUCCESS_DELETE_PRODUCT,
        data,
      });
    } catch (error) {
      dispatch({
        type: ERROR_DELETE_PRODUCT,
      });
    }
  };
};
