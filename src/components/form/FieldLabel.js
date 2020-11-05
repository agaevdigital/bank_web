import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  label: {
    color: "#363636",
    fontFamily: "ProximaNovaSemibold",
    fontSize: 14,
    fontWeight: 400,
    marginBottom: 12
  },
}));

const FieldLabel = ({ children, className }) => {
  const classes = useStyles();
  return <div className={`${classes.label} ${className ? className : ''}`}>{children}</div>;
};

export default FieldLabel;
