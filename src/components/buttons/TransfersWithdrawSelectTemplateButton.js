import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const BtnSelectTemplate = withStyles({
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

export default class TransfersWithdrawSelectTemplateButton extends React.Component {
  constructor(props) {
    super(props);
    this.selectTemplate = this.selectTemplate.bind(this);
  }

  selectTemplate() {
    this.props.selectTemplateHandler();
  }

  render() {
    return (
      <div>
        <BtnSelectTemplate onClick={this.selectTemplate}>
          Select template
        </BtnSelectTemplate>
      </div>
    );
  }
}
