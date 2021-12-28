import debounce from "debounce-promise";
import {
  START_FETCHING_CATEGORY,
  SUCCESS_FETCHING_CATEGORY,
  ERROR_FETCHING_CATEGORY,
} from "./constants";

import axios from "axios";
import { config } from "../../config";

import { getAllCategories } from "../../api/categories";

let debouncedFetchCategory = debounce(getAllCategories, 1000);

export const fetchCategory = () => {
  return async (dispatch, getState) => {
    dispatch({
      type: START_FETCHING_CATEGORY,
    });
    //
    try {
      let response = await debouncedFetchCategory();
      console.log("action response", response);

      dispatch({
        type: SUCCESS_FETCHING_CATEGORY,
        response,
      });
    } catch (error) {
      dispatch({
        type: ERROR_FETCHING_CATEGORY,
      });
    }
  };
};
