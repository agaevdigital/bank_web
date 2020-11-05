import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Button from "@material-ui/core/es/Button/Button";
import { ThemeProvider } from '@material-ui/styles';
import proximaNovaTheme from '../themes/ProximaNova';
import {api_port} from "../../settings";

import axios from "axios/index";

const BtnSetStats = withStyles({
    root: {
        background: '#FF9B0F',
        borderRadius: 50,
        border: 0,
        color: 'white',
        height: 50,
        width: 180,
        padding: '0 20px',
        transition: 'box-shadow 0.2s linear',
        margin: '5px 5px 5px 5px',
        '&:hover': {
            boxShadow: '0 0 2px 5px #FFECD2',
            background: '#FF9B0F',
        },
    },
    label: {
        textTransform: 'none',
        fontSize: '16px',
        fontWeight: '700 !important'
    },
})(Button);

const singleArrow = {
    borderLeft: '2px solid #fff',
    borderTop: '2px solid #fff',
    borderRight: '0',
    width: '5px',
    height: '5px',
    transform: 'rotate(135deg)',
    margin: '0 9px',
};

export default class KYCPersonalSetStats extends React.Component {
    constructor(props) {
        super(props);
        this.setStats = this.setStats.bind(this);
    }

    setStats() {
        let idStatsData = {
            'user_id':             this.props.user_id,
            'id_transfer_volume':  this.props.cbTransferVolumeRef.current.getValue(),
            'id_monthly_payments': this.props.cbMonthlyPaymentRef.current.getValue(),
            'max_single_payment':  this.props.etMaxSinglePayment.current.getValue(),
        };
        //this.props.showProgressBar(true);

        axios.post(
            'http://'+window.location.hostname+':'+api_port+'/set_personal_user_stats',
            idStatsData
        )
        .then(
            response => {
                //this.props.showProgressBar(false);
                this.props.setStatsResponseHandler(response.data);
            }
        );
    }

    render() {
        return (
            <div>
                <ThemeProvider theme={proximaNovaTheme}>
                    <BtnSetStats
                        onClick={this.setStats}
                    >
                        Next
                        <div style={singleArrow}/>
                    </BtnSetStats>
                </ThemeProvider>
            </div>
        )
    }
}
