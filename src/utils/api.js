import axiosWithToken from "./axiosWithToken";

export const validateIban = async (iban) => {
  let response;

  try {
   response = await axiosWithToken.get("validate_iban", {
      params: { iban },
    });
  } catch (err) {
    response = err;
  }
  return response;
};
