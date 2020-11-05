import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputBase from "@material-ui/core/InputBase";

import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import EuroSymbolIcon from "@material-ui/icons/EuroSymbol";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import NumberFormat from "react-number-format";

import PUBaseInput from "./PUBaseInput";

// icons
import VisaIcon from "../images/icons/ico_visa.png";
import MCIcon from "../images/icons/ico_mastercard.png";
import removeWhiteSpace from "../../utils/removeWhiteSpace";
import { FormHelperText } from "@material-ui/core";

const CardInput = ({ onChange, inputRef, ...other }) => {
  return (
    <NumberFormat onChange={onChange} {...other} format="#### #### #### ####" />
  );
};

const CurrencyInput = withStyles((theme) => ({
  root: {
    height: "100%",
  },
  input: {
    borderRadius: 4,
    position: "relative",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color"]),
    "&:focus": {
      borderColor: theme.palette.pu.borderColor,
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => {
  return {
    margin: {
      margin: theme.spacing(1),
      marginRight: 0,
      marginLeft: 0,
    },
    wrapper: {
      display: "inline-flex",
      width: "100%",
      border: `1px solid ${theme.palette.pu.borderColor}`,
      paddingRight: "5px",
      borderColor: (props) =>
        props.error ? theme.palette.pu.error : theme.palette.pu.borderColor,
    },
    menuItem: {
      background: "0 !important",
    },
    menuItemRoot: {
      "&:hover": {
        background: 0,
      },
    },
  };
});

const determineCardType = (num) => {
  if (!num) return null;
  const cardNum = num.replace(/ /g, "")[0];
  let CardIcon = null;
  if (+cardNum === 4) CardIcon = VisaIcon;
  if (+cardNum === 5) CardIcon = MCIcon;
  if (!CardIcon) return null;
  return (
    <FormControl style={{ minWidth: "35px" }}>
      <img
        src={CardIcon}
        alt="visa icon"
        width="35"
        style={{ margin: "auto", minWidth: "35px" }}
      />
    </FormControl>
  );
};

export default ({ value = "1000", onChange = () => {}, ...rest }) => {
  const classes = useStyles(rest);
  return (
    <div className={classes.wrapper}>
      <FormControl fullWidth>
        <PUBaseInput
          border={false}
          showError={false}
          inputComponent={CardInput}
          value={value}
          onChange={(e) => {
            const event = {
              target: {
                name: "cardnumber",
                value: removeWhiteSpace(e.target.value),
              },
            };
            onChange(event);
          }}
          {...rest}
        />
      </FormControl>
      {determineCardType(value)}
    </div>
  );
};
