import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FormFieldLabel from "components/common/FormFieldLabel";
import { Typography } from "@material-ui/core";

const styles = (theme) => ({
  selectWrapper: {
    textAlign: "left",
    borderRadius: "20px",
    background: "#ebf7f8",
    "& fieldset": {
      display: "none",
      // borderRadius: "20px",
      // background: "#ebf7f8",
    },
    "& .Mui-error": {
      border: "1px solid #f44336",
      borderRadius: "20px",
    },
  },
  selectRoot: {
    "&:focus ": {
      background: 0,
    },
  },
  root: {
    width: "100%",
    flexWrap: "wrap",
    // marginTop: "10px",

    // '& .MuiInputBase-input-460::placeholder': {
    //     letterSpacing: "15",
    // },
    //color: "#FF9B0F",
  },
  formControl: {
    margin: 0,
    minWidth: 250,
  },
  selectedItem: {
    backgroundColor: "#ebf7f8 !important",
  },
  cssOutlinedInput: {
    marginTop: "14px",
    // paddingLeft: "15px",
    // paddingRight: "15px",
    color: "rgba(0, 0, 0, 0.49)",
    opacity: "0.9",
    fontSize: "17px",
    fontWeight: "200",
    //letterSpacing: "15",
    fontFamily: "ProximaNova, sans-serif",
    borderRadius: "20px",
    backgroundColor: "#ebf7f8",
    // backgroundColor: "#ebf7f8",
    "&$cssFocused $notchedOutline": {
      borderColor: "#bfdeff !important",
      borderWidth: "1px",
      //color: 'red',
      // backgroundColor: "red"
    },
    "&$cssDisabled $notchedOutline": {
      borderColor: "#1E2127 !important",
      borderWidth: "0px",
      color: "black",
    },
    "&:hover $notchedOutline": {
      borderColor: "#bfdeff !important",
      borderWidth: "1px",
      color: "white",
    },
  },
  notchedOutline: {
    "&:not($disabled)": {
      borderColor: "grey !important",
      borderWidth: "0px",
    },
  },

  cssLabel: {
    //color: "#666666",
    opacity: "1",
    fontFamily: "ProximaNova, sans-serif",
    fontWeight: "550",
    marginLeft: "15px",
    //letterSpacing: "0.5px",
    fontSize: "20px",

    "&$cssFocused": {
      color: "rgba(0, 0, 0, 0.54)",
      opacity: "1",
    },
  },
  cssFocused: {},
  cssDisabled: {},
  cssIcon: {
    marginRight: "15px",
    fill: "black",
    "&:hover": {
      fill: "black",
    },
  },
  cssSelectRoot: {
    "&:focus": {
      backgroundColor: "transparent",
      // mozAppearance: "none",
      // mozUserSelect: "none",
      // webkitAppearance: "none"
    },
  },
  errorText: {
    color: "#f44336",
    marginLeft: "14px",
    fontSize: "0.75rem",
    textAlign: 'left'
  }
});

const PUSelectDefaultNew = ({
  selectValue, // remove this later
  value,
  onSelectChange, // remove this later
  onChange,
  classes,
  select_options, // remove this one later
  options = [],
  disabled = false,
  error = false,
  fieldLable,
  ...rest
}) => {
  return (
    <div className={classes.root}>
      {fieldLable && <FormFieldLabel>{fieldLable}</FormFieldLabel>}
      <FormControl
        variant="outlined"
        margin="dense"
        fullWidth
        classes={{
          root: classes.selectWrapper,
        }}
      >
        <Select
          error={error}
          disabled={disabled}
          classes={{
            root: classes.selectRoot,
          }}
          MenuProps={{
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "left",
            },
            transformOrigin: {
              vertical: "top",
              horizontal: "left",
            },
            getContentAnchorEl: null,
          }}
          IconComponent={(props) => {
            return (
              <ExpandMoreIcon
                className={`${props.className}`}
                style={{ color: "#ff9b0f" }}
              />
            );
          }}
          value={selectValue || value}
          onChange={onSelectChange || onChange}
          {...rest}
        >
          {(select_options || options).map((result) => (
            <MenuItem
              classes={{
                selected: classes.selectedItem,
              }}
              value={result.id}
              style={{ color: "black" }}
              key={result.id}
            >
              {result.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {error && <Typography  className={classes.errorText} color="error">{error}</Typography>}
    </div>
  );
};

PUSelectDefaultNew.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PUSelectDefaultNew);
