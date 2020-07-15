import axios from "axios";
import { apiUrl } from "../Config/Environments";
axios.defaults.baseURL = apiUrl;

export default {
    
  get(cb, payload, route) {
    axios.get({ url: route, payload }).then((r) => {
      cb(r);
    });
  },
  post(payload, route, cb, errorCb) {
    console.log(apiUrl);
    axios
      .post(route, payload,{
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods" : "*"
        }
      })
      .then((r) => {
        cb(r);
      })
      .catch((e) => {
        errorCb(e);
      });
  },
  put(cb, payload, route) {
    axios.put({ url: route, payload }).then((r) => {
      cb(r);
    });
  },
};
