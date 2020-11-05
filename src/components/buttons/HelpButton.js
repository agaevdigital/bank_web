import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import { Button } from "@material-ui/core";
import { withTranslation } from 'react-i18next';


const BtnHelp = withStyles({
    root: {
        background: "transparent",
        borderRadius: 50,
        border: 0,
        color: '#000000',
        height: 36,
        padding: '0 20px',
        margin: '5px 5px 5px 5px',
        '&:hover': {
            background: "transparent"
        },
    },
    label: {
        textTransform: 'none',
        color: "#363636",
        '&:hover': {
            color: '#FF9B0F'
        },
    },
})(Button);

class HelpButton extends React.Component {
    constructor(props) {
        super(props);
        this.viewHelp = this.viewHelp.bind(this);
    }

    viewHelp() {
        window.location.replace('/help');
        //alert("No one can hear you screaming...");
    }


    render() {
        return (
            <div>
                    <BtnHelp
                        onClick={this.viewHelp}
                    >
                        {this.props.t('mainpage.help')}
                    </BtnHelp>
            </div>
        )
    }
}

export default  withTranslation()(HelpButton);