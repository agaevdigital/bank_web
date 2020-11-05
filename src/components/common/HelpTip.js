import React from "react";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import HelpIcon from "@material-ui/icons/HelpOutlineSharp";
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  tooltip: {
    padding: "17px 15px",
    backgroundColor: "#fff",
    color: "black",
    fontFamily: "ProximaNovaSemibold",
    boxShadow: "0 20px 40px 0 rgba(0, 0, 0, .3)",
    color: "#363636",
    fontSize: 14,
  },
  tooltipArrow: {
    color: "#fff",
  },
  helpIcon: {
    color: ({ iconColor }) => (iconColor ? iconColor : "#9f9f9f"),
    fontSize: "1rem",
    marginLeft: ({ mL }) => (mL ? mL + "px" : "auto"),
  },
}));

const HelpTip = ({ title, ...rest }) => {
  const classes = useStyles(rest);
  return (
    <Tooltip
      placement="top"
      classes={{
        tooltip: classes.tooltip,
        arrow: classes.tooltipArrow,
      }}
      title={title}
      arrow
    >
      <ErrorOutlineIcon className={classes.helpIcon} />
    </Tooltip>
  );
};

export default HelpTip;
