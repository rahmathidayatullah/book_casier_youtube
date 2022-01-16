import debounce from "debounce-promise";
import {
  START_FETCHING_CATEGORY,
  SUCCESS_FETCHING_CATEGORY,
  ERROR_FETCHING_CATEGORY,
  START_POST_CATEGORY,
  ERROR_POST_CATEGORY,
  SUCCESS_POST_CATEGORY,
  START_DELETE_CATEGORY,
  ERROR_DELETE_CATEGORY,
  SUCCESS_DELETE_CATEGORY,
  START_GET_SINGLE_CATEGORY,
  ERROR_GET_SINGLE_CATEGORY,
  SUCCESS_GET_SINGLE_CATEGORY,
  START_UPDATE_CATEGORY,
  ERROR_UPDATE_CATEGORY,
  SUCCESS_UPDATE_CATEGORY,
  SEARCH_BY_KEYWORD,
  ACTIVE_CATEGORYLIST,
} from "./constants";

import {
  getAllCategories,
  postCategories,
  deleteCategories,
  getByIdCategories,
  putCategories,
} from "../../api/categories";

let debouncedFetchCategory = debounce(getAllCategories, 1000);

export const fetchCategory = () => {
  return async (dispatch, getState) => {
    let limitState = getState().categories.limit;
    let keywordState = getState().categories.keyword;

    const params = {
      limit: limitState,
      keyword: keywordState,
    };

    dispatch({
      type: START_FETCHING_CATEGORY,
    });
    //
    try {
      let {
        data: { data },
      } = await debouncedFetchCategory(params);

      let dataCategoryForListProduct = data.map((items) => {
        return { ...items, isSelect: false };
      });

      dataCategoryForListProduct.unshift({
        id: "",
        name: "All",
        isSelect: false,
      });

      dispatch({
        type: SUCCESS_FETCHING_CATEGORY,
        data,
        dataCategoryForListProduct,
      });
    } catch (error) {
      dispatch({
        type: ERROR_FETCHING_CATEGORY,
      });
    }
  };
};
export const createCategory = (form) => {
  return async (dispatch, getState) => {
    dispatch({
      type: START_POST_CATEGORY,
    });
    //
    try {
      let {
        data: { data },
      } = await postCategories(form);

      dispatch({
        type: SUCCESS_POST_CATEGORY,
        data,
      });
    } catch (error) {
      dispatch({
        type: ERROR_POST_CATEGORY,
      });
    }
  };
};
export const removeCategory = (id) => {
  return async (dispatch, getState) => {
    dispatch({
      type: START_DELETE_CATEGORY,
    });
    //
    try {
      let {
        data: { data },
      } = await deleteCategories(id);

      dispatch({
        type: SUCCESS_DELETE_CATEGORY,
        data,
      });
    } catch (error) {
      dispatch({
        type: ERROR_DELETE_CATEGORY,
      });
    }
  };
};
export const getSingleCategory = (id) => {
  return async (dispatch, getState) => {
    dispatch({
      type: START_GET_SINGLE_CATEGORY,
    });
    //
    try {
      let {
        data: { data },
      } = await getByIdCategories(id);

      dispatch({
        type: SUCCESS_GET_SINGLE_CATEGORY,
        data,
      });
    } catch (error) {
      dispatch({
        type: ERROR_GET_SINGLE_CATEGORY,
      });
    }
  };
};
export const updateCategory = (id, form) => {
  return async (dispatch, getState) => {
    dispatch({
      type: START_UPDATE_CATEGORY,
    });
    //
    try {
      let {
        data: { data },
      } = await putCategories(id, form);

      dispatch({
        type: SUCCESS_UPDATE_CATEGORY,
        data,
      });
    } catch (error) {
      dispatch({
        type: ERROR_UPDATE_CATEGORY,
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

export const activeSelectCategory = (id) => {
  return async (dispatch, getState) => {
    let dataCategoryListProduct = getState().categories.dataForListCategory;

    dataCategoryListProduct.forEach((items) => {
      if (items.id === id) {
        items.isSelect = true;
      } else {
        items.isSelect = false;
      }
    });

    dispatch({
      type: ACTIVE_CATEGORYLIST,
      dataCategoryListProduct,
    });
  };
};
