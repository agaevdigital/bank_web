import React from "react";
import { Button, withStyles, CircularProgress } from "@material-ui/core";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const StyledBtn = withStyles({
  root: {
    background: "#FF9B0F",
    borderRadius: 50,
    border: 0,
    color: "white",
    height: 36,
    width: ({width}) => width ? width : 'auto',
    padding: "0 20px",
    transition: "box-shadow 0.2s linear",
    margin: "5px 5px 5px 5px",
    "&:hover": {
      boxShadow: "0 0 2px 5px #FFECD2",
      background: "#FF9B0F",
    },
    "& a": {
      textDecoration: "none",
      color: "inherit",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
    },
  },
  label: {
    textTransform: "none",
  },
  disabled: {
    '& .arrow': {
      borderColor: 'rgba(0, 0, 0, 0.26) !important'
    }
  }
})(Button);

const RoundedButton = ({ children,loading,  ...rest }) => (
  <div>
    <StyledBtn {...rest} endIcon={loading ? <CircularProgress size={14} style={{color: '#fff'}} /> : <NavigateNextIcon />}>{children}</StyledBtn>
  </div>
);

// component={Link} to="/login"

export default RoundedButton;
