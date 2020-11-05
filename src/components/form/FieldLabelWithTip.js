import React from "react";
import { makeStyles } from "@material-ui/styles";
import FieldLabel from "./FieldLabel";
import Help from "components/exchangecurrency/Help";
import HelpTip from "components/common/HelpTip";

const useStyles = makeStyles((theme) => ({
  wrap: {
    display: "flex",
    alignItems: "center",
    marginBottom: 12
  },
  noMargin: {
   marginBottom: 0
  }
}));

const FieldLabelWithTip = ({ children, helpText, iconColor }) => {
  const classes = useStyles();
  return (
    <div className={classes.wrap}>
      <FieldLabel className={classes.noMargin}>{children}</FieldLabel>
      <HelpTip iconColor={iconColor} mL="8" title={helpText} />
    </div>
  );
};

export default FieldLabelWithTip;
