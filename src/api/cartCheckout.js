import axios from "axios";

import { config } from "../config";

export async function postTransaction(form) {
  let { token } = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : {};

  return await axios.post(`${config.api_host}/transactions`, form, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
}
