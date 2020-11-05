import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  progressRoot: {
    color: theme.palette.pu.accent,
  },
  progress: {
    position: "absolute",
    zIndex: 99,
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    backgroundColor: "#F7FCFC",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  progressWrapped: {
    position: "relative",
    height: "100%",
  },
}));

const PULoading = ({ size = 40, wrapped = false, ...rest }) => {
  const classes = useStyles();
  const renderProgress = () => (
    <div className={classes.progress}>
      <CircularProgress
        size={size}
        {...rest}
        classes={{
          root: classes.progressRoot,
        }}
      />
      <p> Loading... </p>
    </div>
  );

  if (wrapped) {
    return <div className={classes.progressWrapped}>{renderProgress()}</div>;
  }
  return renderProgress();
};

export default PULoading;
