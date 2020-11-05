import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { withTranslation } from "react-i18next";

const BtnSignUp = withStyles({
  root: {
    background: "#FF9B0F",
    borderRadius: 50,
    border: 0,
    color: "#fff",
    height: 36,
    padding: "0 20px",
    width: "120px",
    transition: "box-shadow 0.2s linear",
    margin: "5px 5px 5px 5px",
    "&:hover": {
      boxShadow: "0 0 2px 5px #534638",
      background: "#FF9B0F",
    },
  },
  label: {
    textTransform: "none",
  },
})(Button);

class SignupFooterButton extends React.Component {
  constructor(props) {
    super(props);
    this.performSignUp = this.performSignUp.bind(this);
  }

  performSignUp() {
    // alert("No please don't sign up!");
    window.location.replace("/register");
  }

  render() {
    return (
      <div>
        <BtnSignUp onClick={this.performSignUp}>
          {this.props.t("mainpage.sign_up")}
        </BtnSignUp>
      </div>
    );
  }
}

export default withTranslation()(SignupFooterButton);
