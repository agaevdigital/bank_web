
import React from "react";
import AppBarHome from "./AppBarHome";
import HomeSectionMain from "./HomeSectionMain";
import HomeSectionPersonalAccount from "./HomeSectionPersonalAccount";
import HomeSectionBankTransfers from "./HomeSectionBankTransfers";
import HomeSectionBankCards from "./HomeSectionBankCards";
import HomeSectionMerchantAccount from "./HomeSectionMerchantAccount";
import HomeSectionInternetAcquiring from "./HomeSectionInternetAcquiring";
import HomeSectionCardEmission from "./HomeSectionCardEmission";
import HomeSectionPaymentProccessing from "./HomeSectionPaymentProcessing";
import HomeSectionPaymentTerminals from "./HomeSectionPaymentTerminals";
import HomeSectionPOS from "./HomeSectionPOS";
import HomeSectionStock from "./HomeSectionStock";
import HomeSectionPartnerProgram from "./HomeSectionPartnerProgram";
import HomeSectionDonation from "./HomeSectionDonation";
import HomeFooter from "./HomeFooter";
import { Redirect } from "react-router-dom";

export default class Home extends React.Component {
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
        <div className="App">
          <header className="App-header">
            <AppBarHome
              loginRedirectHandler={this.handleLoginRedirect}
              registerRedirectHandler={this.handleRegisterRedirect}
            />
          </header>
            <HomeSectionMain
                registerRedirectHandler={this.handleRegisterRedirect}
            />
            <HomeSectionPersonalAccount />
            <HomeSectionBankTransfers />
            <HomeSectionBankCards />
            <HomeSectionMerchantAccount />
            <HomeSectionInternetAcquiring />
            <HomeSectionCardEmission />
            <HomeSectionPaymentProccessing />
            <HomeSectionPaymentTerminals />
            <HomeSectionPOS />
            <HomeSectionStock />
            <HomeSectionPartnerProgram />
            <HomeSectionDonation />
            <HomeFooter />
        </div>);
    } else if (this.state.login_redirect && !this.state.register_redirect) {
      return <Redirect push to="/login" />;
    } else if (this.state.register_redirect && !this.state.login_redirect) {
      return <Redirect push to="/register" />;
    }
  }
}
