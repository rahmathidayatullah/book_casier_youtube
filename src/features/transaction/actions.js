import debounce from "debounce-promise";
import {
  START_GET_SINGLE_TRANSACTION,
  ERROR_GET_SINGLE_TRANSACTION,
  SUCCESS_GET_SINGLE_TRANSACTION,
  START_GET_ALL_TRANSACTION,
  ERROR_GET_ALL_TRANSACTION,
  SUCCESS_GET_ALL_TRANSACTION,
  SORTIR_BY_KEYWORD,
} from "./constants";

import { getAllTransaction, getByIdTransaction } from "../../api/transaction";

let debouncedFetchTransaction = debounce(getAllTransaction, 1000);

export const fetchAllTransaction = () => {
  return async (dispatch, getState) => {
    dispatch({
      type: START_GET_ALL_TRANSACTION,
    });
    let keywordState = getState().transaction.keyword;

    const params = {
      keyword: keywordState,
    };
    try {
      let {
        data: { data },
      } = await debouncedFetchTransaction(params);
      dispatch({
        type: SUCCESS_GET_ALL_TRANSACTION,
        data,
      });
    } catch (error) {
      dispatch({
        type: ERROR_GET_ALL_TRANSACTION,
      });
    }
  };
};

export const getSingleTransaction = (id) => {
  return async (dispatch, getState) => {
    dispatch({
      type: START_GET_SINGLE_TRANSACTION,
    });

    try {
      let {
        data: { data },
      } = await getByIdTransaction(id);
      dispatch({
        type: SUCCESS_GET_SINGLE_TRANSACTION,
        data,
      });
    } catch (error) {
      dispatch({
        type: ERROR_GET_SINGLE_TRANSACTION,
      });
    }
  };
};

export const searchByKeyword = (keyword) => {
  return async (dispatch, getState) => {
    dispatch({
      type: SORTIR_BY_KEYWORD,
      keyword,
    });
  };
};
