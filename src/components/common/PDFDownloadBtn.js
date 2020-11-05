import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";

import Description from '@material-ui/icons/Description';


const useStyles = makeStyles((theme) => ({
  button: {
    height: "37px",
    fontSize: "12px",
    whiteSpace: "nowrap",
    padding: "12px 10px 12px 35px",
    backgroundColor: theme.palette.pu.accent,
    color: "#fff",
    fontFamily: "ProximaNovaSemibold",
    "&:hover": {
      backgroundColor: theme.palette.pu.accent,
    },
    "& .MuiButton-endIcon": {
      padding: "2px",
      borderRadius: "50%",
      marginLeft: theme.spacing(2),
    },
  },
}));

const PDFDownloadBtn = ({ onClick, children, className = '', disabled, ...rest }) => {
  const classes = useStyles(rest);
  return (
    <Button
      onClick={onClick}
      className={`${classes.button} ${className}`}
      endIcon={<Description />}
      disabled={disabled ? disabled : false}
    >
      {children}
    </Button>
  );
};

export default PDFDownloadBtn;
