import axios from "axios";

import { config } from "../config";

export async function getAllCategories(params) {
  // let { token } = localStorage.getItem("auth")
  //   ? JSON.parse(localStorage.getItem("auth"))
  //   : {};

  return await axios.get(`${config.api_host}/categories`, {
    params,
    headers: {
      authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im5hbWUiOiJhZG1pbiBjb2RlYXRob21lIiwidXNlcklkIjo2LCJyb2xlIjoiYWRtaW4ifSwiaWF0IjoxNjQwNDE4ODU1fQ._c0CQGmXBkN3tTRsAc-Hmc0quOPQs2l7uTx5bWfX0fs`,
    },
  });
}
export async function postCategories(form) {
  // let { token } = localStorage.getItem("auth")
  //   ? JSON.parse(localStorage.getItem("auth"))
  //   : {};

  return await axios.post(`${config.api_host}/categories`, form, {
    // params,
    headers: {
      authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im5hbWUiOiJhZG1pbiBjb2RlYXRob21lIiwidXNlcklkIjo2LCJyb2xlIjoiYWRtaW4ifSwiaWF0IjoxNjQwNDE4ODU1fQ._c0CQGmXBkN3tTRsAc-Hmc0quOPQs2l7uTx5bWfX0fs`,
    },
  });
}
export async function deleteCategories(id) {
  // let { token } = localStorage.getItem("auth")
  //   ? JSON.parse(localStorage.getItem("auth"))
  //   : {};

  return await axios.delete(`${config.api_host}/categories/${id}`, {
    // params,
    headers: {
      authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im5hbWUiOiJhZG1pbiBjb2RlYXRob21lIiwidXNlcklkIjo2LCJyb2xlIjoiYWRtaW4ifSwiaWF0IjoxNjQwNDE4ODU1fQ._c0CQGmXBkN3tTRsAc-Hmc0quOPQs2l7uTx5bWfX0fs`,
    },
  });
}
export async function getByIdCategories(id) {
  // let { token } = localStorage.getItem("auth")
  //   ? JSON.parse(localStorage.getItem("auth"))
  //   : {};

  return await axios.get(`${config.api_host}/categories/${id}`, {
    // params,
    headers: {
      authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im5hbWUiOiJhZG1pbiBjb2RlYXRob21lIiwidXNlcklkIjo2LCJyb2xlIjoiYWRtaW4ifSwiaWF0IjoxNjQwNDE4ODU1fQ._c0CQGmXBkN3tTRsAc-Hmc0quOPQs2l7uTx5bWfX0fs`,
    },
  });
}
export async function putCategories(id, form) {
  // let { token } = localStorage.getItem("auth")
  //   ? JSON.parse(localStorage.getItem("auth"))
  //   : {};

  return await axios.put(`${config.api_host}/categories/${id}`, form, {
    // params,
    headers: {
      authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im5hbWUiOiJhZG1pbiBjb2RlYXRob21lIiwidXNlcklkIjo2LCJyb2xlIjoiYWRtaW4ifSwiaWF0IjoxNjQwNDE4ODU1fQ._c0CQGmXBkN3tTRsAc-Hmc0quOPQs2l7uTx5bWfX0fs`,
    },
  });
}
