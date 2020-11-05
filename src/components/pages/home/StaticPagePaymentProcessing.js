import '../../../App.css';
import React from 'react';
import AppBarHome from "./AppBarHome";
import HomeFooter from "./HomeFooter";
import { Redirect } from 'react-router-dom';
import BodyBackground from '../../images/body_back.png';
import AnimateCC from "react-adobe-animate";
import IcoPaymentProcessing from '../../images/icons/ico-20.png';
import IcoPaymentProtection from '../../images/icons/ico-8.png';
import IcoOnlinePayment from '../../images/icons/ico-9.png';
import IcoPaymentMonitoring from '../../images/icons/ico-11.png';
import IcoTechnicalSupport from '../../images/icons/ico-12.png';
import { withTranslation } from 'react-i18next';
import {containerStyle, sectionPageStyle} from "./styles/PublicStyle";
import Radium from "radium";


const headerContent = {
    maxWidth: "600px",
};

const animHolderStyle = {
    backgroundImage: "url(" + BodyBackground + ")",
    backgroundRepeat: "no-repeat",
    width: "1100px",
    height: "1100px",
    backgroundPosition: "right -38px top",
    position: "absolute",
    top: "-160px",
    right: "50%",
    marginRight: "-1100px",
    "@media (max-width: 1090px)": {
        display: "none",
    },
};

const animStyle = {
    width: "652px",
    background: "transparent",
    position: "absolute",
    top: "130px",
    left: "50%",
    marginLeft: "-540px",
};

const headerContentStyle = {
    textAlign: "left",
    maxWidth: "1140px",
    zIndex: "10",
    marginTop: "20px",
    justifyContent: "left",
    display: "flex",
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
    lineHeight: "32px",
    "@media (max-width: 500px)": {
        fontSize: "32px",
        marginTop: "15px",
    },
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
    "@media (max-width: 500px)": {
        flexDirection: "column",
    },
};

const divSubHolderStyle = {
    display: "column",
    justifyContent: "flex-start",
    "@media (max-width: 500px)": {
        flexDirection: "column",
    },
};

const divItemLeft = {
    minWidth: "200px",
    display: "flex",
    marginBottom: 20,
    "@media (max-width: 500px)": {
        flexDirection: "column",
    },
};

const listDivItemLeft = {
    marginBottom: 20,
};

const listDivItemRight = {
    maxWidth: "370px",
    marginLeft: "40px",
    marginBottom: 20,
    "@media (max-width: 500px)": {
        marginLeft: "0px",
    },
};

const headerDivItemLeft = {

};
const headerDivItemRight = {
    marginLeft: "40px",
    "@media (max-width: 500px)": {
        marginLeft: "0px",
    },
};

class StaticPagePaymentProcessing extends React.Component {

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

    componentDidMount() {
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
        const {t} = this.props;
        if (
            !this.state.login_redirect &&
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
                    <div style={sectionPageStyle}>
                        <div style={containerStyle}>
                            <div style={headerContentStyle}>
                                <div style={headerContent}>
                                    <div style={divHolderStyle}>
                                        <div style={headerDivItemLeft}>
                                            <img src={IcoPaymentProcessing} alt="logo"/>
                                        </div>
                                        <div style={headerDivItemRight}>
                                            <h1 style={textHeaderStyle}>
                                                {t('paymentprocessing.title')}
                                            </h1>
                                        </div>
                                    </div>
                                    <h1 style={textSubHeaderStyle}>
                                        {t('paymentprocessing.desc')}
                                    </h1>
                                    <p style={textNormalStyle}>
                                        {t('paymentprocessing.sub_item_1')}
                                    </p>
                                    <p style={textNormalStyle}>
                                        {t('paymentprocessing.sub_item_2')}
                                    </p>
                                    <h1 style={textParagraphHeaderStyle}>
                                        {t('paymentprocessing.advantages')}
                                    </h1>
                                    <div style={spacer}/>
                                    <div style={divSubHolderStyle}>
                                        <div style={divItemLeft}>
                                            <div style={listDivItemLeft}>
                                                <img src={IcoPaymentProtection} alt="logo"/>
                                            </div>
                                            <div style={listDivItemRight}>
                                                <h2 style={textSubSubHeaderStyle}>
                                                    {t('paymentprocessing.advantages_1_title')}
                                                </h2>
                                                <p style={textSubNormalStyle}>
                                                    {t('paymentprocessing.advantages_1_desc')}
                                                </p>
                                            </div>
                                        </div>
                                        <div style={divItemLeft}>
                                            <div style={listDivItemLeft}>
                                                <img src={IcoOnlinePayment} alt="logo"/>
                                            </div>
                                            <div style={listDivItemRight}>
                                                <h2 style={textSubSubHeaderStyle}>
                                                    {t('paymentprocessing.advantages_2_title')}
                                                </h2>
                                                <p style={textSubNormalStyle}>
                                                    {t('paymentprocessing.advantages_2_desc')}
                                                </p>
                                            </div>
                                        </div>
                                        <div style={divItemLeft}>
                                            <div style={listDivItemLeft}>
                                                <img src={IcoPaymentMonitoring} alt="logo"/>
                                            </div>
                                            <div style={listDivItemRight}>
                                                <h2 style={textSubSubHeaderStyle}>
                                                    {t('paymentprocessing.advantages_3_title')}
                                                </h2>
                                                <p style={textSubNormalStyle}>
                                                    {t('paymentprocessing.advantages_3_desc')}
                                                </p>
                                            </div>
                                        </div>
                                        <div style={divItemLeft}>
                                            <div style={listDivItemLeft}>
                                                <img src={IcoTechnicalSupport} alt="logo"/>
                                            </div>
                                            <div style={listDivItemRight}>
                                                <h2 style={textSubSubHeaderStyle}>
                                                    {t('paymentprocessing.advantages_4_title')}
                                                </h2>
                                                <p style={textSubNormalStyle}>
                                                    {t('paymentprocessing.advantages_4_desc')}
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
                    </div>

                    <HomeFooter/>

                </div>
            );
        } else if (this.state.login_redirect && !this.state.register_redirect) {
            return <Redirect push to="/login"/>;
        } else if (this.state.register_redirect && !this.state.login_redirect) {
            return <Redirect push to="/register"/>;
        }

    }
}


export default withTranslation()(Radium(StaticPagePaymentProcessing))