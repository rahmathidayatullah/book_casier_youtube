import {
  START_FETCHING_DASHBOARD,
  SUCCESS_FETCHING_DASHBOARD,
  ERROR_FETCHING_DASHBOARD,
} from "./constatns";

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
    // get all dashboard
    case START_FETCHING_DASHBOARD:
      return {
        ...state,
        status: statuslist.process,
      };
    case SUCCESS_FETCHING_DASHBOARD:
      return {
        ...state,
        status: statuslist.success,
        data: action.data,
      };
    case ERROR_FETCHING_DASHBOARD:
      return {
        ...state,
        status: statuslist.error,
      };
    default:
      return state;
  }
}
