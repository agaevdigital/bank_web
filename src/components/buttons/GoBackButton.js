import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";

import backIcon from "components/images/icons/ico_back.png";

const BackIcon = () => <img src={backIcon} />;

const useStyles = makeStyles((theme, props) => ({
  button: {
    height: "37px",
    fontSize: "12px",
    whiteSpace: "nowrap",
    padding: (props) => (props.padding ? props.padding : "12px 10px 12px 35px"),
    backgroundColor: "#2b3241",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#2b3241",
    },
    "& .MuiButton-endIcon": {
      padding: "2px",
      borderRadius: "50%",
      marginLeft: theme.spacing(2),
      marginRight: 5,
    },
  },
}));

const GoBackButton = ({ children, disabled, onClick, ...props }) => {
  const classes = useStyles(props);
  return (
    <Button
      onClick={onClick ? onClick : () => {}}
      className={classes.button}
      endIcon={<BackIcon />}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};

export default GoBackButton;
