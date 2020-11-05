import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const BtnForgotPassword = withStyles({
  root: {
    background: "transparent",
    borderRadius: 50,
    border: 0,
    color: "#FF9B0F",
    height: 50,
    width: 200,
    padding: "0 20px",
    margin: "5px 5px 5px 5px",
    "&:hover": {
      background: "transparent",
    },
  },
  label: {
    textTransform: "none",
    fontSize: "16px",
    fontWeight: "700 !important",
    color: "#363636",
    "&:hover": {
      color: "#FF9B0F",
    },
  },
})(Button);

export default class ForgotPasswordButton extends React.Component {
  
  render() {
    return (
      <div>
        <BtnForgotPassword component={Link} to="/login/restore">
          Restore password          
        </BtnForgotPassword>
      </div>
    );
  }
}
