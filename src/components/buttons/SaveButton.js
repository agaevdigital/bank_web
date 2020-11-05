import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";


import IconSave from "components/images/icons/ico_save.png";

const SaveIcon = () => <img src={IconSave} alt="" />;

const useStyles = makeStyles((theme, props) => ({
  button: {
    height: "37px",
    fontSize: "12px",
    whiteSpace: "nowrap",
    padding: (props) => (props.padding ? props.padding : "12px 10px 12px 35px"),
    backgroundColor: "#e4e9e9",
    color: "#000000",
    "&:hover": {
      backgroundColor: "#e4e9e9",
    },
    "& .MuiButton-endIcon": {
      padding: "2px",
      borderRadius: "50%",
      marginLeft: theme.spacing(2),
      marginRight: 5,
    },
  },
}));

const SaveButton = ({ children, disabled, onClick, ...props }) => {
  const classes = useStyles(props);
  return (
    <Button
      onClick={onClick ? onClick : () => {}}
      className={classes.button}
      endIcon={<SaveIcon />}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};

export default SaveButton;
