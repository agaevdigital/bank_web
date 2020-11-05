import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { api_port, api_endpoint } from "../../settings";
import axios from "axios/index";

const BtnCheckSmsCode = withStyles({
  root: {
    background: "#FF9B0F",
    borderRadius: 50,
    border: 0,
    color: "white",
    height: 50,
    width: 250,
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

const singleArrow = {
  borderLeft: "2px solid #fff",
  borderTop: "2px solid #fff",
  borderRight: "0",
  width: "5px",
  height: "5px",
  transform: "rotate(135deg)",
  margin: "0 9px",
};

export default class CheckSmsCodeButtonLarge extends React.Component {
  constructor(props) {
    super(props);
    this.performSmsCheck = this.performSmsCheck.bind(this);
  }

  performSmsCheck() {
    let smsCheckData = {
      user_id: sessionStorage.getItem("user_id"),
      id_sms_code: sessionStorage.getItem("id_sms_code"),
      entered_sms_code: this.props.etSmsCodeRef.current.getValue(),
      token: sessionStorage.getItem("token"),
      key: sessionStorage.getItem("key"),
    };
    let apiEndpoint = "/login_sms_code_check";
    if (this.props.mode === "LOGIN") {
      apiEndpoint = "/login_sms_code_check";
    }
    if (this.props.mode === "REGISTER") {
      apiEndpoint = "/registration_sms_code_check";
    }
    axios
      .get(
        api_endpoint+ apiEndpoint,
        {
          params: smsCheckData,
        }
      )
      .then((response) => {
        this.props.smsCodeCheckHandler(response.data);
      });
  }

  render() {
    return (
      <div>
          <BtnCheckSmsCode onClick={this.performSmsCheck}>
            Check SMS code
            <div style={singleArrow}></div>
          </BtnCheckSmsCode>
      </div>
    );
  }
}
