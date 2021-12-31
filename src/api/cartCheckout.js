import axios from "axios";

import { config } from "../config";

export async function postTransaction(form) {
  // let { token } = localStorage.getItem("auth")
  //   ? JSON.parse(localStorage.getItem("auth"))
  //   : {};

  return await axios.post(`${config.api_host}/transactions`, form, {
    // params,
    headers: {
      authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im5hbWUiOiJhZG1pbiBjb2RlYXRob21lIiwidXNlcklkIjo2LCJyb2xlIjoiYWRtaW4ifSwiaWF0IjoxNjQwNDE4ODU1fQ._c0CQGmXBkN3tTRsAc-Hmc0quOPQs2l7uTx5bWfX0fs`,
    },
  });
}
