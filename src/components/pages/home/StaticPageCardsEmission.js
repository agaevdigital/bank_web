import '../../../App.css';
import React from 'react';
import AppBarHome from "./AppBarHome";
import HomeFooter from "./HomeFooter";
import { Redirect } from 'react-router-dom';
import BodyBackground from '../../images/body_back.png';
import AnimateCC from "react-adobe-animate";
import IcoCardsEmission from '../../images/icons/ico-13.png';
import { withTranslation } from 'react-i18next';
import {containerStyle, sectionPageStyle} from "./styles/PublicStyle";
import Radium from "radium";

const headerContent = {
    maxWidth: "600px",
};

const animHolderStyle = {
    background: "url(" + BodyBackground + ")",
    backgroundRepeat: "no-repeat",
    minHeight: "1008px",
    minWidth: "1008px",
    position: "absolute",
    top: "-100px",
    right: "50%",
    marginRight: "-1100px",
    "@media (max-width: 1090px)": {
        display: "none",
    },
};

const animStyle = {
    maxWidth: "550px",
    maxHeight: "512px",
    background: "transparent",
    position: "absolute",
    top: "230px",
    left: "-40px",
};

const headerContentStyle = {
    zIndex: "10",
    display: "flex",
};

const spacer = {
    height: "5px",
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
    marginTop: "1.7rem",
    marginBottom: "1.8rem"
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

const listTextStyle = {
    opacity: "1",
    // color: "#363636",
    color: "black",
    fontSize: "14px",
    fontFamily: 'ProximaNova, sans-serif',
    fontWeight: '700 !important',
    marginTop: 0,
    marginLeft: 4,
    textAlign: "left",
    lineHeight: "1.5"
};

const divHolderStyle = {
    display: "flex",
    justifyContent: "flex-start",
    "@media (max-width: 500px)": {
        flexDirection: "column",
    },
};

const divListItem = {
    display: "list-item",
    justifyContent: "flex-start",
    marginLeft: 15,
    marginBottom: -5,
    color: "#ff9b0f",
};

const headerDivItemLeft = {

};
const headerDivItemRight = {
    marginLeft: "40px",
    "@media (max-width: 500px)": {
        marginLeft: "0px",
    },
};

class StaticPageCardsEmission extends React.Component {

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
        }.bind(this), 1300);
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
                                            <img src={IcoCardsEmission} alt="logo"/>
                                        </div>
                                        <div style={headerDivItemRight}>
                                            <h1 style={textHeaderStyle}>
                                                {t('cardsemission.title')}
                                            </h1>
                                        </div>
                                    </div>
                                    <h1 style={textSubHeaderStyle}>
                                        {t('cardsemission.desc')}
                                    </h1>
                                    <p style={textNormalStyle}>
                                        {t('cardsemission.sub_item_1')}
                                    </p>
                                    <p style={textNormalStyle}>
                                        {t('cardsemission.sub_item_2')}
                                    </p>
                                    <p style={textNormalStyle}>
                                        {t('cardsemission.sub_item_3')}
                                    </p>
                                    <p style={textNormalStyle}>
                                        {t('cardsemission.sub_item_4')}
                                    </p>
                                    <p style={textNormalStyle}>
                                        {t('cardsemission.sub_item_5')}
                                    </p>
                                    <div style={spacer}></div>
                                    <p style={textSubSubHeaderStyle}>
                                        {t('cardsemission.options')}
                                    </p>
                                    <div style={divListItem}>
                                        <p style={listTextStyle}>
                                            {t('cardsemission.options_1')}
                                        </p>
                                    </div>
                                    <div style={divListItem}>
                                        <p style={listTextStyle}>
                                            {t('cardsemission.options_2')}
                                        </p>
                                    </div>
                                    <div style={divListItem}>
                                        <p style={listTextStyle}>
                                            {t('cardsemission.options_3')}
                                        </p>
                                    </div>
                                    <div style={divListItem}>
                                        <p style={listTextStyle}>
                                            {t('cardsemission.options_4')}
                                        </p>
                                    </div>
                                    <div style={divListItem}>
                                        <p style={listTextStyle}>
                                            {t('cardsemission.options_5')}
                                        </p>
                                    </div>
                                    <div style={divListItem}>
                                        <p style={listTextStyle}>
                                            {t('cardsemission.options_6')}
                                        </p>
                                    </div>
                                    <div style={divListItem}>
                                        <p style={listTextStyle}>
                                            {t('cardsemission.options_7')}
                                        </p>
                                    </div>
                                    <div style={divListItem}>
                                        <p style={listTextStyle}>
                                            {t('cardsemission.options_8')}
                                        </p>
                                    </div>
                                    <div style={divListItem}>
                                        <p style={listTextStyle}>
                                            {t('cardsemission.options_9')}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div style={animHolderStyle}>
                                <div style={animStyle}>
                                    <AnimateCC
                                        animationName="anim7"
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

export default withTranslation()(Radium(StaticPageCardsEmission))