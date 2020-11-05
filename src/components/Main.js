import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import LoginEnterSmsCode from "./pages/login/LoginEnterSmsCode";
import RegisterEnterSmsCode from "./pages/register/RegisterEnterSmsCode";
/*import Dashboard from "./pages/dashboard/Dashboard";*/
import Register from "./pages/register/Register";
import StaticPagePersonalAccount from "./pages/home/StaticPagePersonalAccount";
import StaticPageBankTransfers from "./pages/home/StaticPageBankTransfers";
import StaticPagePersonalBankCards from "./pages/home/StaticPagePersonalBankCards";
import StaticPageMerchantAccount from "./pages/home/StaticPageMerchantAccount";
import StaticPageInternetAcquiring from "./pages/home/StaticPageInternetAcquiring";
import StaticPageCardsEmission from "./pages/home/StaticPageCardsEmission";
import StaticPagePaymentProcessing from "./pages/home/StaticPagePaymentProcessing";
import StaticPagePaymentsTerminal from "./pages/home/StaticPagePaymentsTerminal";
import StaticPagePOS from "./pages/home/StaticPagePOS";
import StaticPageStock from "./pages/home/StaticPageStock";
import StaticPagePartnerPrograms from "./pages/home/StaticPagePartnerPrograms";
import StaticPageDonations from "./pages/home/StaticPageDonations";
import StaticPageCompany from "./pages/home/StaticPageCompany";
import StaticPageHelp from "./pages/home/StaticPageHelp";
import StaticPagePricing from "./pages/home/StaticPagePricing";
import axiosWithToken from '../utils/axiosWithToken';
/*import Transfers from './pages/transfers/Transfers';*/
import axios from 'axios/index'
import RestorePassword from './pages/login/RestorePassword';
import ErrorComponent from "./pages/error/ErrorComponent";

window.axiosWithToken  = axiosWithToken;
window.axios  = axios;



const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/login/restore" component={RestorePassword} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/login_enter_sms_code" component={LoginEnterSmsCode} />
    <Route
      exact
      path="/register_enter_sms_code"
      component={RegisterEnterSmsCode}
    />

    <Route
      exact
      path="/personal_account"
      component={StaticPagePersonalAccount}
    />
    <Route exact path="/bank_transfers" component={StaticPageBankTransfers} />
    <Route
      exact
      path="/personal_bank_cards"
      component={StaticPagePersonalBankCards}
    />
    <Route
      exact
      path="/merchant_account"
      component={StaticPageMerchantAccount}
    />
    <Route
      exact
      path="/internet_acquiring"
      component={StaticPageInternetAcquiring}
    />
    <Route exact path="/cards_emission" component={StaticPageCardsEmission} />
    <Route
      exact
      path="/payment_processing"
      component={StaticPagePaymentProcessing}
    />
    <Route
      exact
      path="/payments_terminal"
      component={StaticPagePaymentsTerminal}
    />
    <Route exact path="/pos" component={StaticPagePOS} />
    <Route exact path="/stock" component={StaticPageStock} />
    <Route
      exact
      path="/partner_programs"
      component={StaticPagePartnerPrograms}
    />
    <Route exact path="/donations" component={StaticPageDonations} />

    <Route exact path="/company" component={StaticPageCompany} />
    <Route exact path="/help" component={StaticPageHelp} />
    <Route exact path="/pricing" component={StaticPagePricing} />

    <Route path='*' exact={true} component={ErrorComponent} />
    {/*<Route path="/dashboard" component={Dashboard} />*/}
  </Switch>
);

export default Main;
