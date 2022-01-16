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
  START_GET_SINGLE_PRODUCT,
  ERROR_GET_SINGLE_PRODUCT,
  SUCCESS_GET_SINGLE_PRODUCT,
  START_UPDATE_PRODUCT,
  ERROR_UPDATE_PRODUCT,
  SUCCESS_UPDATE_PRODUCT,
  SEARCH_BY_KEYWORD,
  SEARCH_BY_CATEGORY,
} from "./constants";
import {
  postImageProduct,
  postProduct,
  getAllProduct,
  deleteProduct,
  getProduct,
  putProduct,
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
export const getSingleProduct = (id) => {
  return async (dispatch, getState) => {
    dispatch({
      type: START_GET_SINGLE_PRODUCT,
    });
    //
    try {
      let {
        data: { data },
      } = await getProduct(id);

      dispatch({
        type: SUCCESS_GET_SINGLE_PRODUCT,
        data,
      });
    } catch (error) {
      dispatch({
        type: ERROR_GET_SINGLE_PRODUCT,
      });
    }
  };
};

export const updateProduct = (form, id) => {
  return async (dispatch, getState) => {
    dispatch({
      type: START_UPDATE_PRODUCT,
    });
    //
    try {
      let {
        data: { data },
      } = await putProduct(form, id);

      dispatch({
        type: SUCCESS_UPDATE_PRODUCT,
        data,
      });
    } catch (error) {
      dispatch({
        type: ERROR_UPDATE_PRODUCT,
      });
    }
  };
};

export const searchByKeyword = (keyword) => {
  return async (dispatch, getState) => {
    dispatch({
      type: SEARCH_BY_KEYWORD,
      keyword,
    });
  };
};

export const searchByCategory = (id) => {
  return async (dispatch, getState) => {
    dispatch({
      type: SEARCH_BY_CATEGORY,
      id,
    });
  };
};
