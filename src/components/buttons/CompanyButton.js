import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import { Button } from "@material-ui/core";
import { withTranslation } from 'react-i18next';

const BtnCompany = withStyles({
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

class CompanyButton extends React.Component {
    constructor(props) {
        super(props);
        this.viewCompany = this.viewCompany.bind(this);
    }

    viewCompany() {
        window.location.replace('/company');
        //alert("LLC Horns and hoofs - company of your choice!");
    }


    render() {
        return (
            <div>
                    <BtnCompany
                        onClick={this.viewCompany}
                    >
                        {this.props.t('mainpage.company')}
                    </BtnCompany>
            </div>
        )
    }
}
export default  withTranslation()(CompanyButton)