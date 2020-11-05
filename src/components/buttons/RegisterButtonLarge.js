import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const BtnRegisterPhoneNumber = withStyles({
  root: {
    background: "#FF9B0F",
    borderRadius: 50,
    border: 0,
    color: "white",
    height: 50,
    width: 180,
    padding: "0 20px",
    transition: "box-shadow 0.2s linear",
    margin: "5px 5px 5px 5px",
    "&:hover": {
      boxShadow: "0 0 2px 5px #FFECD2",
      background: "#FF9B0F",
    },
  },
  label: {
    textTransform: "none",
    fontSize: "16px",
    fontWeight: "700 !important",
  },
})(Button);

const RegisterButtonLarge = ({ onClick, disabled }) => {
  return (
    <div>
      <BtnRegisterPhoneNumber onClick={onClick} disabled={disabled}>
        Register
      </BtnRegisterPhoneNumber>
    </div>
  );
};
export default RegisterButtonLarge;
