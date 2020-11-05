
import React from 'react';
import AppBarHome from "../home/AppBarHome";
import HomeFooter from "../home/HomeFooter";
import TFString from "../../inputs/TFString";
import CheckSmsCodeButtonLarge from "../../buttons/CheckSmsCodeButtonLarge";
import ResendSmsCodeButton from "../../buttons/ResendSmsCodeButton";
import { Redirect } from 'react-router-dom';
import axios from "axios";
import {api_endpoint} from "../../../settings";


const loginHolder = {
    marginTop: "100px",
    width: "300px",
};

const wrapper = {
    display: "flex",
    justifyContent: "center"
}

const hintStyle = {
    textAlign: "left",
    fontSize: "14px",
    fontFamily: "ProximaNova, sans-serif",
    fontWeight: "bold",
    marginTop: "20px",
    marginBottom: "0",
    marginLeft: "30px",
    opacity: "0.6"
};

const spacer = {
    height: "40px",
    width: "100%"
};



export default class LoginEnterSmsCode extends React.Component {

    constructor(props) {
        super(props);
        let intViewportHeight = window.innerHeight - 458;
        this.state = {
            divHeight: intViewportHeight,
            dashboardRedirect: false,
            counter: 60
        };
        this.tf_smscode = React.createRef();
        this.startCounter()

    }

    generateLoginHolderStyle() {
        return {
            minHeight: this.state.divHeight,
        }
    }


    handleSmsCheckResponse = (resp) => {
        if(resp.status === 'OK') {
            sessionStorage.setItem('key', resp.response.key);
            this.setState({dashboardRedirect: true});
        }
        else {
            this.setState({dashboardRedirect: false});
            //show errors
        }
    }

    startCounter = () => {
        let newCounter = this.state.counter-1;

        if(newCounter >= 0) {
            setTimeout(()=>{
                this.setState({
                    counter: newCounter,
                });
                this.startCounter()
            }, 1000)
        }

    }

    render() {
        if (!this.state.dashboardRedirect) {
            return (
              <div style={loginHolder}>
                  <p style={hintStyle}>Input SMS code</p>
                  <TFString
                    tf_required="required"
                    tf_variant="outlined"
                    tf_margin="normal"
                    tf_default_value=""
                    tf_enabled="true"
                    tf_max_width="255px"
                    ref={this.tf_smscode}
                  />
                  <div style={spacer}/>
                  <CheckSmsCodeButtonLarge
                    etSmsCodeRef={this.tf_smscode}
                    smsCodeCheckHandler={this.handleSmsCheckResponse}
                    key = {sessionStorage.getItem('key')}
                    token = {sessionStorage.getItem('token')}
                  />
                  {this.state.counter===0 ? <ResendSmsCodeButton resendSMS={this.props.reSendSMS} /> : 'You can resend new code via '+this.state.counter}
              </div>
            );
        }
        else {
            return <Redirect push to="/dashboard"/>;
        }
    }
}

