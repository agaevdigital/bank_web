import React from "react";
import { FormControl } from "@material-ui/core";

import FieldLabelWithTip from "components/form/FieldLabelWithTip";
import FieldLabel from "components/form/FieldLabel";
import PUBaseInput from "components/common/PUBaseInput";

const InputWithLabel = ({
  label,
  hint,
  hintColor,
  maxLength,
  className="",
  ...rest
  // inputName,
  // onChange,
  // disabled,
}) => {
  return (
      <FormControl fullWidth className={className}>
        {hint ? (
          <FieldLabelWithTip iconColor={hintColor ? hintColor : "#ff9b0f"} helpText="some help">
            {label}
          </FieldLabelWithTip>
        ) : (
          <FieldLabel>{label}</FieldLabel>
        )}

        <PUBaseInput
          inputProps={{
            maxLength: maxLength ? maxLength : 30,
          }}
          {...rest}
          // disabled={disabled && true}
          // border={border}
        />
      </FormControl>
  );
};

export default InputWithLabel;
