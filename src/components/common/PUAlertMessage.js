import React from 'react';
import { Snackbar, makeStyles } from '@material-ui/core'




const useStyles = makeStyles(theme => ({
    root: {
        "& .MuiPaper-root": {
            backgroundColor: theme.palette.pu.accent,
            fontSize: '1rem',
            justifyContent: 'center'
        
        }
    }
}))


const PUAlertMessage = ({ open, message }) => {
    const classes = useStyles();
    return (
        <Snackbar
            classes={{
                root: classes.root
            }}
            open={open}
            autoHideDuration={500}
            anchorOrigin={{
                vertical: 'center',
                horizontal: 'center'
            }}
            // TransitionComponent={transition}
            message={message}
        />
    )
}

export default PUAlertMessage;