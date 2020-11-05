import React from "react";
import InputBase from "@material-ui/core/InputBase";
import PUInputError from "./PUInputError";
import { makeStyles } from "@material-ui/styles";


const makeInputBorder = ({border = true, error}, theme) => {
  return border && error ? `1px solid ${theme.palette.pu.error}` : border ? `1px solid ${theme.palette.pu.borderColor}` : 0;
}



const useStyles = makeStyles((theme) => {
  return ({
    root: {
      height: "100%",
      width: '100%',
      fontFamily: 'ProximaNovaSemibold'
    },
    input: {
      borderRadius: 0,
      border: (props) => makeInputBorder(props, theme),
      position: "relative",
      fontSize: "16px",
      padding: "10px 25px 10px 12px",
      boxSizing: 'border-box',
      transition: theme.transitions.create(["border-color"]),
      height: ({multiline}) => multiline ? 'auto' : "35px",
      "&:focus": {
        // borderColor: 'initial',
      },
      "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
        "-webkit-appearance": "none",
        margin: 0,
      },
      "&[type=number]": {
        "-moz-appearance": "textfield",
      },
    },
    disabled: {
      color: 'currentColor !important'
    }
  })
});



const PUBaseInput = ({showError = true, ...rest}) => {
  const classes = useStyles({...rest});
  const {border, error, ...inputProps} = rest;
  return (
    <>
      <InputBase
        classes={{
          root: classes.root,
          input: classes.input,
          disabled: classes.disabled
        }}
        {...inputProps}
      />
      {error && showError && <PUInputError text={error} />}
    </>
  );
};

export default PUBaseInput;