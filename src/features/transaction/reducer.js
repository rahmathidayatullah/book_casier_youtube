import {
  START_GET_SINGLE_TRANSACTION,
  ERROR_GET_SINGLE_TRANSACTION,
  SUCCESS_GET_SINGLE_TRANSACTION,
  START_GET_ALL_TRANSACTION,
  ERROR_GET_ALL_TRANSACTION,
  SUCCESS_GET_ALL_TRANSACTION,
  SORTIR_BY_KEYWORD,
  CLEAR_STATE,
} from "./constants";

const statuslist = {
  idle: "idle",
  process: "process",
  success: "success",
  error: "error",
};
const initialState = {
  status: statuslist.idle,
  data: [],
  dataSingle: [],
  keyword: "",
  statusGetSingle: statuslist.idle,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    // get all transaction
    case START_GET_ALL_TRANSACTION:
      return {
        ...state,
        status: statuslist.process,
      };
    case SUCCESS_GET_ALL_TRANSACTION:
      return {
        ...state,
        status: statuslist.success,
        data: action.data,
      };
    case ERROR_GET_ALL_TRANSACTION:
      return {
        ...state,
        status: statuslist.error,
      };
    // get single transaction
    case START_GET_SINGLE_TRANSACTION:
      return {
        ...state,
        statusGetSingle: statuslist.process,
      };
    case SUCCESS_GET_SINGLE_TRANSACTION:
      return {
        ...state,
        statusGetSingle: statuslist.success,
        dataSingle: action.data,
      };
    case ERROR_GET_SINGLE_TRANSACTION:
      return {
        ...state,
        statusGetSingle: statuslist.error,
      };
    case SORTIR_BY_KEYWORD:
      return {
        ...state,
        keyword: action.keyword,
      };
    case CLEAR_STATE:
      return {
        ...state,
        dataSingle: [],
        statusGetSingle: statuslist.idle,
      };
    default:
      return state;
  }
}
