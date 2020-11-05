import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";

import backIcon from "components/images/icons/ico_back.png";

const BackIcon = () => <img src={backIcon} />;

const useStyles = makeStyles((theme) => ({
  button: {
    height: "37px",
    width: 116,
    fontSize: "12px",
    whiteSpace: "nowrap",
    padding: "12px 10px 12px 35px",
    backgroundColor: "#2b3241",
    color: "#fff",
    fontFamily: "ProximaNovaSemibold",
    "&:hover": {
      backgroundColor: "#2b3241",
    },
    "& .MuiButton-endIcon": {
      padding: "2px",
      borderRadius: "50%",
      marginLeft: theme.spacing(2),
    },
  },
}));

const BackBtn = ({ onClick = () => {}, className = '', disabled, ...rest }) => {
  const classes = useStyles(rest);
  return (
    <Button
      onClick={onClick}
      className={`${classes.button} ${className}`}
      endIcon={<BackIcon />}
      disabled={disabled ? disabled : false}
    >
      BACK
    </Button>
  );
};

export default BackBtn;
