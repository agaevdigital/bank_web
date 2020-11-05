import "../../../App.css";
import React from "react";
import AppBarHome from "./AppBarHome";
import HomeFooter from "./HomeFooter";
import { Redirect } from "react-router-dom";
import BodyBackground from "../../images/body_back.png";
import AnimateCC from "react-adobe-animate";
import IcoMerchantAccount from "../../images/icons/ico-10.png";
import { withTranslation } from "react-i18next";
import {containerStyle} from "./styles/PublicStyle";
import Radium from "radium";

const sectionPageStyle = {
  paddingTop: "100px",
  paddingBottom: "40px",
  position: "relative",
  overflow: "hidden",
  flex: "1",
  "@media (max-width: 800px)": {
    paddingTop: "70px",
  },
}

const headerContent = {
  maxWidth: "570px",
};

const animHolderStyle = {
  width: "1000px",
  height: "1000px",
  backgroundImage: "url(" + BodyBackground + ")",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  position: "absolute",
  top: "-200px",
  right: "50%",
  marginRight: "-1050px",
  "@media (max-width: 1090px)": {
    display: "none",
  },
};

const animStyle = {
  maxWidth: "512px",
  maxHeight: "512px",
  background: "transparent",
  position: "absolute",
  top: "200px",
};

const headerContentStyle = {
  zIndex: "10",
  marginTop: "20px",
  justifyContent: "left",
  display: "flex",
};

const textHeaderStyle = {
  paddingBottom: "0",
  paddingTop: "0",
  color: "#363636",
  fontSize: "2.5rem",
  fontFamily: "ProximaNova, sans-serif",
  fontWeight: "500",
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
  fontFamily: "ProximaNova, sans-serif",
  fontWeight: "500",
  marginTop: "1.5rem",
  marginBottom: "1.8rem",
};

const textNormalStyle = {
  opacity: "1",
  // color: "#363636",
  color: "black",
  fontSize: "14px",
  fontFamily: "ProximaNova, sans-serif",
  fontWeight: "400 !important",
  marginTop: 0,
  marginBottom: 20,
  lineHeight: "1.5",
};

const divHolderStyle = {
  display: "flex",
  justifyContent: "flex-start",
  "@media (max-width: 500px)": {
    flexDirection: "column",
  },
};

const headerDivItemLeft = {
  alignItems: "center",
};
const headerDivItemRight = {
  marginLeft: "40px",
  "@media (max-width: 500px)": {
    marginLeft: "0px",
  },
};

class StaticPageMerchantAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paused: false,
      login_redirect: false,
      register_redirect: false,
    };
    this.handleLoginRedirect = this.handleLoginRedirect.bind(this);
    this.handleRegisterRedirect = this.handleRegisterRedirect.bind(this);
  }

  componentDidMount() {
    setTimeout(
      function () {
        this.setState({ paused: true });
      }.bind(this),
      1100
    );
  }

  handleLoginRedirect() {
    this.setState({ login_redirect: true });
  }

  handleRegisterRedirect() {
    this.setState({ register_redirect: true });
  }

  render() {
    const { t } = this.props;
    if (!this.state.login_redirect && !this.state.register_redirect) {
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
                        <img src={IcoMerchantAccount} alt="logo"/>
                      </div>
                      <div style={headerDivItemRight}>
                        <h1 style={textHeaderStyle}>
                          {t("merchantaccount.title")}
                        </h1>
                      </div>
                    </div>
                    <h1 style={textSubHeaderStyle}>{t("merchantaccount.desc")}</h1>
                    <p style={textNormalStyle}>{t("merchantaccount.sub_item_1")}</p>
                    <p style={textNormalStyle}>{t("merchantaccount.sub_item_2")}</p>
                  </div>
                </div>
              </div>
            </div>
                <div style={animHolderStyle}>
                  <div style={animStyle}>
                    <AnimateCC animationName="anim5" paused={this.state.paused}/>
                  </div>
                </div>



            <HomeFooter />
        </div>
      );
    } else if (this.state.login_redirect && !this.state.register_redirect) {
      return <Redirect push to="/login" />;
    } else if (this.state.register_redirect && !this.state.login_redirect) {
      return <Redirect push to="/register" />;
    }
  }
}

export default withTranslation()(Radium(StaticPageMerchantAccount));
