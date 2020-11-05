import React from 'react';
import AppBarHome from "./AppBarHome";
import HomeFooter from "./HomeFooter";
import { Redirect } from 'react-router-dom';
import BodyBackground from '../../images/body_back.png';
import BankCardBackground from '../../images/backgrounds/card-background.png';
import AnimateCC from "react-adobe-animate";
import BankCardStandardButton from "../../buttons/BankCardStandardButton";
import BankCardPremiumButton from "../../buttons/BankCardPremiumButton";
import BankCardMetalButton from "../../buttons/BankCardMetalButton";
import IcoPersonalBankCards from '../../images/icons/ico-14.png';
import IcoDebitCard from '../../images/icons/ico-15.png';
import IcoCashback from '../../images/icons/ico-16.png';
import IcoCinema from '../../images/icons/ico-17.png';
import IcoWithdrawals from '../../images/icons/ico-18.png';
import IcoCardService from '../../images/icons/ico-14.png';
import { withTranslation } from 'react-i18next';
import Radium from "radium";
import {containerStyle, sectionPageStyle} from "./styles/PublicStyle";


const headerContent = {
    maxWidth: "560px",
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
    maxWidth: "550px",
    maxHeight: "512px",
    background: "transparent",
    position: "absolute",
    top: "230px",
    left: "-40px",
};

const bankCardBackground = {
    background: "url(" + BankCardBackground + ")",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    maxWidth: "640px",
    position: "absolute",
    zIndex: "10",
    left: "50%",
    marginLeft: "100px",
    top: "600px",
    padding: "34px 80px",
    borderRadius: "32px",
    "@media (max-width: 1268px)": {
        marginLeft: "50px",
    },
    "@media (max-width: 1090px)": {
        marginLeft: "0px",
        position: "static",
    },
    "@media (max-width: 500px)": {
        padding: "20px",
    },
};

const textCardHeader = {
    color: "white",
    fontFamily: 'ProximaNova, sans-serif',
    fontSize: "1.25rem",
    textAlign: "center",
    margin: "0 auto",
};

const pStyleNoMargin = {
    marginTop: "0",
    marginBottom: "0"
};

const buttonHolderStyle = {
    marginTop: "30px",
    justifyContent: "center",
    display: "flex",
    "@media (max-width: 500px)": {
        flexDirection: "column",
        alignItems: "center",
    },
};

const textCardSubheader = {
    color: "white",
    opacity: "0.8",
    fontFamily: 'ProximaNova, sans-serif',
    fontSize: "1rem",
    marginTop: "55px",
    textAlign: "center",
    "@media (max-width: 500px)": {
        marginTop: "25px",
    },
};

const textCardNormal = {
    maxWidth: "435px",
    color: "white",
    opacity: "0.8",
    fontFamily: 'ProximaNova, sans-serif',
    fontSize: "1rem",
    margin: "54px auto 0 auto",
    textAlign: "center",
    "@media (max-width: 500px)": {
        margin: "25px auto 0 auto",
    },
};

const headerContentStyle = {
    textAlign: "left",
    zIndex: "10",
    marginTop: "20px",
    justifyContent: "left",
    display: "flex",
};

const spacer = {
    height: "30px",
    width: "100%",
    "@media (max-width: 600px)": {
        display: "none",
    },
};

const textHeaderStyle = {
    paddingBottom: "0",
    paddingTop: "0",
    color: "#363636",
    fontSize: "2.5rem",
    fontFamily: 'ProximaNova, sans-serif',
    fontWeight: '500',
    marginTop: "0rem",
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
    marginTop: "1.0rem",
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
    marginBottom: 0,
    lineHeight: "1.5"
};

const divHolderStyle = {
    display: "flex",
    justifyContent: "flex-start",
    "@media (max-width: 600px)": {
        flexDirection: "column",
    },
};

const divSubHolderStyle = {
    display: "column",
    justifyContent: "flex-start",
};

const divItemLeft = {
    display: "flex",
    marginBottom: 40,
    marginLeft: "-20px",
    alignItems: "flex",
    "@media (max-width: 600px)": {
        marginLeft: "0px",
        flexDirection: "column",
        marginBottom: "20px",
    },
};

const listDivItemLeft = {
    marginLeft: "20px",
    "@media (max-width: 600px)": {
        marginLeft: "0px",
    },
};

const listDivItemRight = {
    marginLeft: "40px",
    "@media (max-width: 600px)": {
        marginLeft: "0px",
        marginTop: "15px",
    },
};

const headerDivItemLeft = {

};

const headerDivItemRight = {
    marginLeft: "40px",
    "@media (max-width: 600px)": {
        marginLeft: "0px",
        marginTop: "15px",
    },
};


class StaticPagePersonalBankCards extends React.Component {

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
        }.bind(this), 1280);
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
                                            <img src={IcoPersonalBankCards} alt="logo"/>
                                        </div>
                                        <div style={headerDivItemRight}>
                                            <h1 style={textHeaderStyle}>
                                                {t('personalbankcards.title')}
                                            </h1>
                                            <h1 style={textSubHeaderStyle}>
                                                {t('personalbankcards.desc')}
                                            </h1>
                                        </div>
                                    </div>
                                    <p style={textNormalStyle}>
                                        {t('personalbankcards.sub_item_1')}
                                    </p>
                                    <div style={spacer}/>
                                    <h1 style={textParagraphHeaderStyle}>
                                        {t('personalbankcards.benefits')}
                                    </h1>
                                    <div style={spacer}/>
                                    <div style={divSubHolderStyle}>
                                        <div style={divItemLeft}>
                                            <div style={listDivItemLeft}>
                                                <img src={IcoDebitCard} alt="logo"/>
                                            </div>
                                            <div style={listDivItemRight}>
                                                <h2 style={textSubSubHeaderStyle}>
                                                    {t('personalbankcards.benefits_1_title')}
                                                </h2>
                                                <p style={textNormalStyle}>
                                                    {t('personalbankcards.benefits_1_desc')}
                                                </p>
                                            </div>
                                        </div>
                                        <div style={divItemLeft}>
                                            <div style={listDivItemLeft}>
                                                <img src={IcoCashback} alt="logo"/>
                                            </div>
                                            <div style={listDivItemRight}>
                                                <h2 style={textSubSubHeaderStyle}>
                                                    {t('personalbankcards.benefits_2_title')}
                                                </h2>
                                                <p style={textNormalStyle}>
                                                    {t('personalbankcards.benefits_2_desc')}
                                                </p>
                                            </div>
                                        </div>
                                        <div style={divItemLeft}>
                                            <div style={listDivItemLeft}>
                                                <img src={IcoCinema} alt="logo"/>
                                            </div>
                                            <div style={listDivItemRight}>
                                                <h2 style={textSubSubHeaderStyle}>
                                                    {t('personalbankcards.benefits_3_title')}
                                                </h2>
                                                <p style={textNormalStyle}>
                                                    {t('personalbankcards.benefits_3_desc')}
                                                </p>
                                            </div>
                                        </div>
                                        <div style={divItemLeft}>
                                            <div style={listDivItemLeft}>
                                                <img src={IcoWithdrawals} alt="logo"/>
                                            </div>
                                            <div style={listDivItemRight}>
                                                <h2 style={textSubSubHeaderStyle}>
                                                    {t('personalbankcards.benefits_4_title')}
                                                </h2>
                                                <p style={textNormalStyle}>
                                                    {t('personalbankcards.benefits_4_desc')}
                                                </p>
                                            </div>
                                        </div>
                                        <div style={divItemLeft}>
                                            <div style={listDivItemLeft}>
                                                <img src={IcoCardService} alt="logo"/>
                                            </div>
                                            <div style={listDivItemRight}>
                                                <h2 style={textSubSubHeaderStyle}>
                                                    {t('personalbankcards.benefits_5_title')}
                                                </h2>
                                                <p style={textNormalStyle}>
                                                    {t('personalbankcards.benefits_5_desc')}
                                                </p>
                                            </div>
                                        </div>
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
                            <div style={bankCardBackground}>
                                <div>
                                    <div style={textCardHeader}>
                                        <p style={pStyleNoMargin}
                                           dangerouslySetInnerHTML={{__html: t('personalbankcards.card_title')}}/>
                                    </div>
                                    <div style={textCardSubheader}>
                                        <p style={pStyleNoMargin}>
                                            {t('personalbankcards.choose_type')}
                                        </p>
                                    </div>
                                    <div style={buttonHolderStyle}>
                                        <BankCardStandardButton/>
                                        <BankCardPremiumButton/>
                                        <BankCardMetalButton/>
                                    </div>
                                    <div style={textCardNormal}>
                                        {t('personalbankcards.choose_desc')}
                                    </div>
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

export default withTranslation()(Radium(StaticPagePersonalBankCards))