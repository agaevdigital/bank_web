import React from "react";
import { withStyles } from "@material-ui/core/styles";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { Typography } from "@material-ui/core";

const CssKeyboardDatePicker = withStyles({
  display: "flex",
  root: {
    "& .MuiInputBase-root": {
      borderRadius: "20px",
      paddingLeft: "30px",
      paddingRight: "10px",
      paddingTop: "5px",
      paddingBottom: "5px",
      backgroundColor: "#ebf7f8",
      width: "380px",
      color: "#666666",
      opacity: "0.8",
      fontFamily: "ProximaNova, sans-serif",
    },
    "&.MuiFormControl-marginNormal": {
      marginTop: 5,
    },
    "& .MuiInputBase-root:hover": {
      border: "1px solid #bfdeff",
      //width: "320px",
      paddingLeft: "29px",
      paddingRight: "9px",
      paddingTop: "4px",
      paddingBottom: "4px",
    },
    "& .MuiInputBase-root.Mui-focused": {
      border: "2px solid #bfdeff",
      paddingLeft: "28px",
      paddingRight: "8px",
      paddingTop: "3px",
      paddingBottom: "3px",
      color: "#666666",
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

    // '& .MuiSvgIcon-root': {
    //     fill: 'white'
    // }
  },
})(KeyboardDatePicker);

const errorText =  {
  color: "#f44336",
  marginLeft: "14px",
  fontSize: "0.75rem",
}

export default class PUDatePicker extends React.Component {
  state = {
    selectedDate: null,
  };
  handleDateChange = (date) => {
    this.setState({ selectedDate: date });
    this.props.onChange && this.props.onChange(date);
    // {
    //     selectedDate: new Date(date.getTime() - (date.getTimezoneOffset()*60000)).toJSON()
    // }
    //);
  };

  getValue = () => {
    return this.state.selectedDate;
  };

  render() {
    const {error = false} = this.props;
    return (
      <div>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <CssKeyboardDatePicker
            style={{
              borderRadius: 20,
              border: this.props.error ? "1px solid #f44336" : "none",
            }}
            margin="normal"
            id="date-picker-dialog"
            format="dd/MM/yyyy"
            value={this.state.selectedDate}
            onChange={this.handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </MuiPickersUtilsProvider>
        {error && <Typography style={errorText} color="error">{error}</Typography>}
      </div>
    );
  }
}
