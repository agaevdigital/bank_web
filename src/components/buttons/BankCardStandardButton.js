import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";


const BtnBankCardStandard = withStyles({
  root: {
    background: "transparent",
    borderRadius: 5,
    border: "1px solid white",
    borderColor: "white",
    color: "white",
    height: 40,
    padding: "0 10px",
    transition: "background 0.2s linear",
    margin: "5px 5px 5px 5px",
    minWidth: "130px",
    "&:hover": {
      background: "white",
      color: "#2b3241",
    },
  },
  label: {
    textTransform: "uppercase",
    fontSize: "20px",
    "&:hover": {
      color: "#2b3241",
    },
  },
})(Button);

export default class BankCardStandardButton extends React.Component {
  constructor(props) {
    super(props);
    this.bankCardStandard = this.bankCardStandard.bind(this);
  }

  bankCardStandard() {
    sessionStorage.setItem("preselectedItem", "PERSONAL");
    window.location.replace("/pricing");
    // alert("Standard bank card, lol!");
  }

  render() {
    return (
      <div>
          <BtnBankCardStandard onClick={this.bankCardStandard}>
            standard
          </BtnBankCardStandard>
      </div>
    );
  }
}
