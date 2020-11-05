import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import { Button } from "@material-ui/core";


const BtnLogin = withStyles({
    root: {
        background: '#FF9B0F',
        width: 12,
        minWidth: 32,
        borderRadius: 20,
        border: 0,
        color: 'white',
        height: 32,
        padding: '0 0px',
        transition: 'box-shadow 0.2s linear',
        margin: '5px 5px 5px 5px',
        '&:hover': {
            boxShadow: '0 0 2px 5px #FFECD2',
            background: '#FF9B0F',
        },
    },
    label: {
        textTransform: 'none',
        width: 12,
    },
})(Button);

export default class DashboardSlideButton extends React.Component {
    constructor(props) {
        super(props);
        this.toggleDashboard = this.toggleDashboard.bind(this);
        this.generateButtonStyle = this.generateButtonStyle.bind(this);
        this.state = {
            toggled: false
        };
    }

    generateButtonStyle() {
        return {
            borderLeft: '3px solid #fff',
            borderTop: '3px solid #fff',
            borderRight: '0',
            width: '7px',
            height: '7px',
            transform: this.state.toggled ? 'rotate(315deg)':'rotate(135deg)',
            marginLeft: this.state.toggled ? '2px' : '-2px',
        }
    }

    toggleDashboard() {
        this.props.sidebarToggler();
        this.setState({
            toggled: !this.state.toggled
        });
    }


    render() {
        return (
            <div>
                    <BtnLogin
                        onClick={this.toggleDashboard}
                    >
                        <div style={this.generateButtonStyle()}></div>
                    </BtnLogin>
            </div>
        )
    }
}
