import '../../../App.css';
import React from 'react';
import FooterBackground from '../../images/footer_background.png';
import FooterLogo from '../../images/pu-logo-footer.png';
import '../../css/footer-links.css';
import LoginFooterButton from "../../buttons/LoginFooterButton";
import SignupFooterButton from "../../buttons/SignupFooterButton";
import { Redirect } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import {containerStyle} from "./styles/PublicStyle";
import Radium from "radium";

const footerStyle = {
    paddingTop: "80px",
    paddingBottom: "43px",
    backgroundImage: "url(" + FooterBackground + ")",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    alignContent: "flex-end",
    "@media (min-width: 2300px)": {
        paddingTop: "100px",
    },
    "@media (min-width: 2800px)": {
        paddingTop: "140px",
    },

    "@media (max-width: 1150px)": {
        paddingTop: "90px",
    },
}

const footerContentStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "@media (max-width: 1150px)": {
        flexDirection: "column",
    },
}

const footerLogoStyle = {
    margin: "0",
    "@media (max-width: 1150px)": {
        marginBottom: "15px",
    },
}

const footerMediumStyle = {
    display:"flex",
    justifyContent:"space-around",
    alignItems: "flex-end",
    flex: "1",
    "@media (max-width: 1150px)": {
        order: "4",
        width: "100%",
        flex: "none",
        marginTop: "20px",
        justifyContent:"center",
    },
    "@media (max-width: 700px)": {
        flexDirection: "column",
        alignItems: "center",
    },
}


const footerButtonsStyle = {
    display: "flex",
    alignItems: "center",
    "@media (max-width: 425px)": {
        flexDirection: "column",
    },
}

const divListStyle = {
    maxWidth: "140px",
    textAlign: "left",
    color: "white",
    "@media (max-width: 1150px)": {
        margin: "0 15px",
    },
    "@media (max-width: 700px)": {
        margin: "15px 0",
        textAlign: "center",
    },
};

const signUpButtonHolder = {
    maxWidth: "140px",
};

class HomeFooter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            login_redirect: false,
            register_redirect: false
        };
    }

    homeRedirectHandler() {
        window.location.replace('/');
    }

    render() {
        if (
            !this.state.home_redirect
            && !this.state.register_redirect
            && !this.state.login_redirect) {
            return (
                <footer style={footerStyle}>
                    <div style={containerStyle}>
                        <div style={footerContentStyle}>
                        <img
                            src={FooterLogo}
                            className="App-logo"
                            alt="logo"
                            onClick={this.homeRedirectHandler}
                            style={footerLogoStyle}
                        />
                        <div style={footerMediumStyle}>
                        <div style={divListStyle}>
                            <div>
                                <a href="personal_account" className="footer_link">{this.props.t('mainpage.p_b_account')}</a>                                
                            </div>
                            <div>
                                <a href="personal_bank_cards" className="footer_link">{this.props.t('mainpage.personal_bank')}</a>                                
                            </div>
                        </div>
                        <div style={divListStyle}>
                            <div>
                                <a href="bank_transfers" className="footer_link">{this.props.t('mainpage.bank_transfers')}</a>
                            </div>
                            <div>
                                <a href="merchant_account" className="footer_link">{this.props.t('mainpage.merchant_account')}</a>
                            </div>
                            <div>
                                <a href="internet_acquiring" className="footer_link">{this.props.t('mainpage.internet_acquiring')}</a>
                            </div>
                        </div>
                        <div style={divListStyle}>
                            <div>
                                <a href="cards_emission" className="footer_link">{this.props.t('mainpage.cards_emission')}</a>
                            </div>
                            <div>
                                <a href="payment_processing" className="footer_link">{this.props.t('mainpage.payment_processing')}</a>
                            </div>
                            <div>
                                <a href="payments_terminal" className="footer_link">{this.props.t('mainpage.payment_terminals')}</a>
                            </div>
                        </div>
                        <div style={divListStyle}>
                            <div>
                                <a href="pos" className="footer_link">{this.props.t('mainpage.pos')}</a>
                            </div>
                            <div>
                                <a href="stock" className="footer_link">{this.props.t('mainpage.stock')}</a>
                            </div>
                            <div>
                                <a href="partner_programs" className="footer_link">{this.props.t('mainpage.partner_programs')}</a>
                            </div>
                            <div>
                                <a href="donations" className="footer_link">{this.props.t('mainpage.donation')}</a>
                            </div>
                        </div>
                        </div>
                            <div style={footerButtonsStyle}>
                        <div style={divListStyle}>
                            <LoginFooterButton />
                        </div>
                        <div style={signUpButtonHolder}>
                            <SignupFooterButton />
                        </div>
                            </div>
                        </div>
                    </div>
                </footer>
            )
        }
        else if (this.state.login_redirect) {
            return (<Redirect push to="/login"/>);
        }
        else if (this.state.register_redirect) {
            return (<Redirect push to="/register"/>);
        }
    }

}

export default withTranslation()(Radium(HomeFooter));