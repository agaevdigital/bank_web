import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";

import nextIcon from "components/images/icons/ico_next.png";

const NextIcon = () => <img src={nextIcon} />;

const useStyles = makeStyles((theme) => ({
  button: {
    height: "37px",
    width: 116,
    fontSize: "12px",
    whiteSpace: "nowrap",
    padding: "12px 10px 12px 35px",
    backgroundColor: theme.palette.pu.accent,
    fontFamily: "ProximaNovaSemibold",
    color: "#fff",
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

const NextBtn = ({ onClick = () => {}, disabled, ...rest }) => {
  const classes = useStyles(rest);
  return (
    <Button
      onClick={onClick}
      className={classes.button}
      endIcon={<NextIcon />}
      disabled={disabled ? disabled : false}
    >
      NEXT
    </Button>
  );
};

export default NextBtn;
