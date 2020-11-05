import '../../../App.css';
import React from 'react';
import AppBarHome from "./AppBarHome";
import HomeFooter from "./HomeFooter";
import { Redirect } from 'react-router-dom';
import BodyBackground from '../../images/body_back.png';
import AnimateCC from "react-adobe-animate";
import IcoStock from '../../images/icons/ico-21.png';
import IcoBreakfast from '../../images/icons/ico-22.png';
import IcoCoffee from '../../images/icons/ico-23.png';
import { withTranslation } from 'react-i18next';
import Radium from "radium";
import {containerStyle, sectionPageStyle} from "./styles/PublicStyle";

const headerContent = {
    maxWidth: "560px",
};

const animHolderStyle = {
    zIndex: 2,
    backgroundImage: "url(" + BodyBackground + ")",
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
    marginTop: "125px",
    marginLeft: "-150px",
    maxWidth: "690px",
    maxHeight: "690px",
    background: "transparent",
    position: "relative",
    zIndex: 9,
};

const headerContentStyle = {
    textAlign: "left",
    maxWidth: "540px",
    justifyContent: "left",
    display: "flex",
    zIndex: 1
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

const textParagraphHeaderStyle = {
    paddingBottom: "0",
    paddingTop: "0",
    color: "#363636",
    fontSize: "1.0rem",
    fontFamily: 'ProximaNova, sans-serif',
    fontWeight: 'bold',
    marginTop: "2.5rem",
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
    fontWeight: '400 !important',
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
};

const divItemLeft = {
    minWidth: "200px",
    display: "flex",
    marginBottom: 20,
    alignItems: "flex",
    "@media (max-width: 500px)": {
        flexDirection: "column",
    },
};

const listDivItemLeft = {

};

const listDivItemRight = {
    marginLeft: "40px",
    display: "flex",
    alignItems: "center",
    "@media (max-width: 500px)": {
        marginLeft: "0px",
        marginTop: "15px",
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


class StaticPageStock extends React.Component {

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
        }.bind(this), 2200);
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
                                            <img src={IcoStock} alt="logo"/>
                                        </div>
                                        <div style={headerDivItemRight}>
                                            <h1 style={textHeaderStyle}>
                                                {t('stock.title')}
                                            </h1>
                                            <h1 style={textSubHeaderStyle}>
                                                {t('stock.desc')}
                                            </h1>
                                        </div>
                                    </div>
                                    <p style={textNormalStyle}>
                                        {t('stock.sub_item_1')}
                                    </p>
                                    <h1 style={textParagraphHeaderStyle}>
                                        {t('stock.example')}
                                    </h1>
                                    <div style={spacer}/>
                                    <div style={divSubHolderStyle}>
                                        <div style={divItemLeft}>
                                            <div style={listDivItemLeft}>
                                                <img src={IcoBreakfast} alt="logo"/>
                                            </div>
                                            <div style={listDivItemRight}>
                                                <p style={textSubNormalStyle}>
                                                    {t('stock.example_1')}
                                                </p>
                                            </div>
                                        </div>
                                        <div style={divItemLeft}>
                                            <div style={listDivItemLeft}>
                                                <img src={IcoCoffee} alt="logo"/>
                                            </div>
                                            <div style={listDivItemRight}>
                                                <p style={textSubNormalStyle}>
                                                    {t('stock.example_2')}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div style={animHolderStyle}>
                                <div style={animStyle}>
                                    <AnimateCC
                                        animationName="anim11"
                                        paused={this.state.paused}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                        <HomeFooter/>



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

export default withTranslation()(Radium(StaticPageStock))