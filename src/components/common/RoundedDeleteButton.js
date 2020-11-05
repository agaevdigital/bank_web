import React from "react";
import { Button, withStyles } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';



const StyledBtn = withStyles({
  root: {
    background: "#2b3241",
    borderRadius: 50,
    border: 0,
    color: "white",
    height: 36,
    width: ({width}) => width ? width : 'auto',
    padding: "0 20px",
    transition: "box-shadow 0.2s linear",
    margin: "5px 5px 5px 5px",
    "&:hover": {
      boxShadow: "0 0 2px 5px rgba(43, 50, 65, 0.07)",
      background: "#2b3241",
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

const RoundedDeleteButton = ({ children,loading,  ...rest }) => (
  <div>
    <StyledBtn fontSize="small" {...rest}  endIcon={<CloseIcon />}>{children}</StyledBtn>
  </div>
);


export default RoundedDeleteButton;
