import React from "react";
import PropTypes from "prop-types";
import { withStyles, FormControl, Select, MenuItem } from "@material-ui/core";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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
});

class PUSelectDefault extends React.Component {
  state = {
    selectedValue: this.props.defaultValue || 0,
    labelWidth: 0,
  };

  componentDidMount() {
    let defaultValue = this.props.default_value;
    if (defaultValue === null) {
      defaultValue = 0;
    }
    this.setState({
      // labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
      selectedValue: defaultValue,
    });
  }

  clear = () => {
    this.setState({ selectedValue: "0" });
  };

  getValue = () => {
    return this.state.selectedValue;
  };

  handleChange = (event) => {
    this.setState({ selectedValue: event.target.value });
    if(this.props.change_handler) this.props.change_handler(event.target.value);
    if(this.props.onChange) this.props.onChange(event);
  };

  render() {
    const { classes, cb_enabled: disabled = true, name="" } = this.props;
    const options = this.props.options ||  this.props.select_options
    return (
      <div className={classes.root}>
        <FormControl
          variant="outlined"
          margin="dense"
          fullWidth
          classes={{
            root: classes.selectWrapper,
          }}
        >
          <Select
            disabled={!disabled}
            name={name}
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
            value={this.state.selectedValue}
            onChange={this.handleChange}
          >
            {options.map((result) => (
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
      </div>
    );
  }
}

PUSelectDefault.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PUSelectDefault);
