import '../../../App.css';
import React from 'react';
import AppBarHome from "./AppBarHome";
import HomeFooter from "./HomeFooter";
import { Redirect } from 'react-router-dom';
import BodyBackground from '../../images/body_back.png';
import AnimateCC from "react-adobe-animate";
import IcoInternetAcquiring from '../../images/icons/ico-7.png';
import IcoConnection from '../../images/icons/ico-8.png';
import IcoSupport from '../../images/icons/ico-9.png';
import IcoMoneyTransfer from '../../images/icons/ico-11.png';
import IcoPersonalAccount from '../../images/icons/ico-12.png';
import { withTranslation } from 'react-i18next';
import {containerStyle, sectionPageStyle} from "./styles/PublicStyle";
import Radium from "radium";


const headerContent = {
    maxWidth: "600px",
};

const animHolderStyle = {
    width: "1008px",
    height: "1008px",
    background: "url(" + BodyBackground + ")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right -38px top",
    position: "absolute",
    top: "-100px",
    right: "50%",
    marginRight: "-1100px",
    "@media (max-width: 1138px)": {
        display: "none",
    },
};

const animStyle = {
    marginTop: "225px",
    marginLeft: "-110px",
    maxWidth: "690px",
    maxHeight: "690px",
    background: "transparent",
    position: "relative",
    zIndex: 9,
};

const headerContentStyle = {
    zIndex: "10",
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
    // color: "black",
    color: "#363636",
    fontSize: "2.5rem",
    fontFamily: 'ProximaNova, sans-serif',
    fontWeight: '100',
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
    // color: "black",
    color: "#363636",
    fontSize: "1.25rem",
    fontFamily: 'ProximaNova, sans-serif',
    fontWeight: '100',
    marginTop: "1.5rem",
    marginBottom: "1.8rem",
};

const textSubSubHeaderStyle = {
    paddingBottom: "0",
    paddingTop: "0",
    // color: "black",
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
    // color: "black",
    color: "#363636",
    fontSize: "1.0rem",
    fontFamily: 'ProximaNova, sans-serif',
    fontWeight: '700!important',
    marginTop: "3.0rem",
    marginBottom: "1.0rem",
};

const textNormalStyle = {
    opacity: "1",
    // color: "#363636",
    color: "black",
    fontSize: "14px",
    fontFamily: 'ProximaNova, sans-serif',
    fontWeight: '700 !important',
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
    marginLeft: "-20px",
    alignItems: "flex",
    "@media (max-width: 500px)": {
        flexDirection: "column",
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

const listDivItemLeft = {
    marginLeft: "20px",
    "@media (max-width: 500px)": {
        marginLeft: "0px",
    },
};

const listDivItemRight = {
    marginLeft: "40px",
    "@media (max-width: 500px)": {
        marginLeft: "0px",
        marginTop: "15px",
    },
};

const listDivSubItem = {
    marginLeft: "40px",
    display: "flex",
    alignItems: "center",
    "@media (max-width: 500px)": {
        marginLeft: "0px",
        marginTop: "15px",
    },
};


class StaticPageInternetAcquiring extends React.Component {

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
        }.bind(this), 2050);
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
                                            <img src={IcoInternetAcquiring} alt="logo"/>
                                        </div>
                                        <div style={headerDivItemRight}>
                                            <h1 style={textHeaderStyle}>
                                                {t('internetacquiring.title')}
                                            </h1>
                                        </div>
                                    </div>
                                    <h1 style={textSubHeaderStyle}>
                                        {t('internetacquiring.desc')}
                                    </h1>
                                    <p style={textNormalStyle}>
                                        {t('internetacquiring.sub_item_1')}
                                    </p>
                                    <p style={textNormalStyle}>
                                        {t('internetacquiring.sub_item_2')}
                                    </p>
                                    <p style={textNormalStyle}>
                                        {t('internetacquiring.sub_item_3')}
                                    </p>
                                    <h1 style={textParagraphHeaderStyle}>
                                        {t('internetacquiring.benefits')}
                                    </h1>
                                    <div style={spacer} />
                                    <div style={divSubHolderStyle}>
                                        <div style={divItemLeft}>
                                            <div style={listDivItemLeft}>
                                                <img src={IcoConnection} alt="logo"/>
                                            </div>
                                            <div style={listDivItemRight}>
                                                <h2 style={textSubSubHeaderStyle}>
                                                    {t('internetacquiring.benefits_1_title')}
                                                </h2>
                                                <p style={textSubNormalStyle}>
                                                    {t('internetacquiring.benefits_1_desc')}
                                                </p>
                                            </div>
                                        </div>
                                        <div style={divItemLeft}>
                                            <div style={listDivItemLeft}>
                                                <img src={IcoSupport} alt="logo"/>
                                            </div>
                                            <div style={listDivItemRight}>
                                                <h2 style={textSubSubHeaderStyle}>
                                                    {t('internetacquiring.benefits_2_title')}
                                                </h2>
                                                <p style={textSubNormalStyle}>
                                                    {t('internetacquiring.benefits_2_desc')}
                                                </p>
                                            </div>
                                        </div>
                                        <div style={divItemLeft}>
                                            <div style={listDivItemLeft}>
                                                <img src={IcoMoneyTransfer} alt="logo"/>
                                            </div>
                                            <div style={listDivItemRight}>
                                                <h2 style={textSubSubHeaderStyle}>
                                                    {t('internetacquiring.benefits_3_title')}
                                                </h2>
                                                <p style={textSubNormalStyle}>
                                                    {t('internetacquiring.benefits_3_desc')}
                                                </p>
                                            </div>
                                        </div>
                                        <div style={divItemLeft}>
                                            <div style={listDivItemLeft}>
                                                <img src={IcoPersonalAccount} alt="logo"/>
                                            </div>
                                            <div style={listDivItemRight}>
                                                <h2 style={textSubSubHeaderStyle}>
                                                    {t('internetacquiring.benefits_4_title')}
                                                </h2>
                                                <p style={textSubNormalStyle}>
                                                    {t('internetacquiring.benefits_4_desc')}
                                                </p>
                                            </div>
                                        </div>
                                        <div style={divItemLeft}>
                                            <div style={listDivItemLeft}>
                                                <img src={IcoPersonalAccount} alt="logo"/>
                                            </div>
                                            <div style={listDivSubItem}>
                                                <h2 style={textSubSubHeaderStyle}>
                                                    {t('internetacquiring.benefits_5_title')}
                                                </h2>
                                            </div>
                                        </div>
                                        <div style={divItemLeft}>
                                            <div style={listDivItemLeft}>
                                                <img src={IcoPersonalAccount} alt="logo"/>
                                            </div>
                                            <div style={listDivSubItem}>
                                                <h2 style={textSubSubHeaderStyle}>
                                                    {t('internetacquiring.benefits_6_title')}
                                                </h2>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div style={animHolderStyle}>
                                <div style={animStyle}>
                                    <AnimateCC
                                        animationName="anim2"
                                        paused={this.state.paused}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                        <HomeFooter />

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

export default withTranslation()(Radium(StaticPageInternetAcquiring))