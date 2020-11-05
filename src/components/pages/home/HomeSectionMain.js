import React from 'react';
import BodyBackground from '../../images/body_back.png';
import Lines from '../../images/lines.png';
import AnimateCC from "react-adobe-animate";
import SignupButtonLarge from "../../buttons/SignupButtonLarge";
import { withTranslation } from 'react-i18next';
import Radium from "radium";
import {containerStyle} from  "./styles/PublicStyle";


const headerContent = {
    maxWidth: "712px",
    paddingTop: "203px",
    paddingBottom: "225px",
    "@media (max-width: 800px)": {
        paddingTop: "100px",
        paddingBottom: "50px",
    },
}

const sectionStyle = {
    width: "100wv",
    overflow: "hidden",
    background: "url(" + Lines + ")",
    backgroundPosition: "left -330px bottom -220px",
    backgroundRepeat: "no-repeat",
}

const wrapperStyle = {
    width: "100%",
    position: "relative",
    display: "flex",
};

const animHolderStyle = {
    width: "1374px",
    background: "url(" + BodyBackground + ")",
    backgroundRepeat: "no-repeat",
    position: "absolute",
    left: "50%",
    marginLeft: "-185px",
    backgroundPosition: "right 120px top",
    top: "-145px",
    "@media (max-width: 800px)": {
        display: "none",
    },
};

const headerContentStyle = {
    position: "relative",
    textAlign: "left",
    maxWidth: "1140px",
    zIndex: "10",
    display: "flex",
    paddingLeft: "15px",
    paddingRight: "15px",
    "@media (max-width: 800px)": {
        padding: "0px",
    },
};


const animStyle = {
    marginTop: "138px",
    marginLeft: "200px",
};

const textOrangeStyle = {
    textTransform: "uppercase",
    paddingBottom: "39px",
    color: "#FF9B0F",
    fontSize: "18px",
    fontFamily: 'ProximaNova, sans-serif',
    "@media (max-width: 800px)": {
        paddingBottom: "15px",
    },
};

const textHeaderStyle = {
    paddingBottom: "0",
    paddingTop: "0",
    color: "#363636",
    fontSize: "44px",
    fontFamily: 'ProximaNova, sans-serif',
    fontWeight: '700',
    marginTop: "0",
    marginBottom: "0.5rem",
    "@media (max-width: 800px)": {
        fontSize: "30px",
    },
    "@media (max-width: 425px)": {
        fontSize: "26px",
    },
};

const textNormalStyle = {
    opacity: "0.7",
    color: "#363636",
    fontSize: "16px",
    fontFamily: 'ProximaNova, sans-serif',
    fontWeight: '700 !important',
    paddingTop: "1.5rem",
    paddingBottom: "1.5rem",
};

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            paused: false
        };
        this.handleLoginRedirect = this.handleLoginRedirect.bind(this);
        this.handleRegisterRedirect = this.handleRegisterRedirect.bind(this);
    }

    componentDidMount() {
        setTimeout(function () {
            this.setState({paused: true});
        }.bind(this), 3700);
    };

    handleLoginRedirect() {
        this.props.loginRedirectHandler();
    };

    handleRegisterRedirect() {
        this.props.registerRedirectHandler();
    };

    render() {
        return (
            <section style={sectionStyle}>
                <div style={ containerStyle }>
                    <div style={wrapperStyle}>
                        <div style={headerContentStyle}>
                            <div style={headerContent}>
                                <div style={textOrangeStyle}>
                                    {this.props.t('mainpage.banking_service')}
                                </div>
                                <h1 style={textHeaderStyle}>
                                    PAYSUNION – {this.props.t('mainpage.banking_intro')}
                                </h1>
                                <p style={textNormalStyle}>
                                    {this.props.t('mainpage.banking_intro_extra')}
                                </p>

                                <SignupButtonLarge
                                    registerRedirectHandler={this.handleRegisterRedirect}
                                />
                            </div>
                        </div>

                        <div style={animHolderStyle}>
                            <div style={animStyle}>
                                <AnimateCC
                                    animationName="anim1"
                                    paused={this.state.paused}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default withTranslation()(Radium(Home))