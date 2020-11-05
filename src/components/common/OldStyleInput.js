import React from "react";
import TextField from "@material-ui/core/TextField";

import { withStyles } from "@material-ui/core/styles";
import FormFieldLabel from "./FormFieldLabel";
import { Box } from "@material-ui/core";

const CssTextField = withStyles({
  root: {
    width: "100%",
    marginTop: "4px",
    marginBottom: "4px",
    "& label.Mui-focused": {
      color: "#838989",
      fontFamily: "ProximaNova, sans-serif",
    },
    "& label": {
      color: "#838989",
      fontFamily: "ProximaNova, sans-serif",
    },
    "& input": {
      color: "#838989",
      fontFamily: "ProximaNova, sans-serif",
      paddingLeft: "30px",
      paddingRight: "25px",
      paddingTop: "10px",
      paddingBottom: "10px",
      backgroundColor: "#ebf7f8",
      borderRadius: "30px",
      "&.Mui-disabled": {
        backgroundColor: "#E8E8E8",
      },
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "transparent",
        borderRadius: "50px",
      },
      "&:hover fieldset": {
        borderColor: "#bfdeff",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#bfdeff",
      },
      "&.Mui-disabled fieldset": {
        //backgroundColor: '#E8E8E8',
        borderColor: "#E8E8E8",
        //borderColor: '#E8E8E8',
      },
      // ':hover fieldset &.Mui-disabled': {
      //     //backgroundColor: '#E8E8E8',
      //     borderColor: '#E8E8E8',
      // },
    },
  },
})(TextField);
//  "errors": [{"code": 23, "message": "Empty country!"}, {"code": 26, "message": "Empty address!"}]

export default class OldStyleInput extends React.Component {
  state = {
    selectedValue: "",
    error: false,
    errorText: "",
  };

  handleChange = (event) => {
    if (this.state.error) {
      this.setState({
        error: false,
        errorText: "",
      });
    }
    this.setState({ selectedValue: event.target.value });
  };

  getValue() {
    return this.state.selectedValue;
  }

  setError = (errorText) => {
    this.setState({
      error: true,
      errorText: errorText,
    });
  };

  setValue(value) {
    this.setState({ selectedValue: value });
  }

  clear = () => {
    this.setState({
      selectedValue: "",
      error: false,
      errorText: "",
    });
  };

  render() {
    const {
      variant = "outlined",
      required = false,
      margin = "normal",
      disabled = false,
      type = "text",
      value,
      onChange,
      error,
      fieldLable,
      ...rest
    } = this.props;
    return (
      <Box width="100%">
        {fieldLable && <FormFieldLabel>{fieldLable}</FormFieldLabel>}
        <CssTextField
          //defaultValue={this.props.tf_default_value}
          //   InputProps={{ disableUnderline: true }}
          type={type}
          error={!!error}
          helperText={error}
          required={required}
          margin={margin}
          variant={variant}
          disabled={disabled}
          onChange={onChange}
          value={value}
          {...rest}
        />
      </Box>
    );
  }
}
