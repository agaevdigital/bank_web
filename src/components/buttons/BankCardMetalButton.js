import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {Button} from "@material-ui/core";

const BtnBankCardMetal = withStyles({
  root: {
    background: "transparent",
    borderRadius: 5,
    border: "1px solid #2fd8e6",
    borderColor: "#2ea7b4",
    color: "#2ea7b4",
    height: 40,
    padding: "0 10px",
    transition: "background 0.2s linear",
    margin: "5px 5px 5px 5px",
    minWidth: "130px",
    "&:hover": {
      background: "#2ea7b4",
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

export default class BankCardMetalButton extends React.Component {
  constructor(props) {
    super(props);
    this.bankCardMetal = this.bankCardMetal.bind(this);
  }

  bankCardMetal() {
    window.location.replace("/pricing");
    // alert("Metal is better than prem, wat?!");
  }

  render() {
    return (
      <div>
        <BtnBankCardMetal onClick={this.bankCardMetal}>metal</BtnBankCardMetal>
      </div>
    );
  }
}
