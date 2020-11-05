import React from "react";
import { withTranslation } from "react-i18next";
import AnimateCC from "react-adobe-animate";
import { Redirect } from "react-router-dom";

import AppBarHome from "./AppBarHome";
import HomeFooter from "./HomeFooter";

import IcoSupport from "../../images/icons/ico-3.png";
import IcoAccountManagement from "../../images/icons/ico-2.png";
import IcoPersonalAccount from "../../images/icons/ico-1.png";
import BodyBackground from "../../images/body_back.png";
import {containerStyle, sectionPageStyle} from "./styles/PublicStyle";
import Radium from "radium";

const headerContent = {
  maxWidth: "560px",
};

const animHolderStyle = {
  // background: "url(" + BodyBackground + ")",
  minWidth: "1008px",
  backgroundRepeat: "no-repeat",
  marginLeft: "0",
  backgroundPosition: "right -38px top",
  position: "absolute",
  top: "-100px",
  right: "50%",
  marginRight: "-1100px",
  "@media (max-width: 1090px)": {
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
  maxWidth: "1140px",
  zIndex: "10",
  marginTop: "20px",
  justifyContent: "left",
  display: "flex",
};

const spacer = {
  height: "20px",
  width: "100%",
};

const textHeaderStyle = {
  paddingBottom: "0",
  paddingTop: "0",
  color: "#363636",
  fontSize: "2.5rem",
  fontFamily: "ProximaNova, sans-serif",
  fontWeight: "500",
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
  fontFamily: "ProximaNova, sans-serif",
  fontWeight: "500",
  marginTop: "0",
  marginBottom: "1.8rem",
};

const textSubSubHeaderStyle = {
  paddingBottom: "0",
  paddingTop: "0",
  color: "#363636",
  fontSize: "0.9rem",
  fontFamily: "ProximaNova, sans-serif",
  fontWeight: "bold",
  marginTop: 10,
  marginBottom: 10,
};

const textParagraphHeaderStyle = {
  paddingBottom: "0",
  paddingTop: "0",
  color: "#363636",
  fontSize: "1.1rem",
  fontFamily: "ProximaNova, sans-serif",
  fontWeight: "bold",
  marginTop: "2.0rem",
  marginBottom: "1.0rem",
};

const textNormalStyle = {
  opacity: "1",
  color: "black",
  fontSize: "14px",
  fontFamily: "ProximaNova, sans-serif",
  fontWeight: "700 !important",
  marginTop: 0,
  marginBottom: 20,
  lineHeight: "1.5",
};

const divHolderStyle = {
  display: "flex",
  "@media (max-width: 500px)": {
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
  marginRight: "28px",
};

const headerDivItemRight = {

};

class StaticPagePersonalAccount extends React.Component {
  state = {
    paused: false,
    login_redirect: false,
    register_redirect: false,
  };

  componentDidMount() {
    setTimeout(
      function () {
        this.setState({ paused: true });
      }.bind(this),
      2050
    );
  }

  handleLoginRedirect = () => {
    this.setState({ login_redirect: true });
  };

  handleRegisterRedirect = () => {
    this.setState({ register_redirect: true });
  };

  render() {
    const { t } = this.props;

    if (this.state.login_redirect) {
      return <Redirect push to="/login" />;
    }

    if (this.state.register_redirect) {
      return <Redirect push to="/register" />;
    }

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
                      <img src={IcoPersonalAccount} alt="logo"/>
                    </div>
                    <div style={headerDivItemRight}>
                      <h1 style={textHeaderStyle}>{t("personalaccount.title")}</h1>
                      <h1 style={textSubHeaderStyle}>
                        {t("personalaccount.title_desc")}
                      </h1>
                    </div>
                  </div>
                  <p style={textNormalStyle}>{t("personalaccount.sub_item_1")}</p>
                  <p style={textNormalStyle}>{t("personalaccount.sub_item_2")}</p>
                  <p style={textNormalStyle}>{t("personalaccount.sub_item_3")}</p>
                  <h1 style={textParagraphHeaderStyle}>
                    {t("personalaccount.sub_title")}
                  </h1>
                  <p style={textNormalStyle}>{t("personalaccount.sub_item_4")}</p>
                  <p style={textNormalStyle}>{t("personalaccount.sub_item_5")}</p>
                  <div style={spacer}/>
                  <div style={divHolderStyle}>
                    <div style={divItemLeft}>
                      <img src={IcoAccountManagement} alt="logo"/>
                      <h2 style={textSubSubHeaderStyle}>
                        {t("personalaccount.sub_title_2")}
                      </h2>
                      <p style={textNormalStyle}>
                        {t("personalaccount.sub_item_6")}
                      </p>
                    </div>
                    <div style={divItemRight}>
                      <img src={IcoSupport} alt="logo"/>
                      <h2 style={textSubSubHeaderStyle}>
                        {t("personalaccount.sub_title_3")}
                      </h2>
                      <p style={textNormalStyle}>
                        {t("personalaccount.sub_item_7")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div style={animHolderStyle}>
                <div style={animStyle}>
                  <AnimateCC animationName="anim2" paused={this.state.paused}/>
                </div>
                <img
                    src={BodyBackground}
                    style={{position: "absolute", left: 0, top: 0}}
                    alt=""
                />
              </div>
            </div>
          </div>

          <HomeFooter/>
        </div>
    );
  }
}

export default withTranslation()(Radium(StaticPagePersonalAccount));
