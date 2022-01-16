import {
  START_FETCHING_DASHBOARD,
  SUCCESS_FETCHING_DASHBOARD,
  ERROR_FETCHING_DASHBOARD,
} from "./constatns";

import { getAllDashboard } from "../../api/dashbord";

export const fetchingAllDashboard = () => {
  return async (dispatch, getState) => {
    dispatch({
      type: START_FETCHING_DASHBOARD,
    });
    try {
      let {
        data: { data },
      } = await getAllDashboard();

      dispatch({
        type: SUCCESS_FETCHING_DASHBOARD,
        data,
      });
    } catch (error) {
      dispatch({
        type: ERROR_FETCHING_DASHBOARD,
      });
    }
  };
};
