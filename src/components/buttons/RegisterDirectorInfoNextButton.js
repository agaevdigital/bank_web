import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { api_port, api_endpoint } from "../../settings";
import axios from "axios/index";

const BtnRegisterDirectorNext = withStyles({
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

export default class RegisterDirectorInfoNextButton extends React.Component {
  constructor(props) {
    super(props);
    this.setDirectorData = this.setDirectorData.bind(this);
  }

  setDirectorData() {
    let date_of_birth = this.props.dpBirthdayRef.current.getValue();
    let corrected_date = new Date(
      date_of_birth.getTime() - date_of_birth.getTimezoneOffset() * 60000
    ).toJSON();

    let directorData = {
      id: this.props.user_id,
      session_user_id: sessionStorage.getItem("user_id"),
      first_name: this.props.etFirstNameRef.current.getValue(),
      last_name: this.props.etLastNameRef.current.getValue(),
      patronymic: this.props.etPatronymicRef.current.getValue(),
      date_of_birth: corrected_date,
      country: this.props.selectedCountry,
      account_type: this.props.account_type,
      token: sessionStorage.getItem("token"),
      key: sessionStorage.getItem("key"),
    };

    //alert(directorData);

    axios
      .post(
        api_endpoint +
          "/registration_personal_data",
        directorData
      )
      .then((resp) => {
        sessionStorage.setItem("token", resp.data.response.token);
        sessionStorage.setItem("key", resp.data.response.key);
        this.props.directorSetPersonalDataHandler(resp.data);
      });
  }

  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <BtnRegisterDirectorNext onClick={this.setDirectorData}>
          Next
        </BtnRegisterDirectorNext>
      </div>
    );
  }
}
