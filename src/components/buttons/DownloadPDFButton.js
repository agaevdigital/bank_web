import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const BtnDownloadPDF = withStyles({
  root: {
    background: "#FF9B0F",
    borderRadius: 50,
    border: 0,
    color: "white",
    height: 36,
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
    textDecoration: "none",
  },
})(Button);

export default class DownloadPDFButton extends React.Component {
  // constructor(props) {
  //     super(props);
  // }

  render() {
    return (
      <div>
        <BtnDownloadPDF> Download PDF </BtnDownloadPDF>
      </div>
    );
  }
}
