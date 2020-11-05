import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button } from "@material-ui/core";
import { withTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';


const BtnLogin = withStyles({
    root: {
        background: '#FF9B0F',
        borderRadius: 50,
        border: 0,
        color: 'white',
        height: 36,
        padding: '0 20px',
        transition: 'box-shadow 0.2s linear',
        margin: '5px 5px 5px 5px',
        '&:hover': {
            boxShadow: '0 0 2px 5px #FFECD2',
            background: '#FF9B0F',
        },
    },
    label: {
        textTransform: 'none'
    },
})(Button);



const LoginButton = ({t}) => (
    <div>
        <BtnLogin
            component={Link}
            to="/login"
        >
            {t('mainpage.log_in')}
        </BtnLogin>
    </div>
)

export default withTranslation()(LoginButton)