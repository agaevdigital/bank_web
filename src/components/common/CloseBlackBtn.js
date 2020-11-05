import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";

import closeIcon from "components/images/icons/closeicon.png";

const CloseIcon = () => <img src={closeIcon} />;

const useStyles = makeStyles((theme) => ({
  button: {
    height: "37px",
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

const CloseBlackBtn = ({ onClick, children, className = '', disabled, ...rest }) => {
  const classes = useStyles(rest);
  return (
    <Button
      onClick={onClick}
      className={`${classes.button} ${className}`}
      endIcon={<CloseIcon />}
      disabled={disabled ? disabled : false}
    >
      {children}
    </Button>
  );
};

export default CloseBlackBtn;
