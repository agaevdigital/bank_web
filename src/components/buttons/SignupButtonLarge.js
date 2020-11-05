import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { withTranslation } from "react-i18next";

const BtnSignUp = withStyles({
  root: {
    background: "#ff9b0f",
    borderRadius: 50,
    border: 0,
    color: "white",
    height: 70,
    width: 325,
    padding: "0 20px",
    transition: "box-shadow 0.2s linear",
    marginTop: "2.5rem !important",
    marginBottom: "5px",
    marginLeft: "0",
    marginRight: "5px",
    "&:hover": {
      boxShadow: "0 0 2px 5px #FFECD2",
      background: "#ff9b0f",
    },
    "@media (max-width: 800px)": {
      marginTop: "0px !important",
    },
    "@media (max-width: 425px)": {
      width: "100%",
    },
  },
  label: {
    fontSize: "24px",
    fontWeight: "700 !important",
    textTransform: "capitalize",
  },
})(Button);

const singleArrow = {
  borderLeft: "3px solid #fff",
  borderTop: "3px solid #fff",
  borderRight: "0",
  width: "10px",
  height: "10px",
  transform: "rotate(135deg)",
  margin: "0 9px",
};

class SignupButtonLarge extends React.Component {
  constructor(props) {
    super(props);
    this.performSignUp = this.performSignUp.bind(this);
  }

  performSignUp() {
    this.props.registerRedirectHandler();
    // alert("No please don't sign up!");
  }

  render() {
    return (
      <div>
        <BtnSignUp onClick={this.performSignUp}>
          {this.props.t("mainpage.sign_up")}
          <div style={singleArrow}></div>
        </BtnSignUp>
      </div>
    );
  }
}

export default withTranslation()(SignupButtonLarge);
