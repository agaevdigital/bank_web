import React from 'react';
import { makeStyles } from '@material-ui/core';
import Typography from "@material-ui/core/Typography";



const boldTextStyles = makeStyles((theme) => ({
 root: {
   opacity: props => props.opacity ? props.opacity : 1,
   fontFamily: "ProximaNovaSemibold",
   color: props => props.color ? props.accent : theme.palette.pu.accent,
   fontSize: props => props.fontSize ? props.fontSize : 16,
   textTransform: props => props.uppercase ? 'uppercase' : 'initial'
 },
}));

const PUBoldText = ({ children, ...props }) => {
 const classes = boldTextStyles(props);
 return <Typography classes={{ root: classes.root }}>{children}</Typography>;
};

export default PUBoldText;