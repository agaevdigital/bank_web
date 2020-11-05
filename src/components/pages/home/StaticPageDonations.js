import '../../../App.css';
import React from 'react';
import AppBarHome from "./AppBarHome";
import HomeFooter from "./HomeFooter";
import { Redirect } from 'react-router-dom';
import BodyBackground from '../../images/body_back.png';
import AnimateCC from "react-adobe-animate";
import IcoDonation from '../../images/icons/ico-21.png';
import { withTranslation } from 'react-i18next';
import {containerStyle, sectionPageStyle} from "./styles/PublicStyle";
import Radium from "radium";


const headerContent = {
    maxWidth: "600px",
};


const animHolderStyle = {
    background: "url(" + BodyBackground + ")",
    minHeight: "1008px",
    minWidth: "1008px",
    backgroundRepeat: "no-repeat",
    position: "absolute",
    top: "-100px",
    right: "50%",
    marginRight: "-1100px",
    "@media (max-width: 1090px)": {
        display: "none",
    },
};

const animStyle = {
    width: "712px",
    background: "transparent",
    position: "absolute",
    top: "100px",
    left: "-150px",
};

const headerContentStyle = {
    textAlign: "left",
    zIndex: "10",
    justifyContent: "left",
    display: "flex",
};

const textHeaderStyle = {
    paddingBottom: "0",
    paddingTop: "0",
    color: "#363636",
    fontSize: "2.5rem",
    fontFamily: 'ProximaNova, sans-serif',
    fontWeight: '500',
    marginTop: "0",
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
    marginTop: "0",
    marginBottom: "1.8rem",
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

const divHolderStyle = {
    display: "flex",
    justifyContent: "flex-start",
    "@media (max-width: 500px)": {
        flexDirection: "column",
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

class StaticPageDonations extends React.Component {

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
        /*setTimeout(function(){
            this.setState({paused:true});
        }.bind(this), 3700);*/
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
                                            <img src={IcoDonation} alt="logo"/>
                                        </div>
                                        <div style={headerDivItemRight}>
                                            <h1 style={textHeaderStyle}>
                                                {t('donations.title')}
                                            </h1>
                                            <h1 style={textSubHeaderStyle}>
                                                {t('donations.desc')}
                                            </h1>
                                        </div>
                                    </div>
                                    <p style={textNormalStyle}>
                                        {t('donations.sub_item_1')}
                                    </p>
                                    <p style={textNormalStyle}>
                                        {t('donations.sub_item_2')}
                                    </p>
                                    <p style={textNormalStyle}>
                                        {t('donations.sub_item_3')}
                                    </p>
                                    <p style={textNormalStyle}>
                                        {t('donations.sub_item_4')}
                                    </p>
                                </div>
                            </div>

                            <div style={animHolderStyle}>
                                <div style={animStyle}>
                                    <AnimateCC
                                        animationName="anim13"
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

export default withTranslation()(Radium(StaticPageDonations))