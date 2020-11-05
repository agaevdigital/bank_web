import '../../../App.css';
import React from 'react';
import AppBarHome from "./AppBarHome";
import HomeFooter from "./HomeFooter";
import { Redirect } from 'react-router-dom';
import BodyBackground from '../../images/body_back.png';
import AnimateCC from "react-adobe-animate";
import IcoBankTransfers from '../../images/icons/ico-4.png';
import IcoHalfAPercent from '../../images/icons/ico-5.png';
import IcoOnePercent from '../../images/icons/ico-6.png';
import { withTranslation } from 'react-i18next';
import {containerStyle, sectionPageStyle} from "./styles/PublicStyle";
import Radium from "radium";

const headerContent = {
    maxWidth: "590px",
};

const animHolderStyle = {
    background: "url(" + BodyBackground + ")",
    minHeight: "1008px",
    minWidth: "1008px",
    backgroundRepeat: "no-repeat",
    position: "absolute",
    backgroundPosition: "right -38px top",
    top: "-150px",
    right: "50%",
    marginRight: "-1100px",
    "@media (max-width: 1090px)": {
        display: "none",
    },
};

const animStyle = {
    maxWidth: "712px",
    maxHeight: "512px",
    position: "absolute",
    top: "250px",
    left: "-100px",
};

const headerContentStyle = {
    textAlign: "left",
    maxWidth: "1140px",
    zIndex: "10",
    display: "flex",
};

const spacer = {
    height: "15px",
    width: "100%"
};

const halfSpacer = {
    height: "18px",
    width: "100%"
};

const textHeaderStyle = {
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
    // color: "black",
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
    fontSize: "1.1rem",
    fontFamily: 'ProximaNova, sans-serif',
    fontWeight: '500',
    marginTop: "2.0rem",
    marginBottom: "1.0rem",
};

const textNormalStyle = {
    opacity: "1",
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
    "@media (max-width: 640px)": {
        flexDirection: "column",
    },
};

const divItemLeft = {
    minWidth: "200px",
};
const divItemRight = {
    minWidth: "200px",
};

const headerDivItemLeft = {
    marginRight: "25px",
};
const headerDivItemRight = {

};

class StaticPageBankTransfers extends React.Component {

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
        }.bind(this), 2300);
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
                                            <img src={IcoBankTransfers} alt="logo"/>
                                        </div>
                                        <div style={headerDivItemRight}>
                                            <h1 style={textHeaderStyle}>
                                                {t('banktransfers.title')}
                                            </h1>
                                            <h1 style={textSubHeaderStyle}>{t('banktransfers.title_desc')}</h1>
                                        </div>
                                    </div>
                                    <p style={textNormalStyle}>
                                        {t('banktransfers.sub_item_1')}
                                    </p>
                                    <p style={textParagraphHeaderStyle}>
                                        {t('banktransfers.sub_title')}
                                    </p>
                                    <p style={textNormalStyle}>
                                        {t('banktransfers.sub_item_2')}
                                    </p>
                                    <p style={textNormalStyle}>
                                        {t('banktransfers.sub_item_3')}
                                    </p>
                                    <p style={textNormalStyle}>
                                        {t('banktransfers.sub_item_4')}
                                    </p>
                                    <div style={spacer}/>
                                    <div style={divHolderStyle}>
                                        <div style={divItemLeft}>
                                            <img src={IcoHalfAPercent} alt="logo"/>
                                            <div style={spacer}/>
                                            <p style={textNormalStyle}>
                                                {t('banktransfers.markups_of_1')}
                                            </p>
                                        </div>
                                        <div style={divItemRight}>
                                            <img src={IcoOnePercent} alt="logo"/>
                                            <div style={spacer}/>
                                            <p style={textNormalStyle}>
                                                {t('banktransfers.markups_of_2')}
                                            </p>
                                        </div>
                                    </div>
                                    <div style={halfSpacer}/>
                                    <p style={textNormalStyle}>
                                        {t('banktransfers.sub_item_5')}
                                    </p>
                                </div>
                            </div>

                            <div style={animHolderStyle}>
                                <div style={animStyle}>
                                    <AnimateCC
                                        animationName="anim3"
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


export default  withTranslation()(Radium(StaticPageBankTransfers));