import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { api_port, api_endpoint } from "../../settings";
import axios from "axios/index";

const BtnSendFunds = withStyles({
  root: {
    background: "#FF9B0F",
    borderRadius: 50,
    border: 0,
    color: "white",
    height: 42,
    padding: "0px 80px",
    transition: "box-shadow 0.2s linear",
    margin: "5px 5px 5px 5px",
    "&:hover": {
      boxShadow: "0 0 2px 5px #FFECD2",
      background: "#FF9B0F",
    },
  },
  label: {
    textTransform: "none",
    fontSize: 20,
  },
})(Button);

export default class BankTransferSendFundsButton extends React.Component {
  constructor(props) {
    super(props);
    this.sendFunds = this.sendFunds.bind(this);
  }

  sendFunds() {
    let requestData = {
      user_id: sessionStorage.getItem("user_id"),
      token: sessionStorage.getItem("token"),
      key: sessionStorage.getItem("key"),
      recipient_id: this.props.recipient_id,
      account_id: this.props.account_id,
      amount: this.props.curAmount.current.getValue(),
      payment_description: this.props.sDescription.current.getValue(),
    };
    axios
      .post(
       api_endpoint +
          "/withdrawal_request",
        requestData
      )
      .then((resp) => {
        if (resp.data.status === "OK") {
          sessionStorage.setItem("token", resp.data.response.token);
          sessionStorage.setItem("key", resp.data.response.key);
          this.props.sendFundsHandler(resp);
        } else {
        }
      });
  }

  render() {
    return (
      <div>
          <BtnSendFunds onClick={this.sendFunds}>Send funds</BtnSendFunds>
      </div>
    );
  }
}
