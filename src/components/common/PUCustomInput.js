import { withStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";

const PUCustomInput = withStyles((theme) => ({
  root: {
    width: '100%',
    fontSize: '1rem',
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    fontSize: 'inherit',
    borderRadius: 30,
    position: "relative",
    color: '#838989',
    backgroundColor: theme.palette.pu.bg,
    border: "1px solid rgba(0, 0, 0, 0.23)",
    width: "100%",
    padding: "10px 25px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:focus": {
      // boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.pu.accent,
    },
    "&:hover": {
      borderColor: theme.palette.pu.accent,
    },
  },
}))(InputBase);

export default PUCustomInput;
