import axios from "axios";

import { config } from "../config";

export async function postImageProduct(form) {
  // let { token } = localStorage.getItem("auth")
  //   ? JSON.parse(localStorage.getItem("auth"))
  //   : {};

  return await axios.post(`${config.api_host}/uploads`, form, {
    headers: {
      authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im5hbWUiOiJhZG1pbiBjb2RlYXRob21lIiwidXNlcklkIjo2LCJyb2xlIjoiYWRtaW4ifSwiaWF0IjoxNjQwNDE4ODU1fQ._c0CQGmXBkN3tTRsAc-Hmc0quOPQs2l7uTx5bWfX0fs`,
    },
  });
}

export async function postProduct(form) {
  // let { token } = localStorage.getItem("auth")
  //   ? JSON.parse(localStorage.getItem("auth"))
  //   : {};

  return await axios.post(`${config.api_host}/products`, form, {
    headers: {
      authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im5hbWUiOiJhZG1pbiBjb2RlYXRob21lIiwidXNlcklkIjo2LCJyb2xlIjoiYWRtaW4ifSwiaWF0IjoxNjQwNDE4ODU1fQ._c0CQGmXBkN3tTRsAc-Hmc0quOPQs2l7uTx5bWfX0fs`,
    },
  });
}

export async function getAllProduct(params) {
  // let { token } = localStorage.getItem("auth")
  //   ? JSON.parse(localStorage.getItem("auth"))
  //   : {};

  return await axios.get(`${config.api_host}/products`, {
    params,
    headers: {
      authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im5hbWUiOiJhZG1pbiBjb2RlYXRob21lIiwidXNlcklkIjo2LCJyb2xlIjoiYWRtaW4ifSwiaWF0IjoxNjQwNDE4ODU1fQ._c0CQGmXBkN3tTRsAc-Hmc0quOPQs2l7uTx5bWfX0fs`,
    },
  });
}

export async function deleteProduct(id) {
  // let { token } = localStorage.getItem("auth")
  //   ? JSON.parse(localStorage.getItem("auth"))
  //   : {};

  return await axios.delete(`${config.api_host}/products/${id}`, {
    // params,
    headers: {
      authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im5hbWUiOiJhZG1pbiBjb2RlYXRob21lIiwidXNlcklkIjo2LCJyb2xlIjoiYWRtaW4ifSwiaWF0IjoxNjQwNDE4ODU1fQ._c0CQGmXBkN3tTRsAc-Hmc0quOPQs2l7uTx5bWfX0fs`,
    },
  });
}

export async function getProduct(id) {
  // let { token } = localStorage.getItem("auth")
  //   ? JSON.parse(localStorage.getItem("auth"))
  //   : {};

  return await axios.get(`${config.api_host}/products/${id}`, {
    // params,
    headers: {
      authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im5hbWUiOiJhZG1pbiBjb2RlYXRob21lIiwidXNlcklkIjo2LCJyb2xlIjoiYWRtaW4ifSwiaWF0IjoxNjQwNDE4ODU1fQ._c0CQGmXBkN3tTRsAc-Hmc0quOPQs2l7uTx5bWfX0fs`,
    },
  });
}
