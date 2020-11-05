
import React from "react";
import LoginButton from "../../buttons/LoginButton";
import SignupButton from "../../buttons/SignupButton";
import { AppBar, Toolbar } from "@material-ui/core";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

import PULogo from "components/images/logo.png";


import { ReactComponent as CBArrowDropDown } from "../../images/combobox-arrow.svg";
import ProductsButton from "../../buttons/ProductsButton";
import PricingButton from "../../buttons/PricingButton";
import CompanyButton from "../../buttons/CompanyButton";
import HelpButton from "../../buttons/HelpButton";
import PUSelect from "../../selects/PUSelect";
import { Redirect } from "react-router-dom";
import { withTranslation } from "react-i18next";
import { getLocale } from "localization";


const LANGUAGES = [
  { id: 1, label: "ENG" },
  { id: 2, label: "RUS" },
];

const i18Lang = {1: 'en', 2: 'ru'};

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });
  return React.cloneElement(children, {
    elevation: trigger ? 7 : 0,
  });
}



class AppBarHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTop: true,
      navBarColor: "transparent",
      home_redirect: false,
      isActiveNav: false,
    };
  }

  handleLoginRedirect = () => {
    this.props.loginRedirectHandler && this.props.loginRedirectHandler();
  }

  handleRegisterRedirect = () => {
    this.props.registerRedirectHandler && this.props.registerRedirectHandler();
  }

  generateStyle = (color_) => {
    return {
      borderRadius: "0 0 10px 10px",
      alignItems: "center",
      background: color_,
    };
  }

  homeRedirectHandler = () => {
    this.setState({ home_redirect: true });
  }

  getLang = () => {
    let lang = getLocale();
    return lang === 'ru' ? 2 : 1;
  }

  componentDidMount() {
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY < 1;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop });
        if (isTop) {
          this.setState({ navBarColor: "transparent" });
        } else {
          this.setState({ navBarColor: "white" });
        }
      }
    });
  }

  changeLanguage = (languageID_) => {
    this.setState({ languageID: i18Lang[languageID_] });
    //alert("LanguageID set to: " + languageID_);

    this.props.i18n.changeLanguage(i18Lang[languageID_]);
  }

  changeNav = () => {
    this.setState({
      isActiveNav: !this.state.isActiveNav
    });
  }

  render() {

    if (!this.state.home_redirect) {
      return (
        <div className="App">
          <ElevationScroll>
            <AppBar style={this.generateStyle(this.state.navBarColor)}>
              <Toolbar className={"nav"}>
                <img
                  src={PULogo}
                  // className="App-logo"
                  alt="logo"
                  onClick={this.homeRedirectHandler}
                  style={{ cursor: "pointer" }}
                />
                <div className="burger" onClick={() => this.changeNav()}>
                  <span className="burger__line"></span>
                </div>
                <div className={this.state.isActiveNav? "nav__right nav__right_active" : "nav__right"}>
                  <ProductsButton />
                  <PricingButton />
                  <CompanyButton />
                  <HelpButton />
                  <SignupButton
                    registerRedirectHandler={this.handleRegisterRedirect}
                  />
                  <LoginButton loginRedirectHandler={this.handleLoginRedirect} />
                  <PUSelect
                    change_handler={this.changeLanguage}
                    combobox_label=""
                    cb_min_width="80px"
                    select_options={LANGUAGES}
                    selectedValue={this.getLang()}
                    cb_enabled={true}
                    IconComponent={CBArrowDropDown}
                  />
                </div>
              </Toolbar>
            </AppBar>
          </ElevationScroll>
          {/*<Toolbar />
          <Toolbar />*/}
        </div>
      );
    } else {
      return (
        <div className="App">
          <ElevationScroll>
            <AppBar style={this.generateStyle(this.state.navBarColor)}>
              <Toolbar className={"nav"}>
                <img
                  src={PULogo}
                  // className="App-logo"
                  alt="logo"
                  onClick={this.homeRedirectHandler}
                  style={{ cursor: "pointer" }}
                />

                <ProductsButton />
                <PricingButton />
                <CompanyButton />
                <HelpButton />
                <SignupButton
                  registerRedirectHandler={this.handleRegisterRedirect}
                />
                <LoginButton loginRedirectHandler={this.handleLoginRedirect} />
                <PUSelect
                  change_handler={this.changeLanguage}
                  combobox_label=""
                  cb_min_width="80px"
                  select_options={[
                    { id: 1, label: "ENG" },
                    { id: 2, label: "RUS" },
                  ]}
                  cb_enabled={true}
                  IconComponent={CBArrowDropDown}
                />
              </Toolbar>
            </AppBar>
          </ElevationScroll>
          {/*<Toolbar />
          <Toolbar />*/}
          <Redirect push to="/" />
        </div>
      );
    }
  }
}

export default withTranslation()(AppBarHome)