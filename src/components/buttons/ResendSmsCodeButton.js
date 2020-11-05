import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const BtnForgotPassword = withStyles({
  root: {
    background: "transparent",
    borderRadius: 50,
    border: 0,
    color: "#FF9B0F",
    height: 50,
    width: 270,
    padding: "0 20px",
    margin: "5px 5px 5px 5px",
    "&:hover": {
      background: "transparent",
    },
  },
  label: {
    textTransform: "none",
    fontSize: "16px",
    fontWeight: "700 !important",
    color: "#363636",
    "&:hover": {
      color: "#FF9B0F",
    },
  },
})(Button);

export default class ResendSmsCodeButton extends React.Component {
  constructor(props) {
    super(props);
    this.resendSMS = this.resendSMS.bind(this);
  }

  resendSMS() {
    alert("okay-okay I'm working!");
  }

  render() {
    return (
      <div>
        <BtnForgotPassword onClick={this.resendSMS}>
          Send SMS code again
        </BtnForgotPassword>
      </div>
    );
  }
}
