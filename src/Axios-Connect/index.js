import axios from "axios";
import { getUserToken } from "./getUserToken";
import {notification} from "antd"
const publicRoutes = ["/view-trucks"];

export const serviceInstance = axios.create({
  headers: {
    // "Access-Control-Allow-Origin": "*",
    // Authorization: `Bearer ${getUserToken()?.token}`,
  },
});

serviceInstance.interceptors.request.use(
  (config) => {
    let token = getUserToken()?.token;

    config.headers["Authorization"] = `Bearer ${token}`;

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

const Notification = (type, msgType, msg) => {
    notification[type]({
      message: msgType,
      description: msg,
    });
  };

serviceInstance.interceptors.response.use(undefined, (err) => {
  const error = err.response;
  const errorStatus = err.status;
  const responseError = err.message;
  const errorList = err.response?.data?.errors;
  const customError = err.response?.data?.message
    ? err.response?.data?.message
    : err.response?.data?.title
    ? err.response?.data?.title
    : err?.response?.data;
  const finalErrorMsg = customError ? customError : responseError;


  if (
    (error.status === 401 &&
      (!err.config.url || !err.config.url.includes("/Login"))) ||
    finalErrorMsg == "Unauthorized request"
  ) {
    Notification('error','Error',customError);

    if (customError !== "Unauthorized! Access Denied") {
      sessionStorage.clear();
      localStorage.clear();
      window.location = "/login";
    }
  } else {
    //show multiple errors
    if (finalErrorMsg == "One or more validation errors occurred.") {
      for (let error in errorList) {
        Notification('error','Error',errorList[error][0]);
      }
    } else {
      //show single error
      Notification('error','Error',`${finalErrorMsg} ${errorStatus ? errorStatus : ""}`);
    }
  }

  return Promise.reject(err);
});
