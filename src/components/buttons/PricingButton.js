import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { withTranslation } from "react-i18next";

const BtnPricing = withStyles({
  root: {
    background: "transparent",
    borderRadius: 50,
    border: 0,
    color: "#000000",
    height: 36,
    padding: "0 20px",
    margin: "5px 5px 5px 5px",
    "&:hover": {
      background: "transparent",
    },
  },
  label: {
    textTransform: "none",
    color: "#363636",
    "&:hover": {
      color: "#FF9B0F",
    },
  },
})(Button);

class PricingButton extends React.Component {
  constructor(props) {
    super(props);
    this.viewPricing = this.viewPricing.bind(this);
  }

  viewPricing() {
    window.location.replace("/pricing");
    //alert("no money no honey!");
  }

  render() {
    return (
      <div>
        <BtnPricing onClick={this.viewPricing}>
          {this.props.t("mainpage.pricing")}
        </BtnPricing>
      </div>
    );
  }
}

export default withTranslation()(PricingButton);
