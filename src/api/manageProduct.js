import axios from "axios";

import { config } from "../config";

export async function postImageProduct(form) {
  let { token } = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : {};

  return await axios.post(`${config.api_host}/uploads`, form, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
}

export async function postProduct(form) {
  let { token } = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : {};

  return await axios.post(`${config.api_host}/products`, form, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
}

export async function getAllProduct(params) {
  let { token } = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : {};

  return await axios.get(`${config.api_host}/products`, {
    params,
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
}

export async function deleteProduct(id) {
  let { token } = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : {};

  return await axios.delete(`${config.api_host}/products/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
}

export async function getProduct(id) {
  let { token } = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : {};

  return await axios.get(`${config.api_host}/products/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
}

export async function putProduct(form, id) {
  let { token } = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : {};

  return await axios.put(`${config.api_host}/products/${id}`, form, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
}
