import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  error: {
    fontSize: "0.75rem",
    textAlign: "left",
    color: "#f44336",
    marginTop: "5px",
    marginRight: "0",
    marginLeft: "15px",
  },
}));

const PUInputError = ({ text }) => {
  const classes = useStyles();
  return <div className={classes.error}>{text}</div>;
};

export default PUInputError;
