import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { withTranslation } from "react-i18next";

const BtnLogin = withStyles({
  root: {
    background: "#fff",
    borderRadius: 50,
    border: 0,
    color: "#000",
    height: 36,
    padding: "0 20px",
    width: "120px",
    transition: "box-shadow 0.2s linear",
    margin: "5px 5px 5px 5px",
    "&:hover": {
      boxShadow: "0 0 2px 5px #535965",
      background: "#fff",
    },
  },
  label: {
    textTransform: "none",
  },
})(Button);

class LoginFooterButton extends React.Component {
  constructor(props) {
    super(props);
    this.performLogin = this.performLogin.bind(this);
  }

  performLogin() {
    // alert("Oh why have you clicked me, leave me alone!");
    window.location.replace("/login");
  }

  render() {
    return (
      <div>
        <BtnLogin onClick={this.performLogin}>
          {this.props.t("mainpage.log_in")}
        </BtnLogin>
      </div>
    );
  }
}
export default withTranslation()(LoginFooterButton);
