import { ApiConfig } from "./constants";
import axios from "axios";
let { baseUrl } = ApiConfig;
baseUrl = baseUrl + "/";

const Axios = axios.create({
  // withCredentials: true,
  validateStatus: null,
  // rejectUnauthorized: false,
  baseURL: baseUrl,
  // headers: access ? { Authorization: `Bearer ${access}` } : {},
});
class DataManager {
  get = async (url, params, opt, data, reload) =>
    await this.check(
      url,
      opt,
      async () =>
        await Axios.get(url, {
          params,
          ...opt,
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`,
          },
        }),
      data || params,
      reload
    );

  patch = async (url, params, opt, data, reload) =>
    await this.check(
      url,
      opt,
      async () =>
        await Axios.patch(url, params, {
          ...opt,
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`,
          },
        }),
      data || params,
      reload
    );
  post = async (url, params, opt, data, reload) =>
    await this.check(
      url,
      opt,
      async () =>
        await Axios.post(url, params, {
          ...opt,
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`,
          },
        }),
      data || params,
      reload
    );
  put = async (url, params, opt, data, reload) =>
    await this.check(
      url,
      opt,
      async () =>
        await Axios.put(url, params, {
          ...opt,
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`,
          },
        }),
      data || params,
      reload
    );
  delete = async (url, params, opt, data, reload) => {
    await this.check(
      url,
      opt,
      async () =>
        await Axios.delete(url, {
          ...opt,
          data: params,
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`,
          },
        }),
      data || params,
      reload
    );
  };

  check = async (url, { dispatch }, fetch, params, reload) => {
    dispatch = dispatch || (() => {});

    try {
      dispatch({ type: "LOADING_START" });
      let response = await fetch();

      if (response) {
        await dispatch({ type: url, payload: response.data, params });
      } else {
        console.error(response);
      }
      await dispatch({ type: "LOADING_END" });

      if (reload) {
        if (typeof reload == "boolean") {
          window.location.reload();
        }
      } else {
        window.location.href = reload;
      }
      return response.data;
    } catch (error) {
      await dispatch({ type: "LOADING_END" });
      console.error(error);
    }

    return false;
  };
}
const _dataManager = new DataManager();

export default _dataManager;
