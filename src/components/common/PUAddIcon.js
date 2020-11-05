import React from "react";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { useTheme } from "@material-ui/styles";

const PUAddIcon = () => {
  const theme = useTheme();
  return <AddCircleOutlineIcon htmlColor={theme.palette.pu.accent} fontSize="small" />;
};

export default PUAddIcon;
