import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const BtnClosePDF = withStyles({
  root: {
    background: "#2B3242",
    borderRadius: 50,
    border: 0,
    color: "white",
    height: 36,
    padding: "0 20px",
    transition: "box-shadow 0.2s linear",
    margin: "5px 5px 5px 5px",
    "&:hover": {
      boxShadow: "0 0 2px 5px #a5a6a6",
      background: "#2B3242",
    },
  },
  label: {
    textTransform: "none",
  },
})(Button);

export default class ClosePDFButton extends React.Component {
  constructor(props) {
    super(props);
    this.closeHandler = this.closeHandler.bind(this);
  }

  closeHandler() {
    this.props.closeHandler();
  }

  render() {
    return (
      <div>
          <BtnClosePDF onClick={this.closeHandler}> Close </BtnClosePDF>
      </div>
    );
  }
}
