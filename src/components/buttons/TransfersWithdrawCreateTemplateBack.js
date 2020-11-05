import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import IconBack from "../../components/images/icons/ico_back.png";

const BtnCreateTemplateBack = withStyles({
  root: {
    background: "#2B3242",
    borderRadius: 50,
    border: 0,
    color: "white",
    height: 36,
    paddingLeft: "25px",
    paddingRight: "17px",
    transition: "box-shadow 0.2s linear",
    marginLeft: "0px",
    marginTop: "5px",
    marginBottom: "5px",
    marginRight: "10px",
    "&:hover": {
      boxShadow: "0 0 2px 5px #a5a6a6",
      background: "#2B3242",
    },
  },
  label: {
    textTransform: "none",
  },
})(Button);

export default class TransfersWithdrawCreateTemplateBack extends React.Component {
  constructor(props) {
    super(props);
    this.templateBack = this.templateBack.bind(this);
  }

  templateBack() {
    this.props.backTemplateHandler();
  }

  render() {
    return (
      <div>
        <BtnCreateTemplateBack onClick={this.templateBack}>
          Back
          <img alt="" src={IconBack} style={{ marginLeft: 10 }} />
        </BtnCreateTemplateBack>
      </div>
    );
  }
}
