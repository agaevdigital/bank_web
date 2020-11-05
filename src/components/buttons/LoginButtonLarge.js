import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { api_endpoint } from "../../settings";

import axios from "axios/index";

const BtnLogin = withStyles({
  root: {
    background: "#FF9B0F",
    borderRadius: 50,
    border: 0,
    color: "white",
    height: 50,
    width: 180,
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

export default class LoginButtonLarge extends React.Component {
  constructor(props) {
    super(props);
    this.performLogin = this.performLogin.bind(this);
    this.enterPressed = this.enterPressed.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.enterPressed);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.enterPressed);
  }

  enterPressed(event) {
    var code = event.keyCode || event.which;
    if (code === 13) {
      this.performLogin();
    }
  }

  performLogin() {
    let login = this.props.etLoginRef.current.getValue();
    let password = this.props.etPasswordRef.current.getValue();
    let loginData = {
      login: login,
      password: password,
      token: sessionStorage.getItem("token"),
      key: sessionStorage.getItem("key"),
    };
    this.props.showProgressBar(true);

    
    axios
      .get(api_endpoint + "/login", {
        params: loginData,
      })
      .then((response) => {
        this.props.showProgressBar(false);
        this.props.loginResponseHandler(response.data, login, password);
      });
  }

  render() {
    return (
      <div>
        <BtnLogin onClick={this.performLogin}>
          Log in
          <div style={singleArrow} />
        </BtnLogin>
      </div>
    );
  }
}
