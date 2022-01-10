import axios from "axios";

import { config } from "../config";

export async function getAllDashboard() {
  let { token } = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : {};

  return await axios.get(`${config.api_host}/dashboards`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
}
