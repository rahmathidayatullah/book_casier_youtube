import {
  START_POST_LOGIN,
  ERROR_POST_LOGIN,
  SUCCESS_POST_LOGIN,
  CLEAR_STATUS,
} from "./constants";

const statuslist = {
  idle: "idle",
  process: "process",
  success: "success",
  error: "error",
};

const initialState = localStorage.getItem("auth")
  ? JSON.parse(localStorage.getItem("auth"))
  : {
      status: statuslist.idle,
      token: "",
      statusPost: statuslist.idle,
    };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    // get category
    case START_POST_LOGIN:
      return {
        ...state,
        statusPost: statuslist.process,
      };
    case SUCCESS_POST_LOGIN:
      return {
        ...state,
        statusPost: statuslist.success,
        token: action.token,
      };
    case ERROR_POST_LOGIN:
      return {
        ...state,
        statusPost: statuslist.error,
      };
    case CLEAR_STATUS:
      return {
        ...state,
        statusPost: statuslist.idle,
      };
    default:
      return state;
  }
}
