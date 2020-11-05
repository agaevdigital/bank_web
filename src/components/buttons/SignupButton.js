import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import { Button } from "@material-ui/core";
import { withTranslation } from 'react-i18next';

const BtnSignUp = withStyles({
    root: {
        background: '#2b3241',
        borderRadius: 50,
        border: 0,
        color: 'white',
        height: 36,
        padding: '0 20px',
        transition: 'box-shadow 0.2s linear',
        margin: '5px 5px 5px 5px',
        '&:hover': {
            boxShadow: '0 0 2px 5px #D7D8DB',
            background: '#2b3241',
        },
    },
    label: {
        textTransform: 'none'
    },
})(Button);

class SignupButton extends React.Component {
    constructor(props) {
        super(props);
        this.performSignUp = this.performSignUp.bind(this);
    }

    performSignUp() {
        this.props.registerRedirectHandler();
        //alert("No please don't sign up!");
    }


    render() {
        return (
            <div>
                    <BtnSignUp
                        onClick={this.performSignUp}
                    >
                        {this.props.t('mainpage.sign_up')}
                    </BtnSignUp>
            </div>
        )
    }
}


export default  withTranslation()(SignupButton);