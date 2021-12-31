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
  CLEAR_STATUS,
  SEARCH_BY_KEYWORD,
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
  limit: 50,
  keyword: "",
  statusPost: statuslist.idle,
  statusDelete: statuslist.idle,
  statusGetSingle: statuslist.idle,
  statusUpdate: statuslist.idle,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    // get category
    case START_FETCHING_CATEGORY:
      return {
        ...state,
        status: statuslist.process,
      };
    case SUCCESS_FETCHING_CATEGORY:
      return {
        ...state,
        status: statuslist.success,
        data: action.data,
      };
    case ERROR_FETCHING_CATEGORY:
      return {
        ...state,
        status: statuslist.error,
      };
    // post category
    case START_POST_CATEGORY:
      return {
        ...state,
        statusPost: statuslist.process,
      };
    case SUCCESS_POST_CATEGORY:
      return {
        ...state,
        statusPost: statuslist.success,
        dataPost: action.data,
      };
    case ERROR_POST_CATEGORY:
      return {
        ...state,
        statusPost: statuslist.error,
      };
    // delete category
    case START_DELETE_CATEGORY:
      return {
        ...state,
        statusDelete: statuslist.process,
      };
    case SUCCESS_DELETE_CATEGORY:
      return {
        ...state,
        statusDelete: statuslist.success,
        dataDelete: action.data,
      };
    case ERROR_DELETE_CATEGORY:
      return {
        ...state,
        statusDelete: statuslist.error,
      };
    // get single category
    case START_GET_SINGLE_CATEGORY:
      return {
        ...state,
        statusGetSingle: statuslist.process,
      };
    case SUCCESS_GET_SINGLE_CATEGORY:
      return {
        ...state,
        statusGetSingle: statuslist.success,
        dataSingle: action.data,
      };
    case ERROR_GET_SINGLE_CATEGORY:
      return {
        ...state,
        statusGetSingle: statuslist.error,
      };
    // update category
    case START_UPDATE_CATEGORY:
      return {
        ...state,
        statusUpdate: statuslist.process,
      };
    case SUCCESS_UPDATE_CATEGORY:
      return {
        ...state,
        statusUpdate: statuslist.success,
        dataUpdate: action.data,
      };
    case ERROR_UPDATE_CATEGORY:
      return {
        ...state,
        statusUpdate: statuslist.error,
      };
    case SEARCH_BY_KEYWORD:
      return {
        ...state,
        keyword: action.keyword,
      };
    case CLEAR_STATUS:
      return {
        ...state,
        statusPost: statuslist.idle,
        statusDelete: statuslist.idle,
        statusUpdate: statuslist.idle,
        statusGetSingle: statuslist.idle,
      };
    default:
      return state;
  }
}
