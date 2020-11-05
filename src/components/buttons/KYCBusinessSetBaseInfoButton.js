import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import proximaNovaTheme from "../themes/ProximaNova";
import { api_port, api_endpoint } from "../../settings";
import axios from "axios/index";

const BtnBusinessKYCBaseInfo = withStyles({
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

const KYCBusinessSetBaseInfoButton = ({ onClick }) => (
  <div>
    <BtnBusinessKYCBaseInfo onClick={onClick}>Next</BtnBusinessKYCBaseInfo>
  </div>
);


export default KYCBusinessSetBaseInfoButton;

// export default class KYCBusinessSetBaseInfoButton extends React.Component {

//   render() {
//     return (

//     );
//   }
// }
