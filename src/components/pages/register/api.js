import axios from "axios/index";
import { api_endpoint } from "settings";

export const registerPhoneNumber = (phoneNum) => {
  let phoneNumberData = {
    phone_number: phoneNum,
  };
  const resp = axios
    .post(
      api_endpoint +
        "/registration_by_phone_number",
      phoneNumberData
    )
    .then((response) => {
      return response.data;
    });
  return resp;
};

export const checkRegistrationSmsCode = (smsCode) => {
  let smsCheckData = {
    user_id: sessionStorage.getItem("user_id"),
    id_sms_code: sessionStorage.getItem("id_sms_code"),
    entered_sms_code: smsCode,
    token: sessionStorage.getItem("token"),
    key: sessionStorage.getItem("key"),
  };
  let apiEndpoint = "/registration_sms_code_check";

  const resp = axios
    .get(api_endpoint + apiEndpoint, {
      params: smsCheckData,
    })
    .then((response) => {
      return response.data;
    });
  return resp;
};
