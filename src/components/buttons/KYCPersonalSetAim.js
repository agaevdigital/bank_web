import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { api_port, api_endpoint } from "../../settings";

import axios from "axios/index";

const BtnSetAim = withStyles({
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

export default class KYCPersonalSetAim extends React.Component {
  constructor(props) {
    super(props);
    this.setAim = this.setAim.bind(this);
  }

  setAim() {
    let idStatsData = {
      user_id: this.props.user_id,
      session_user_id: sessionStorage.getItem("user_id"),
      id_user_aim: this.props.id_user_aim,
      custom_user_aim: this.props.id_user_aim === 'OTHER' ? "OTHER" : "",
      token: sessionStorage.getItem("token"),
      key: sessionStorage.getItem("key"),
    };
    //this.props.showProgressBar(true);

    axios
      .post(
        api_endpoint+
          "/set_personal_user_aim",
        idStatsData
      )
      .then((resp) => {
        //this.props.showProgressBar(false);
        if (resp.data.status === "OK") {
          sessionStorage.setItem("token", resp.data.response.token);
          sessionStorage.setItem("key", resp.data.response.key);
        } else {
          console.log(JSON.stringify(resp.data));
        }
        this.props.setAimResponseHandler(resp.data);
      });
  }

  render() {
    return (
      <div>
        <BtnSetAim onClick={this.setAim}>
          Next
          <div style={singleArrow} />
        </BtnSetAim>
      </div>
    );
  }
}
