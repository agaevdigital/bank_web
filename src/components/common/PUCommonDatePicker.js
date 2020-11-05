import React from "react";
import { withStyles } from "@material-ui/core/styles";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const CssKeyboardDatePicker = withStyles((theme) => ({
  "@global": {
    ".MuiPickersDatePickerRoot-toolbar": {
      backgroundColor: theme.palette.pu.accent,
    },
    ".MuiPickersDay-daySelected": {
      backgroundColor: theme.palette.pu.accent,
      "&:hover": {
        backgroundColor: theme.palette.pu.accent,
      },
    },
  },
  root: {
    width: "100%",
    margin: 0,
    "& .MuiInputBase-root": {
      height: "37px",
      border: `1px solid ${theme.palette.pu.borderColor}`,
      paddingLeft: "17px",
      paddingRight: "0",
      paddingTop: "5px",
      paddingBottom: "5px",
      backgroundColor: "#fff",
      width: "100%",
      color: "#666666",
      opacity: "0.8",
      fontFamily: "ProximaNovaSemibold, ProximaNova, sans-serif",
      fontSize: "18px",
    },
    "& .MuiInputBase-root:hover": {
      // border: "1px solid #bfdeff",
    },
    "& .MuiInputBase-root.Mui-focused": {
      // border: "2px solid #bfdeff",
      // color: "#666666",
    },
    "& .MuiInput-underline::after": {
      borderBottom: "0px solid transparent",
    },
    "& .MuiInput-underline.Mui-focused::after": {
      transform: "none",
    },
    "& .MuiInput-underline::before": {
      borderBottom: "0px solid transparent",
    },
    "& .MuiInput-underline:hover:not(.Mui-disabled)::before": {
      borderBottom: "0px solid transparent",
    },
    "& .MuiFormLabel-root": {
      marginLeft: "30px",
      fontSize: "18px",
      fontFamily: "ProximaNova, sans-serif",
      fontWeight: "bold",
      letterSpacing: "0.5px",
    },
    "& .MuiFormLabel-root.Mui-focused": {
      color: "rgba(0, 0, 0, 0.54)",
    },
    "& .MuiButtonBase-root": {
      background: "#f5fbfb",
      borderRadius: 0,
      padding: "5.5px 7px",
    },
    "& .MuiSvgIcon-root": {
      fill: theme.palette.pu.accent,
    },
    ".MuiPickersDatePickerRoot-toolbar": {
      backgroundColor: "#000",
    },

    // '& .MuiSvgIcon-root': {
    //     fill: 'white'
    // }
  },
}))(KeyboardDatePicker);

const PUCommonDatePicker = ({ minDate, className = '', format="dd/MM", value, handleDateChange, name = "" }) => {
  const onDateChange = (date) => {
    const event = {
      target: {
        name: name,
        value: date,
      },
    };
    handleDateChange(event);
  };
  return (
    <div>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <CssKeyboardDatePicker
          className={className}
          minDate={minDate}
          margin="normal"
          id="date-picker-dialog"
          format={format}
          value={value}
          onChange={onDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
      </MuiPickersUtilsProvider>
    </div>
  );
};

export default PUCommonDatePicker;
