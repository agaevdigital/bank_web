import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  borderedWrapper: {
    border: `1px solid ${theme.palette.pu.borderColor}`,
    padding: 40,
    height: '100%'
  },
}));

const BorderedWrapper = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.borderedWrapper}>{children}</div>;
};

export default BorderedWrapper;
