import React from 'react';
import AppBarHome from "../home/AppBarHome";
import HomeFooter from "../../pages/home/HomeFooter";
import TFString from "../../inputs/TFString";
import LoginButtonLarge from "../../buttons/LoginButtonLarge";
import ForgotPasswordButton from "../../buttons/ForgotPasswordButton";
import { Redirect } from 'react-router-dom';
import PULoading from 'components/common/PULoading';
import {containerStyle} from "../home/styles/PublicStyle";
import Radium from "radium";

const loginHolder = {
    marginTop: "100px",
    width: "320px",
};


const wrapper = {
    display: "flex",
    justifyContent: "center",
    padding: "0 32px",
};

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

const headerStyle = {
    textAlign: "center",
    fontSize: "18px",
    fontFamily: "ProximaNova, sans-serif",
    fontWeight: "bold",
    marginTop: "0px",
    marginBottom: "50px",
    opacity: "0.7"
};

const spacer = {
    height: "40px",
    width: "100%"
};



class Login extends React.Component {

    constructor(props) {
        super(props);
        let intViewportHeight = window.innerHeight - 332;
        let intLoadingBackgroundHeight = window.innerHeight;
        let intLoadingBackgroundWidth = window.innerWidth;
        this.state = {
            divHeight: intViewportHeight,
            loadingBackgroundHeight: intLoadingBackgroundHeight,
            loadingBackgroundWidth: intLoadingBackgroundWidth,
            sms_code_check_redirect: false,
            dashboard_redirect: false,
            login_redirect: false,
            register_redirect: false,
            progressBarVisible: false
        };
        this.tf_login = React.createRef();
        this.tf_password = React.createRef();
        this.handleLoginResponse = this.handleLoginResponse.bind(this);

        this.handleRegisterRedirect = this.handleRegisterRedirect.bind(this);
        this.showProgressBar = this.showProgressBar.bind(this);
    }
    showProgressBar(barVisible) {
        this.setState({ progressBarVisible: barVisible });
    }





    generateLoginHolderStyle() {
        return {
            minHeight: this.state.divHeight,
        }
    }

    handleLoginRedirect = () => {
        this.setState({ login_redirect: true });
    };

    handleRegisterRedirect() {
        this.setState({ register_redirect: true });
    };

    handleLoginResponse(resp, login, password) {

        if (resp.status === 'OK' && resp.response.two_factor_auth === true) {
            sessionStorage.setItem('user_id', resp.response.user_id);
            sessionStorage.setItem('token', resp.response.token);
            sessionStorage.setItem('key', resp.response.key);
            sessionStorage.setItem('id_sms_code', resp.response.id_sms_code);
            this.setState({ sms_code_check_redirect: true });
        }
        else if (resp.status === 'OK' && (resp.response.two_factor_auth === false || resp.response.two_factor_auth === null)) {
            sessionStorage.setItem('user_id', resp.response.user_id);
            sessionStorage.setItem('token', resp.response.token);
            sessionStorage.setItem('key', resp.response.key);
            sessionStorage.setItem('phone_number', resp.response.phone_number);
            this.setState({ dashboard_redirect: true })
        }
        else {
            if (resp.status === 'FAIL') {
                for (const error of resp.errors) {
                    this.tf_login.current.setValue(login);
                    this.tf_password.current.setValue(password);

                    switch (error.code) {
                        case 1: {
                            this.tf_login.current.setError(error.message);
                            break;
                        }
                        case 2: {
                            this.tf_password.current.setError(error.message);
                            break;
                        }
                        case 3: {
                            this.tf_login.current.setError(error.message);
                            this.tf_password.current.setError('');
                            break;
                        }
                        default: {
                            break;
                        }
                    }
                }
                this.setState({ sms_code_check_redirect: false });
                this.setState({ dashboard_redirect: false });
            }
            else {
                alert('Server error!');
                this.setState({ sms_code_check_redirect: false });
                this.setState({ dashboard_redirect: false });
            }
        }
    };

    render() {
        if (this.state.progressBarVisible) {
            return <PULoading size={100} thickness={3} />
        }
        if (
            !this.state.sms_code_check_redirect &&
            !this.state.dashboard_redirect &&
            !this.state.register_redirect
        ) {
            return (
                <div className="App">
                    <header className="App-header">
                        <AppBarHome
                            loginRedirectHandler={this.handleLoginRedirect}
                            registerRedirectHandler={this.handleRegisterRedirect}
                        />
                    </header>
                    <div style={this.generateLoginHolderStyle()}>
                        <div styel={containerStyle}>
                        <div style={wrapper}>
                            <div style={loginHolder}>
                                {/*<input*/}

                                {/*>*/}
                                <p style={headerStyle}>Sign in to PAYSUNION</p>
                                <p style={hintStyle}>Input phone or email</p>
                                <TFString
                                    tf_required={true}
                                    // tf_variant="outlined"
                                    tf_margin="normal"
                                    tf_default_value=""
                                    tf_enabled="true"
                                    ref={this.tf_login}
                                />
                                <p style={hintStyle}>Input password</p>
                                <TFString
                                    tf_required={true}
                                    // tf_variant="outlined"
                                    tf_margin="normal"
                                    tf_type="password"
                                    tf_default_value=""
                                    tf_enabled="true"
                                    ref={this.tf_password}
                                />
                                <div style={spacer} />
                                <div style={{ textAlign: 'center' }}>
                                    <LoginButtonLarge
                                        etLoginRef={this.tf_login}
                                        etPasswordRef={this.tf_password}
                                        loginResponseHandler={this.handleLoginResponse}
                                        showProgressBar={this.showProgressBar}
                                    />
                                    <ForgotPasswordButton />
                                </div>
                                {/*</input>*/}
                            </div>
                        </div>
                        </div>
                    </div>
                    <HomeFooter />
                </div>
            );
        }
        else if (this.state.sms_code_check_redirect && !this.state.dashboard_redirect) {
            return <Redirect push to="/login_enter_sms_code" />;
        }
        else if (this.state.dashboard_redirect && !this.state.sms_code_check_redirect) {
            return <Redirect push to="/dashboard" />;
        }
        else if (this.state.register_redirect) {
            return <Redirect push to="/register" />;
        }
    }
}

export default Radium(Login);