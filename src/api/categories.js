import axios from "axios";

import { config } from "../config";

export async function getAllCategories(params) {
  let { token } = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : {};

  return await axios.get(`${config.api_host}/categories`, {
    params,
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
}
export async function postCategories(form) {
  let { token } = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : {};

  return await axios.post(`${config.api_host}/categories`, form, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
}
export async function deleteCategories(id) {
  let { token } = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : {};

  return await axios.delete(`${config.api_host}/categories/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
}
export async function getByIdCategories(id) {
  let { token } = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : {};

  return await axios.get(`${config.api_host}/categories/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
}
export async function putCategories(id, form) {
  let { token } = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : {};

  return await axios.put(`${config.api_host}/categories/${id}`, form, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
}
