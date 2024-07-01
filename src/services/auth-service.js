import config from "../config";
import { serviceInstance } from "../Axios-Connect/index";

const authService = {
  onLogin: (request) =>
    serviceInstance
      .post(`${config.baseUrl}/Account/login `, request)
      .then(({ data, status }) => ({
        ...data,
        status,
      })),
  onRegister: (request) =>
    serviceInstance
      .post(`${config.baseUrl}/auth/sign-up`, request)
      .then(({ data, status }) => ({
        ...data,
        status,
      })),
  registerComplete: (request) =>
    serviceInstance
      .post(`${config.baseUrl}/auth/verify-phone-numbe`, request)
      .then(({ data, status }) => ({
        ...data,
        status,
      })),
  onLoginInitiate: (request) =>
    serviceInstance
      .post(`${config.baseUrl}/auth/initiate-login-otp `, request)
      .then(({ data, status }) => ({
        ...data,
        status,
      })),

  logout: (request) =>
    serviceInstance
      .post(`${config.baseurl}/Account/Logout`, {})
      .then(({ data, status }) => ({
        ...data,
        status,
      })),
};

export default authService;
