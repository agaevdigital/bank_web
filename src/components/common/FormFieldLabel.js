import React from 'react';
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    fontFamily: 'ProximaNovaSemibold',
    color: "#363636",
    fontSize: "18px",    
    textAlign: 'left',
    fontWeight: 'bold',
    marginTop: '20px',
    marginBottom: '0px',
    marginLeft: '30px'
  },
});

export default ({ children }) => {
  const classes = useStyles();
  return <h3 className={classes.root}>{children}</h3>;
};
