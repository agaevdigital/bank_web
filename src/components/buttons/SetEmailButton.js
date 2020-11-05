import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { api_port, api_endpoint } from "../../settings";
import axios from "axios/index";

const BtnSetEmail = withStyles({
  root: {
    background: "#FF9B0F",
    borderRadius: 50,
    border: 0,
    color: "white",
    height: 50,
    width: 250,
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

export default class SetEmailButton extends React.Component {
  constructor(props) {
    super(props);
    this.setEmail = this.setEmail.bind(this);
  }

  setEmail() {
    let setEmailData = {
      id: sessionStorage.getItem("user_id"),
      email: this.props.etEmailRef.current.getValue(),
      token: sessionStorage.getItem("token"),
      key: sessionStorage.getItem("key"),
    };

    axios
      .post(
        api_endpoint + "/set_email",
        setEmailData
      )
      .then((response) => {
        this.props.setEmailHandler(response.data);
      });
  }

  render() {
    return (
      <div>
        <BtnSetEmail onClick={this.setEmail}>Save email</BtnSetEmail>
      </div>
    );
  }
}
