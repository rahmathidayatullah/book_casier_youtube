import axios from "axios";

import { config } from "../config";

export async function postLogin(form) {
  return await axios.post(`${config.api_host}/auth/signin`, form);
}
