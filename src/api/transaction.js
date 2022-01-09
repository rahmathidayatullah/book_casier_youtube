import axios from "axios";

import { config } from "../config";

export async function getAllTransaction(params) {
  let { token } = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : {};

  return await axios.get(`${config.api_host}/transactions`, {
    params,
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
}

export async function getByIdTransaction(id) {
  let { token } = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : {};

  return await axios.get(`${config.api_host}/transactions/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
}
