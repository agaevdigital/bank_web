import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  pageSubtitle: {
    fontSize: theme.spacing(2.25),
    marginBottom: 30,
  },
}));

const FormTitle = ({ children }) => {
  const classes = useStyles();
  return (
    <Typography
      align="left"
      variant="subtitle2"
      classes={{ root: classes.pageSubtitle }}
    >
      {children}
    </Typography>
  );
};

export default FormTitle;
