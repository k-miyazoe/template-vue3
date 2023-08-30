import Axios from "axios";
import Cookies from "js-cookie";

function defineRequestHeader() {
  const csrftoken = Cookies.get("csrftoken");
  const axios = Axios.create({
    baseURL: "http://localhost:8000",
    timeout: 2500,
    headers: {
      "Content-Type": "application/json",
      "X-CSRFToken": csrftoken,
    },
  });
  return axios;
}

export default {
  defineRequestHeader,
};
