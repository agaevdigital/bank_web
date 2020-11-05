import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputBase from "@material-ui/core/InputBase";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import UsdIcon from "@material-ui/icons/AttachMoney";
// import EuroIcon from "@material-ui/icons/EuroSymbol";
// import { ReactComponent as RubIcon } from "components/images/currency/rub.svg";
// import { ReactComponent as ChfIcon } from "components/images/currency/chf.svg";
// import { ReactComponent as CzkIcon } from "components/images/currency/czk.svg";
// import { ReactComponent as GbrIcon } from "components/images/currency/gbr.svg";
// import { ReactComponent as JpyIcon } from "components/images/currency/jpy.svg";

import PUBaseInput from "./PUBaseInput";
import CurrencyIcon from "components/currency-icon/currency-icon";
import PUInputError from "./PUInputError";

let balances = [
  { asset_id: 7, asset_name: "CHF", balance: "0" },
  { asset_id: 6, asset_name: "CZK", balance: "0" },
  { asset_id: 1, asset_name: "EUR", balance: "95619" },
  { asset_id: 4, asset_name: "GBP", balance: "0" },
  { asset_id: 5, asset_name: "JPY", balance: "0" },
  { asset_id: 3, asset_name: "RUB", balance: "0" },
  { asset_id: 2, asset_name: "USD", balance: "2670.00" },
];

const SelectInput = withStyles((theme) => ({
  input: {
    position: "relative",
    backgroundColor: theme.palette.pu.blue,
    fontSize: 16,
    width: "40px",
    height: "35px",
    paddingBottom: "0",
    paddingTop: "10px",
    paddingLeft: 3,
    boxSizing: "border-box",
    "&:focus": {
      backgroundColor: theme.palette.pu.blue,
    },
    "&:hover": {
      backgroundColor: theme.palette.pu.blue,
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "inline-flex",
    width: "100%",
    border: ({error}) => error ? "1px solid #f44336" : "1px solid #ecf3f3",
  },
  margin: {
    margin: theme.spacing(1),
    marginRight: 0,
    marginLeft: 0,
  },
  menuItem: {
    background: "#e2eaea !important",
  },
  menuItemRoot: {
    paddingTop: 5,
    paddingBottom: 5,
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    padding: 0,
    "& + &": {
      marginTop: "5px",
    },
    "&:hover": {
      background: 0,
    },
  },
  currencySelectBtn: {
    borderLeft: "1px solid #ecf3f3",
    minWidth: "40px",
    width: "40px",
    height: "35px",
    "& .MuiInputBase-formControl": {
      width: "100%",
      height: "100%",
    },
  },
  paper: {
    boxShadow:
      "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
  },
}));

export default ({ currency = 1, amount, onChange, error }) => {
  const classes = useStyles({error});
  return (
    <>
    <div className={classes.wrapper}>
      <FormControl fullWidth>
        <PUBaseInput
          name="amount"
          value={amount}
          onChange={onChange}
          inputProps={{
            maxLength: 10,
            type: "number",
          }}
          border={false}
        />
      </FormControl>
      <FormControl className={classes.currencySelectBtn}>
        <Select
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
            classes: {
              paper: classes.paper,
            },
          }}
          name="currency"
          value={currency}
          onChange={onChange}
          input={<SelectInput />}
          IconComponent={(props) => {
            return (
              <ExpandMoreIcon
                className={`${props.className}`}
                style={{ color: "#ff9b0f", top: "auto" }}
                fontSize="small"
              />
            );
          }}
        >
          {balances.map((balance) => {
            return (
              <MenuItem
                key={balance.asset_id}
                value={balance.asset_id}
                classes={{
                  selected: classes.menuItem,
                  root: classes.menuItemRoot,
                }}
              >
                <CurrencyIcon icon={balance.asset_name} />
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
    {error && <PUInputError text={error} />}
    </>
  );
};
