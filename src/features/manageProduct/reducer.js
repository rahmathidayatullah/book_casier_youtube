import {
  START_HANDLECHANGE_IMG,
  ERROR_HANDLECHANGE_IMG,
  SUCCESS_HANDLECHANGE_IMG,
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
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    // get category
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
    case CLEAR_STATUS:
      return {
        ...state,
        statusPostImg: statuslist.idle,
      };

    default:
      return state;
  }
}
