import '../../../App.css';
import React from 'react';
import AppBarHome from "./AppBarHome";
import { ThemeProvider } from '@material-ui/styles';
import proximaNovaTheme from '../../themes/ProximaNova';
import HomeFooter from "./HomeFooter";
import { Redirect } from 'react-router-dom';
import BodyBackground from '../../images/body_back.png';
import AnimateCC from "react-adobe-animate";
import IcoPaymentProccessing from '../../images/icons/ico-20.png';
import IcoPaymentProtection from '../../images/icons/ico-8.png';
import IcoOnlinePayment from '../../images/icons/ico-9.png';
import IcoPaymentMonitoring from '../../images/icons/ico-11.png';
import IcoTechnicalSupport from '../../images/icons/ico-12.png';


const headerContent = {
    maxWidth: "560px",
    marginLeft: "10%"
};

const wrapperStyle = {
    position: "relative",
    height: "875px",
    justifyContent: "space-between",
    display: "flex",
    backgroundPosition: "left 330px bottom -220px",
    backgroundRepeat: "no-repeat",
};

const animHolderStyle = {
    background: "url(" + BodyBackground + ")",
    minHeight: "1008px",
    minWidth: "1008px",
    backgroundRepeat: "no-repeat",
    position: "relative",
    marginLeft: "47%",
    backgroundPosition: "right -38px top",
    top: "-277px"
};

const animStyle = {
    marginTop: "30%",
    marginLeft: "10%",
    maxWidth: "512px",
    maxHeight: "512px",
    background: "transparent"
};

const headerContentStyle = {
    position: "absolute",
    textAlign: "left",
    maxWidth: "1140px",
    minWidth: "1140px",
    zIndex: "10",
    marginTop: "20px",
    justifyContent: "left",
    display: "flex",
    paddingLeft: "70px",
    paddingRight: "15px",
};

const spacer = {
    height: "20px",
    width: "100%"
};

const textHeaderStyle = {
    paddingBottom: "0",
    paddingTop: "0",
    color: "#363636",
    fontSize: "2.5rem",
    fontFamily: 'ProximaNova, sans-serif',
    fontWeight: '500',
    marginTop: "0.9rem",
    marginBottom: "0.5rem",
    lineHeight: "32px"
};

const textSubHeaderStyle = {
    paddingBottom: "0",
    paddingTop: "0",
    color: "#363636",
    fontSize: "1.25rem",
    fontFamily: 'ProximaNova, sans-serif',
    fontWeight: '500',
    marginTop: "1.5rem",
    marginBottom: "1.8rem",
};

const textSubSubHeaderStyle = {
    paddingBottom: "0",
    paddingTop: "0",
    color: "#363636",
    fontSize: "1.0rem",
    fontFamily: 'ProximaNova, sans-serif',
    fontWeight: 'bold',
    marginTop: 0,
    marginBottom: 10
};

const textParagraphHeaderStyle = {
    paddingBottom: "0",
    paddingTop: "0",
    color: "#363636",
    fontSize: "1.0rem",
    fontFamily: 'ProximaNova, sans-serif',
    fontWeight: '700!important',
    marginTop: "2.7rem",
    marginBottom: "1.0rem",
};

const textNormalStyle = {
    opacity: "1",
    // color: "#363636",
    color: "black",
    fontSize: "14px",
    fontFamily: 'ProximaNova, sans-serif',
    fontWeight: '400 !important',
    marginTop: 0,
    marginBottom: 20,
    lineHeight: "1.5"
};

const textSubNormalStyle = {
    opacity: "1",
    // color: "#363636",
    color: "black",
    fontSize: "14px",
    fontFamily: 'ProximaNova, sans-serif',
    fontWeight: '700 !important',
    marginTop: 0,
    marginBottom: 0,
    lineHeight: "1.5"
};

const divHolderStyle = {
    display: "flex",
    justifyContent: "flex-start",
};

const divSubHolderStyle = {
    display: "column",
    justifyContent: "flex-start",
};

const divItemLeft = {
    minWidth: "200px",
    display: "flex",
    marginBottom: 20,
    marginLeft: "-20px",
};

const listDivItemLeft = {
    marginLeft: "20px",
    marginBottom: 20,
};

const listDivItemRight = {
    marginLeft: "40px",
    marginBottom: 20,
};

const headerDivItemLeft = {

};
const headerDivItemRight = {
    marginLeft: "40px"
};

export default class StaticPagePaymentProccessing extends React.Component {

    constructor(props) {
        super(props);
        this.state= {
            paused: false,
            login_redirect: false,
            register_redirect: false
        };
        this.handleLoginRedirect = this.handleLoginRedirect.bind(this);
        this.handleRegisterRedirect = this.handleRegisterRedirect.bind(this);
    }

    componentWillMount() {
        setTimeout(function(){
            this.setState({paused:true});
        }.bind(this), 3700);
    }

    handleLoginRedirect() {
        this.setState({login_redirect: true});
    };

    handleRegisterRedirect() {
        this.setState({register_redirect: true});
    };


    render() {
        if (
            !this.state.login_redirect &&
            !this.state.register_redirect
        ) {
            return (

                <div className="App">
                    <ThemeProvider theme={proximaNovaTheme}>
                        <header className="App-header">
                            <AppBarHome
                                loginRedirectHandler={this.handleLoginRedirect}
                                registerRedirectHandler={this.handleRegisterRedirect}
                            />
                        </header>
                        <body>
                        <div style={wrapperStyle}>
                            <div style={headerContentStyle}>
                                <div style={headerContent}>
                                    <div style={divHolderStyle}>
                                        <div style={headerDivItemLeft}>
                                            <img src={IcoPaymentProccessing} alt="logo"/>
                                        </div>
                                        <div style={headerDivItemRight}>
                                            <h1 style={textHeaderStyle}>
                                                Payment processing
                                            </h1>
                                        </div>
                                    </div>
                                    <h1 style={textSubHeaderStyle}>
                                        Solution for banks and financial institutions - members of VISA and MASTERCARD, we offer the reliable solution for processing payments and payment cards
                                    </h1>
                                    <p style={textNormalStyle}>
                                        PAYSUNION offers modern technology and a wide range of processing services for acquirers and issuers.
                                    </p>
                                    <p style={textNormalStyle}>
                                        We have unique set of processing services for managing the entire transaction processing cycle and card issuance. PAYSUNION's portfolio of services and advanced technologies allow the company to provide a reliable processing platform that can help you compete successfully in the financial environment.
                                    </p>
                                    <h1 style={textParagraphHeaderStyle}>
                                        PAYSUNION advantages:
                                    </h1>
                                    <div style={spacer} />
                                    <div style={divSubHolderStyle}>
                                        <div style={divItemLeft}>
                                            <div style={listDivItemLeft}>
                                                <img src={IcoPaymentProtection} alt="logo"/>
                                            </div>
                                            <div style={listDivItemRight}>
                                                <h2 style={textSubSubHeaderStyle}>
                                                    Reliable payment protection
                                                </h2>
                                                <p style={textSubNormalStyle}>
                                                    Compliance with international security requirements: PCI DSS, PCI PA-DSS, PCI PIN Security, EMV Level 2. Fraud transaction monitoring and flexible security filter settings.
                                                </p>
                                            </div>
                                        </div>
                                        <div style={divItemLeft}>
                                            <div style={listDivItemLeft}>
                                                <img src={IcoOnlinePayment} alt="logo"/>
                                            </div>
                                            <div style={listDivItemRight}>
                                                <h2 style={textSubSubHeaderStyle}>
                                                    Accepting all means of online payment
                                                </h2>
                                                <p style={textSubNormalStyle}>
                                                    Bank and fuel cards, NFC devices, electronic money, Apple Pay, MasterPass, Samsung Pay, VISA payWave, Google Pay
                                                </p>
                                            </div>
                                        </div>
                                        <div style={divItemLeft}>
                                            <div style={listDivItemLeft}>
                                                <img src={IcoPaymentMonitoring} alt="logo"/>
                                            </div>
                                            <div style={listDivItemRight}>
                                                <h2 style={textSubSubHeaderStyle}>
                                                    Convenient payment monitoring
                                                </h2>
                                                <p style={textSubNormalStyle}>
                                                    PAYSUNION's personal account allows you to collect and upload all statistics on payments and monitor transactions in real time.
                                                </p>
                                            </div>
                                        </div>
                                        <div style={divItemLeft}>
                                            <div style={listDivItemLeft}>
                                                <img src={IcoTechnicalSupport} alt="logo"/>
                                            </div>
                                            <div style={listDivItemRight}>
                                                <h2 style={textSubSubHeaderStyle}>
                                                    24/7 technical support
                                                </h2>
                                                <p style={textSubNormalStyle}>
                                                    We are always ready to promptly answer questions of partners, customers and payers by telephone hotline!
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div style={animHolderStyle}>
                                <div style={animStyle}>
                                    <AnimateCC
                                        animationName="anim8"
                                        paused={this.state.paused}
                                    />
                                </div>
                            </div>
                        </div>

                        <HomeFooter />

                        </body>
                    </ThemeProvider>
                </div>
            );
        }
        else if (this.state.login_redirect && !this.state.register_redirect) {
            return <Redirect push to="/login"/>;
        }
        else if (this.state.register_redirect && !this.state.login_redirect) {
            return <Redirect push to="/register"/>;
        }

    }
}

