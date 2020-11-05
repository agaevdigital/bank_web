import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";


const BtnBankCardPremium = withStyles({
  root: {
    background: "transparent",
    borderRadius: 5,
    border: "1px solid #ff9b0f",
    borderColor: "#ff9b0f",
    color: "#ff9b0f",
    height: 40,
    padding: "0 10px",
    transition: "background 0.2s linear",
    margin: "5px 5px 5px 5px",
    minWidth: "130px",
    "&:hover": {
      background: "#ff9b0f",
      color: "white",
    },
  },
  label: {
    textTransform: "uppercase",
    fontSize: "20px",
    "&:hover": {
      color: "white",
    },
  },
})(Button);

export default class BankCardPremiumButton extends React.Component {
  constructor(props) {
    super(props);
    this.bankCardPremium = this.bankCardPremium.bind(this);
  }

  bankCardPremium() {
    window.location.replace("/pricing");
    // alert("Premium is so cool!");
  }

  render() {
    return (
      <div>
          <BtnBankCardPremium onClick={this.bankCardPremium}>
            premium
          </BtnBankCardPremium>
      </div>
    );
  }
}
