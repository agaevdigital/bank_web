import React from "react";
import AppBarHome from "./AppBarHome";
import HomeFooter from "./HomeFooter";
import { Redirect } from "react-router-dom";
import IcoUser from "../../images/user.png";
import "../../css/document-links.css";

import PUComplaint_Handling from "../../documents/PAYSUNION_Complaint_Handling_Policy.pdf";
import PUCookie_Notice from "../../documents/PAYSUNION_COOKIE_NOTICE.pdf";
import PUPayment_Account_Terms from "../../documents/PAYSUNION_Payment_Account_Terms_and_Conditions.pdf";
import PUPrivacy_Notice from "../../documents/PAYSUNION_PRIVACY_NOTICE.pdf";
import PUWebsite_Terms from "../../documents/PAYSUNION_Website_Terms_of_Use.pdf";
import {containerStyle, sectionPageStyle} from "./styles/PublicStyle";
import Radium from "radium";

const headerContent = {
  maxWidth: "800px",
};

const componentWrapper = {
  display: "flex",
  flexDirection: "column",
};

const spacer = {
  height: "20px",
  width: "100%",
};

const halfSpacer = {
  height: "10px",
  width: "100%",
};

const textHeaderStyle = {
  paddingBottom: "0",
  paddingTop: "0",
  color: "#363636",
  fontSize: "2.0rem",
  fontFamily: "ProximaNova, sans-serif",
  fontWeight: "700 !important",
  marginTop: "0.9rem",
  marginBottom: "0.5rem",
  lineHeight: "32px",
};

const textSubHeaderStyle = {
  paddingBottom: "0",
  paddingTop: "0",
  color: "#363636",
  fontSize: "1.25rem",
  fontFamily: "ProximaNova, sans-serif",
  fontWeight: "700",
  marginTop: "1.5rem",
  marginBottom: "0.8rem",
};

const textSubSubHeaderStyle = {
  paddingBottom: "0",
  paddingTop: "0",
  color: "#363636",
  fontSize: "1.0rem",
  fontFamily: "ProximaNova, sans-serif",
  fontWeight: "bold",
  marginTop: "1.7rem",
  marginBottom: "0.8rem",
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

const divLink = {
  marginTop: 0,
  marginBottom: 0,
  display: "grid",
};

const textSubNormalStyle = {
  opacity: "1",
  // color: "#363636",
  color: "black",
  fontSize: "14px",
  fontFamily: "ProximaNova, sans-serif",
  fontWeight: "400 !important",
  marginTop: 0,
  marginBottom: 0,
  lineHeight: "1.5",
};

const textSubSubNormalStyle = {
  opacity: "1",
  // color: "#363636",
  color: "black",
  fontSize: "14px",
  fontFamily: "ProximaNova, sans-serif",
  fontWeight: "400 !important",
  marginTop: 0,
  marginBottom: 0,
  marginLeft: 20,
  lineHeight: "1.5",
};

const listTextStyle = {
  opacity: "1",
  // color: "#363636",
  color: "black",
  fontSize: "14px",
  fontFamily: "ProximaNova, sans-serif",
  fontWeight: "700 !important",
  marginTop: 0,
  marginLeft: 4,
  textAlign: "left",
  lineHeight: "1.5",
};

const divHolderStyle = {
  display: "flex",
  justifyContent: "flex-start",
  flexWrap: "wrap",
  "@media (max-width: 500px)": {
    flexDirection: "column",
    alignItems: "center",
  },
};

const divListItem = {
  display: "list-item",
  justifyContent: "flex-start",
  marginLeft: 40,
  marginBottom: -10,
  color: "#ff9b0f",
};

const divItemLeft = {
  marginRight: 30,
  marginTop: 20,
  marginLeft: 10,
};

const icoSize = {
  maxWidth: "150px",
  maxHeight: "150px",
};

class StaticPageCompany extends React.Component {
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
      3700
    );
  }

  handleLoginRedirect() {
    this.setState({ login_redirect: true });
  }

  handleRegisterRedirect() {
    this.setState({ register_redirect: true });
  }

  render() {
    if (!this.state.login_redirect && !this.state.register_redirect) {
      return (
        <div>
          <div className="App" style={componentWrapper}>
            <header className="App-header">
              <AppBarHome
                loginRedirectHandler={this.handleLoginRedirect}
                registerRedirectHandler={this.handleRegisterRedirect}
              />
            </header>

            <div style={sectionPageStyle}>
              <div style={containerStyle}>
              <div style={headerContent}>
                <div style={divHolderStyle}>
                  <h1 style={textHeaderStyle}>Welcome to PAYSUNION</h1>
                </div>
                <p style={textNormalStyle}>
                  (project company PAYSUNI LIMITED) - the world-wide reliable
                  provider of payment solutions. Transfer money online in the
                  most advanced and secure way.
                </p>
                <p style={textNormalStyle}>
                  We’re here for those who never stop moving forwards. Who
                  continue to search for new ideas and better experience in
                  everything they do.
                </p>
                <p style={textNormalStyle}>
                  Because today’s hyper-connected world deserves a financial
                  partner just as progressive. One that adapts to your needs,
                  gives you control and constantly pushes you into new exciting
                  spaces.
                </p>
                <p style={textNormalStyle}>
                  Global spending and transfers with interbank rate. Whether
                  you’re running a business or running out for bread, PAYSUNION
                  is building a global finance service to suit your lifestyle.
                </p>
                <p style={textSubSubHeaderStyle}>
                  Our main areas are the provision of Banking services:
                </p>
                <div style={divListItem}>
                  <p style={listTextStyle}>
                    International bank transfers SWIFT and SEPA
                  </p>
                </div>
                <div style={divListItem}>
                  <p style={listTextStyle}>
                    Acquiring of VISA and MASTERCARD bank cards
                  </p>
                </div>
                <div style={divListItem}>
                  <p style={listTextStyle}>
                    Payment processing for payment systems and banks
                  </p>
                </div>
                <div style={divListItem}>
                  <p style={listTextStyle}>
                    Issue of VISA and MASTERCARD bank cards
                  </p>
                </div>
                <div style={divListItem}>
                  <p style={listTextStyle}>
                    ATM and POS terminals for receiving fiat money
                  </p>
                </div>
                <div style={spacer} />
                <p style={textNormalStyle}>
                  Welcome to a world of better money management.
                </p>
                <p style={textNormalStyle}>Welcome to PAYSUNION.</p>
                <div style={spacer} />
                <p style={textNormalStyle}>Our company was established under the laws of My Best Country.</p>
                <p style={textSubHeaderStyle}>Our address:</p>


                <p style={textSubNormalStyle}>Registration Number: AA111222</p>
                <p style={textSubNormalStyle}>Name Of the Company: PAYSUNI LIMITED</p>
                <p style={textSubNormalStyle}>Registered Office: My Best Address</p>

                {/* <p style={textSubNormalStyle}>PAYSUNI Limited</p>
                <p style={textSubNormalStyle}>
                  13 Spyrou Kyprianou Ave, M2VG+58 Limassol, Cyprus
                </p> */}
                <div style={spacer} />
                <p style={textSubHeaderStyle}>Our command:</p>
                <div style={divHolderStyle}>
                  <div style={divItemLeft}>
                    <img src={IcoUser} alt="logo" style={icoSize} />
                    <div style={spacer} />
                    <p style={textSubSubNormalStyle}>John Doe</p>
                    <p style={textSubSubNormalStyle}>Executive Director</p>
                    {/* <p style={textSubSubNormalStyle}>
                                            Our best sales man
                                        </p>
                                        <p style={textSubSubNormalStyle}>
                                            Our best developer
                                        </p> */}
                  </div>
                  <div style={divItemLeft}>
                    <img src={IcoUser} alt="logo" style={icoSize} />
                    <div style={spacer} />
                    <p style={textSubSubNormalStyle}>
                      John Doe
                    </p>
                    <p style={textSubSubNormalStyle}>Executive Director</p>
                    {/* <p style={textSubSubNormalStyle}>
                                            Our best sales man
                                        </p>
                                        <p style={textSubSubNormalStyle}>
                                            Our best developer
                                        </p> */}
                  </div>
                  <div style={divItemLeft}>
                    <img src={IcoUser} alt="logo" style={icoSize} />
                    <div style={spacer} />
                    <p style={textSubSubNormalStyle}>John Doe</p>
                    <p style={textSubSubNormalStyle}>Chief Technical officer</p>
                    {/* <p style={textSubSubNormalStyle}>Our best sales man</p>
                    <p style={textSubSubNormalStyle}>Our best developer</p> */}
                  </div>
                  <div style={divItemLeft}>
                    <img src={IcoUser} alt="logo" style={icoSize} />
                    <div style={spacer} />
                    <p style={textSubSubNormalStyle}>John Doe</p>
                    <p style={textSubSubNormalStyle}>Chief Relationship Officer</p>
                    {/* <p style={textSubSubNormalStyle}>Our best sales man</p>
                    <p style={textSubSubNormalStyle}>Our best developer</p> */}
                  </div>
                </div>
                <div style={spacer} />
                <div style={spacer} />
                <p style={textSubHeaderStyle}>Contact us:</p>
                <p style={textNormalStyle}>
                  We are happy to answer any questions you may have, just send
                  us email at support@paysuni.com.
                </p>
                <p style={textNormalStyle}>
                  We are happy to new business partners, please contact us via
                  email fino@paysuni.com
                </p>
                <div style={spacer} />
                <div style={halfSpacer} />
                <p style={textSubHeaderStyle}>Documents:</p>
                <div style={divLink}>
                  <a href={PUPayment_Account_Terms} className="document_link">
                    PAYSUNION Payment Account Terms and Conditions
                  </a>
                  <a href={PUWebsite_Terms} className="document_link">
                    PAYSUNION Website Terms of Use
                  </a>
                  <a href={PUComplaint_Handling} className="document_link">
                    PAYSUNION Complaint Handling Policy
                  </a>
                  <a href={PUPrivacy_Notice} className="document_link">
                    PAYSUNION Privacy Notice
                  </a>
                  <a href={PUCookie_Notice} className="document_link">
                    PAYSUNION Cookies Notice
                  </a>
                </div>
              </div>
            </div>
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


export default Radium(StaticPageCompany);