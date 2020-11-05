import React from "react";
import { InputBase, makeStyles, withStyles } from "@material-ui/core";

const StyledInput = withStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: "4px",
    marginBottom: "4px",

    '& input': {
      // border: `1px solid transparent`,
      borderRadius: '30px',
      height: '37px',
      padding: '0 30px',
      backgroundColor: theme.palette.pu.bg,
      '&:hover': {
        // borderColor: '#bfdeff'
        boxShadow: `0 0 0 1px #bfdeff`
      }
    },
    '&.Mui-focused': {
      '& input': {
        boxShadow: `0 0 0 2px #bfdeff !important`
        // borderWidth: '2px'
      }
    }

  },
  error: {
    borderRadius: '30px',
    boxShadow: `0 0 0 1px #ff5246`
  }
}))(InputBase);

const useStyles = makeStyles(() => ({
  errorLabel: {
    fontFamily: 'ProximaNovaSemibold',
    fontSize: 16,
    color: '#ff5246',
    textAlign: 'center',
    marginBottom: '10px'
  }
}))

const FormBaseInput = (props) => {
  const classes = useStyles();
  return (
    <div>
      {props.error && <div className={classes.errorLabel}>{props.error}</div>}
      <StyledInput {...props} error={Boolean(props.error)} />
    </div>
  );
};

export default FormBaseInput;
