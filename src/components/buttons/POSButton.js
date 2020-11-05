import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import { Button } from "@material-ui/core";
import { withTranslation } from 'react-i18next';
import Radium from "radium";

const BtnSignUp = withStyles({
    root: {
        background: '#ff9b0f',
        borderRadius: 50,
        border: 0,
        color: 'white',
        height: 40,
        width: 225,
        padding: '0 20px',
        transition: 'box-shadow 0.2s linear',
        marginTop: '1.0rem !important',
        marginBottom: '5px',
        marginLeft: '0',
        marginRight: '5px',
        '&:hover': {
            boxShadow: '0 0 2px 5px #FFECD2',
            background: '#ff9b0f',
        },
        "@media (max-width: 500px)": {
            width: "100%",
        },
    },
    label: {
        textTransform: 'none',
        fontSize: '16px',
        fontWeight: '700 !important'

    },
})(Button);

const buttonWrapper = {
    "@media (max-width: 500px)": {
        width: "100%",
    },
}

const singleArrow = {
    borderLeft: '3px solid #fff',
    borderTop: '3px solid #fff',
    borderRight: '0',
    width: '5px',
    height: '5px',
    transform: 'rotate(135deg)',
    margin: '0 9px',
};

class SignupButtonLarge extends React.Component {
    constructor(props) {
        super(props);
        this.performSignUp = this.performSignUp.bind(this);
    }

    performSignUp() {
        alert("No please don't send!");
    }


    render() {
        return (
            <div style={buttonWrapper}>
                    <BtnSignUp
                        onClick={this.performSignUp}
                    >
                        {this.props.t('pos.send_btn')}
                        <div style={singleArrow}></div>
                    </BtnSignUp>
            </div>
        )
    }
}

export default withTranslation()(Radium(SignupButtonLarge))