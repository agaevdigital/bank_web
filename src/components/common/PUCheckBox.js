import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import {FormControlLabel} from "@material-ui/core";

const StyledCheckbox = withStyles((theme) => ({
  root: {
    color: "#FF9B0F",
    "&$checked": {
      color: "#FF9B0F",
    },
  },
  checked: {},
}))((props) => <Checkbox color="default" {...props} />);

const PUCheckBox = ({ handleChange, disabled = false , checked, label, ...rest }) => {
  return (
    <FormControlLabel
      control={
        <StyledCheckbox
          onChange={handleChange}
          disabled={disabled}
          checked={checked}
          {...rest}
        />
      }
      label={label}
    />
  );
};

export default PUCheckBox;
