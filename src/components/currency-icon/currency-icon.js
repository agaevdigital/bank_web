import React from "react";
import { makeStyles } from "@material-ui/core";

import UsdIcon from "@material-ui/icons/AttachMoney";
import EuroIcon from "@material-ui/icons/EuroSymbol";
import { ReactComponent as RubIcon } from "components/images/currency/rub.svg";
import { ReactComponent as ChfIcon } from "components/images/currency/chf.svg";
import { ReactComponent as CzkIcon } from "components/images/currency/czk.svg";
import { ReactComponent as GbrIcon } from "components/images/currency/gbr.svg";
import { ReactComponent as JpyIcon } from "components/images/currency/jpy.svg";

const useStyles = makeStyles(() => ({
  currency: {
    fill: "#FF9B0F",
    width: 15,
    height: "auto",
  },
}));

const CurrencyIcon = ({icon, className=""}) => {
  const classes = useStyles();
  switch (icon) {
    case "EUR":
      return <EuroIcon className={`${classes.currency} ${className}`} />;
    case "USD":
      return <UsdIcon className={`${classes.currency} ${className}`} />;
    case "RUB":
      return <RubIcon className={`${classes.currency} ${className}`} />;
    case "CHF":
      return <ChfIcon className={`${classes.currency} ${className}`} />;
    case "CZK":
      return <CzkIcon className={`${classes.currency} ${className}`} />;
    case "GBP":
      return <GbrIcon className={`${classes.currency} ${className}`} />;
    case "JPY":
      return <JpyIcon className={`${classes.currency} ${className}`} />;
    default:
      return null;
  }
};

export default CurrencyIcon;