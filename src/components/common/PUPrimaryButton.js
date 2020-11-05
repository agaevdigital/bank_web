import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";

import backIcon from "components/images/icons/ico_back.png";
import addIcon from "components/images/icons/ico_plus.png";
import ImgTag from "./ImgTag";

const useStyles = makeStyles((theme, props) => ({
  button: {
    minWidth: 'auto',
    justifyContent: "start",
    fontFamily: "ProximaNovaSemibold",
    height: ({ height }) => (height ? height : "auto"),
    width: ({ width }) => (width ? width : "auto"),
    boxShadow: "0 4px 7px 1px rgba(255, 155, 15, 0.53)",
    fontSize: "12px",
    whiteSpace: "nowrap",
    padding: ({ padding }) => (padding ? padding : "12px"),
    backgroundColor: ({ bgColor }) =>
      bgColor ? bgColor : theme.palette.pu.accent,
    color: "#fff",
    "&:hover": {
      backgroundColor: (props) =>
        props.bgColor ? props.bgColor : theme.palette.pu.accent,
    },
    "& .MuiButton-endIcon": {
      padding: "2px",
      borderRadius: "50%",
      marginLeft: "12px",
      // backgroundColor: "rgba(75, 84, 103,0.3)",
    },
  },
}));

const getButtonIcon = (Icon) => React.isValidElement(Icon) ? Icon : <ImgTag src={Icon} />;


const PUPrimaryButton = ({
  children,
  onClick,
  icon,
  disabled,
  cn = "",
  className = '',
  ...rest
}) => {
  const classes = useStyles(rest);
  window.rec = React;
  const Icon = icon ? getButtonIcon(icon) : null;
  return (
    <Button
      onClick={onClick ? onClick : () => { }}
      className={`${classes.button} ${cn}  ${className}`}
      endIcon={Icon}
      disabled={disabled}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default PUPrimaryButton;
