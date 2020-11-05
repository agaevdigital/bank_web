import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { api_port, api_endpoint } from "../../settings";
import axios from "axios/index";

const BtnSaveShareholders = withStyles({
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

export default class SaveShareholdersButton extends React.Component {
  constructor(props) {
    super(props);
    this.saveShareholders = this.saveShareholders.bind(this);
    this.state = {
      company_id: this.props.companyID,
    };
  }

  ifOwnersNotEmpty = (owners) => {
    return owners.every((owner) => {
      return owner.name && owner.surname
    });
  };

  saveShareholders() {

    let company_owners = this.props.puShareholdersRef.current.getValue();

    if(!this.ifOwnersNotEmpty(company_owners)) {
      return alert('Please fill name and surname fields');
    }

    let saveDirectorsData = {
      company_owners: this.props.puShareholdersRef.current.getValue(),
      company_id: this.state.company_id,
      token: sessionStorage.getItem("token"),
      key: sessionStorage.getItem("key"),
      session_user_id: this.props.user_id,
      owner_type: this.props.owner_type,
    };
    axios
      .post(
        api_endpoint +
          "/save_company_owners",
        saveDirectorsData
      )
      .then((resp) => {
        if (resp.data.status === "OK") {
          sessionStorage.setItem("token", resp.data.response.token);
          sessionStorage.setItem("key", resp.data.response.key);
        } else {
          console.log(JSON.stringify(resp.data.response));
        }
        this.props.setShareholdersHandler(resp.data);
      });
  }

  render() {
    return (
      <div>
        <BtnSaveShareholders onClick={this.saveShareholders}>
          Save shareholders
        </BtnSaveShareholders>
      </div>
    );
  }
}
