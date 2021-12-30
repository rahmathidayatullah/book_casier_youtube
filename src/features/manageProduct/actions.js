import debounce from "debounce-promise";
import {
  START_HANDLECHANGE_IMG,
  ERROR_HANDLECHANGE_IMG,
  SUCCESS_HANDLECHANGE_IMG,
} from "./constants";
import { postImageProduct } from "../../api/manageProduct";
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
