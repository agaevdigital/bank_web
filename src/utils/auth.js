import axiosWithToken from "./axiosWithToken";

export const performLogout = (cb) => {
  axiosWithToken.get("logout").then((response) => {
    sessionStorage.clear();
    cb && cb(response.data);
  });
};
