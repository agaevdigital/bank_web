import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { withRouter } from "react-router-dom";

const BtnKycBackToStageSelect = withStyles({
  root: {
    background: "#FF9B0F",
    borderRadius: 50,
    border: 0,
    color: "white",
    height: 50,
    width: 320,
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

class KYCBackToStageSelectButton extends React.Component {
  constructor(props) {
    super(props);
    this.backToStageSelect = this.backToStageSelect.bind(this);
  }

  backToStageSelect() {
    this.props.handleBackToKycStageSelect();
  }

  render() {
    return (
      <div>
        <BtnKycBackToStageSelect onClick={this.backToStageSelect}>
          Back to stage selection
          <div style={singleArrow} />
        </BtnKycBackToStageSelect>
      </div>
    );
  }
}

export default withRouter(KYCBackToStageSelectButton);
