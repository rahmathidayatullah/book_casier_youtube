import {
  START_HANDLECHANGE_IMG,
  ERROR_HANDLECHANGE_IMG,
  SUCCESS_HANDLECHANGE_IMG,
  START_FETCH_PRODUCT,
  ERROR_FETCH_PRODUCT,
  SUCCESS_FETCH_PRODUCT,
  START_CREATE_PRODUCT,
  ERROR_CREATE_PRODUCT,
  SUCCESS_CREATE_PRODUCT,
  START_DELETE_PRODUCT,
  ERROR_DELETE_PRODUCT,
  SUCCESS_DELETE_PRODUCT,
  START_GET_SINGLE_PRODUCT,
  ERROR_GET_SINGLE_PRODUCT,
  SUCCESS_GET_SINGLE_PRODUCT,
  START_UPDATE_PRODUCT,
  ERROR_UPDATE_PRODUCT,
  SUCCESS_UPDATE_PRODUCT,
  CLEAR_STATUS,
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
  category: "",
  statusPostProduct: statuslist.idle,
  statusPostImg: statuslist.idle,
  statusDeleteProduct: statuslist.idle,
  statusGetSingle: statuslist.idle,
  statusUpdate: statuslist.idle,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    // post img when on change
    case START_HANDLECHANGE_IMG:
      return {
        ...state,
        statusPostImg: statuslist.process,
      };
    case SUCCESS_HANDLECHANGE_IMG:
      return {
        ...state,
        statusPostImg: statuslist.success,
        dataPostImgProduct: action.data,
      };
    case ERROR_HANDLECHANGE_IMG:
      return {
        ...state,
        statusPostImg: statuslist.error,
      };
    // post data product
    case START_CREATE_PRODUCT:
      return {
        ...state,
        statusPostProduct: statuslist.process,
      };
    case SUCCESS_CREATE_PRODUCT:
      return {
        ...state,
        statusPostProduct: statuslist.success,
        dataPostProduct: action.data,
      };
    case ERROR_CREATE_PRODUCT:
      return {
        ...state,
        statusPostProduct: statuslist.error,
      };
    // get all product
    case START_FETCH_PRODUCT:
      return {
        ...state,
        status: statuslist.process,
      };
    case SUCCESS_FETCH_PRODUCT:
      return {
        ...state,
        status: statuslist.success,
        data: action.data,
      };
    case ERROR_FETCH_PRODUCT:
      return {
        ...state,
        status: statuslist.error,
      };
    // delete product
    case START_DELETE_PRODUCT:
      return {
        ...state,
        statusDeleteProduct: statuslist.process,
      };
    case SUCCESS_DELETE_PRODUCT:
      return {
        ...state,
        statusDeleteProduct: statuslist.success,
        dataDeleteProduct: action.data,
      };
    case ERROR_DELETE_PRODUCT:
      return {
        ...state,
        statusDeleteProduct: statuslist.error,
      };
    // get single product
    case START_GET_SINGLE_PRODUCT:
      return {
        ...state,
        statusGetSingle: statuslist.process,
      };
    case SUCCESS_GET_SINGLE_PRODUCT:
      return {
        ...state,
        statusGetSingle: statuslist.success,
        dataSingle: action.data,
      };
    case ERROR_GET_SINGLE_PRODUCT:
      return {
        ...state,
        statusGetSingle: statuslist.error,
      };
    // put product
    case START_UPDATE_PRODUCT:
      return {
        ...state,
        statusUpdate: statuslist.process,
      };
    case SUCCESS_UPDATE_PRODUCT:
      return {
        ...state,
        statusUpdate: statuslist.success,
        dataUpdateProduct: action.data,
      };
    case ERROR_UPDATE_PRODUCT:
      return {
        ...state,
        statusUpdate: statuslist.error,
      };
    case CLEAR_STATUS:
      return {
        ...state,
        statusPostImg: statuslist.idle,
        statusPostProduct: statuslist.idle,
        statusDeleteProduct: statuslist.idle,
        statusGetSingle: statuslist.idle,
        statusUpdate: statuslist.idle,
      };

    default:
      return state;
  }
}
