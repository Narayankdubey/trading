import axios from "axios";
import { notification } from "antd";
import { STORAGE_KEY_CONSTANT, TOKEN_EXPIRE } from "../common/constants";
import { getRefreshToken, getToken } from "@/utils/helper";
import API_PATHS from "./apiPaths";
const baseURL = process.env.REACT_APP_API_HOST;
// const baseURL = "http://localhost:4000/v1/";
// const { config } = require(`../config/${env}.config`);

const instance = axios.create({
  baseURL: baseURL,
  headers: {
    authorization: "Bearer" + " " + getToken(),
  },
  timeout: 30 * 1000,
  params: { domain: "tcs" },
});

instance.interceptors.response.use(
  (response) => {
    // if(response.data.status === "success") notification.success({ message: response.data?.message })
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    // if (
    //   error.response.data?.message === "jwt expired" && !originalRequest._retry
    // ) {
    //   originalRequest._retry = true;
    //   const newToken = await fetchTokenToken()
    //   instance.defaults.headers[
    //     "authorization"
    //   ] = `Bearer ${newToken}`;
    //   return instance(originalRequest);
    // }
    if (
      error.response.status >= 400 &&
      error.response.status <= 503 &&
      error.response.status !== 401 &&
      error?.config?.url !== "/auth/logout"
    ) {
      notification.error({
        message: error.response.data?.message || error.response?.statusText,
      });
    }
    return Promise.reject(error);
  }
);

const fetchTokenToken = async () => {
  try {
    const refreshToken = getRefreshToken()
    const res = await instance.post(API_PATHS.REFRESH_TOKEN, { refreshToken })
    const { data } = res.data;
    localStorage.setItem(STORAGE_KEY_CONSTANT, data?.token?.accessToken);
    localStorage.setItem(TOKEN_EXPIRE, data?.token?.expiresIn);
    return data?.token?.accessToken
  } catch (error) {

  }
}

export default instance;
