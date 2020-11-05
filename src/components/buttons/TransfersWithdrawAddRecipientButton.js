import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const BtnAddRecipient = withStyles({
  root: {
    background: "#FF9B0F",
    borderRadius: 50,
    border: 0,
    color: "white",
    height: 36,
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
  },
})(Button);

export default class TransfersWithdrawAddRecipientButton extends React.Component {
  constructor(props) {
    super(props);
    this.addRecipient = this.addRecipient.bind(this);
  }

  addRecipient() {
    this.props.addRecipientHandler();
  }

  render() {
    return (
      <div>
        <BtnAddRecipient onClick={this.addRecipient}>Add new</BtnAddRecipient>
      </div>
    );
  }
}
