import {
  START_POST_LOGIN,
  ERROR_POST_LOGIN,
  SUCCESS_POST_LOGIN,
} from "./constants";

import { postLogin } from "../../api/auth";

export const createLogin = (form) => {
  return async (dispatch, getState) => {
    dispatch({
      type: START_POST_LOGIN,
    });
    try {
      let {
        data: {
          data: { token },
        },
      } = await postLogin(form);

      dispatch({
        type: SUCCESS_POST_LOGIN,
        token,
      });
    } catch (error) {
      dispatch({
        type: ERROR_POST_LOGIN,
      });
    }
  };
};
