import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import { Button } from "@material-ui/core";
import { withTranslation } from 'react-i18next';



const BtnPricing = withStyles({
    root: {
        background: '#2b3241',
        borderRadius: 50,
        border: 0,
        color: 'white',
        height: 50,
        width: 240,
        padding: '0 20px',
        transition: 'box-shadow 0.2s linear',
        margin: '5px 5px 5px 5px',
        '&:hover': {
            boxShadow: '0 0 2px 5px #FFECD2',
            background: '#2b3241',
        },
    },
    label: {
        textTransform: 'none',
        fontSize: '20px',
        fontWeight: '700 !important'
    },
})(Button);

const buttonStyle = {
    paddingBottom: "1.5rem",
    textAlign: 'center'
};

// const singleArrow = {
//     borderLeft: '2px solid #fff',
//     borderTop: '2px solid #fff',
//     borderRight: '0',
//     width: '5px',
//     height: '5px',
//     transform: 'rotate(135deg)',
//     margin: '0 9px',
// };

class PricingButtonOrange extends React.Component {
    constructor(props) {
        super(props);
        this.pricing = this.pricing.bind(this);
    }

    pricing() {
        alert(":333");
    }


    render() {
        return (
            <div style={buttonStyle}>
                    <BtnPricing
                        onClick={this.pricing}
                    >
                        {this.props.t('pricing.btn_text')}
                        {/*<div style={singleArrow}/>*/}
                    </BtnPricing>
            </div>
        )
    }
}

export default withTranslation()(PricingButtonOrange)