import React from "react";
import { Link } from "react-router-dom";
import PUCheckBoxDefault from "../../checkboxes/PUCheckBoxDefault";
import ResendSmsCodeButton from "../../buttons/ResendSmsCodeButton";
import { api_endpoint } from "../../../settings";

import FormBaseInput from "components/form/FormBaseInput";
import { registerPhoneNumber, checkRegistrationSmsCode } from "./api";
import NumberFormat from "react-number-format";

import startKyc from "components/images/startkyc.png";
import imgDeposit from "components/images/img_deposit.png";
import accountTypeBg from "components/images/registration/accounttypebg.png";
import personIcon from "components/images/icons/personicon.png";
import businessIcon from "components/images/icons/businessicon.png";
import freelanceIcon from "components/images/icons/freelanceicon.png";

import { Box, withStyles } from "@material-ui/core";
import PageLayout from "../layout/PageLayout";
/*import SetPersonalData from "./SetPersonalData";*/

import axiosWithToken from "utils/axiosWithToken";
import OldStyleInput from "components/common/OldStyleInput";
import RoundedButton from "components/common/RoundedButton";

const wrapper = {
  display: "block",
}

const contentHolder = {
  marginTop: "10px",
  width: "380px",
};

const contentHolderMarginTop = {
  marginTop: "100px",
  width: "100%",
  margin: "0 auto",
  textAlign: "center",
};

const accountTypeHolder = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "row",
};

const headerStyle = {
  color: "#363636",
  textAlign: "center",
  fontSize: "24px",
  fontFamily: "ProximaNovaSemibold, sans-serif",
  fontWeight: "bold",
  marginTop: "0px",
  marginBottom: "35px",
};

const headerHintStyle = {
  display: "block",
  color: "#787878",
  textAlign: "center",
  fontSize: "18px",
  fontFamily: "ProximaNovaSemibold, sans-serif",
  marginBottom: "50px",
};

const spacer = {
  height: "40px",
  width: "100%",
};

const styles = {
  accountType: {
    minWidth: "200px",
    maxWidth: "200px",
    cursor: "pointer",
    height: "70px",
    border: "1px solid #cccccc",
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginLeft: "10px",
    marginRight: "10px",
    textAlign: "center",
    backgroundImage: `url(${accountTypeBg})`,
    opacity: "0.5",
    "&:hover": {
      // background: '#FF9B0F'
    },
  },
  accountTypeIcon: {
    marginRight: 10,
  },
  accountTypeActive: {
    opacity: 1,
  },
  btnNext: {
    height: 42,
    borderRadius: 30,
    textTransform: "initial",
    "& .MuiButton-endIcon": {
      marginLeft: 0,
    },
  },
  pageStageTitle: {
    fontFamily: "ProximaNovaSemibold",
    fontSize: 24,
    color: "#363636",
    textAlign: "center",
  },
  pageStageTitleDesc: {
    fontFamily: "ProximaNovaSemibold",
    fontSize: 18,
    color: "#787878",
  },
  pageStageImg: {
    maxWidth: "500px",
    display: "block",
    margin: "0 auto",
  },
  fieldLabel: {
    display: "block",
    color: "#363636",
    marginBottom: 5,
    textAlign: "center",
    fontSize: "16px",
    fontFamily: "ProximaNovaSemibold, sans-serif",
    opacity: "0.8",
  },
};

const REGISTER_STAGES = {
  CHOOSE_ACCOUNT_TYPE: 4,
  YOUR_PERSONAL_DATA: 5,
  TOP_UP_ACCOUNT: 6,
  START_KYC: 7,
};

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      registerStage: 0,
      sms_code_check_redirect: false,
      dashboard_redirect: false,
      login_redirect: false,
      register_redirect: false,
      licenseAccepted: false,
      accountType: "",
      selectedCountry: null,
      phoneNum: "",
      registrationSmsCode: "",
      sendingSMS: false,
      checkingCode: false,
      counter: 60,
    };
  }

  goToKYC = () => {
    // window.location.replace('/dashboard');
    sessionStorage.setItem("goToKYC", "1");
    this.setState({ dashboard_redirect: true });
  };

  accountTypeHandler = (accType) => {
    this.setState({
      accountType: accType,
    });
    sessionStorage.setItem("account_type", accType);
  };

  changeScreen = (to) => {
    this.setState({
      registerStage: to,
    });
  };

  handleLicenseAccept = () => {
    this.setState({ licenseAccepted: !this.state.licenseAccepted });
  };

  handleLoginRedirect = () => {
    this.setState({ login_redirect: true });
  };

  handleRegisterRedirect = () => {
    this.setState({ register_redirect: true });
  };

  topUpNotNowHandler = () => {
    this.setState({ registerStage: 7 });
  };

  finishRegister = (resp) => {
    if (this.state.accountType === "1") {
      this.setState({ registerStage: 7 });
    } else {
      // templorary for demo purposes
      // this.setState({registerStage: 6});
      this.setState({ registerStage: 7 });
    }
  };

  handleRegisterResponse = async () => {
    this.setState({
      inputPhoneNumError: null,
      sendingSMS: true,
      counter: 60,
    });


    let phoneNum = `+${this.state.phoneNum.replace(/[^0-9]/g, "")}`;
    const resp = await registerPhoneNumber(phoneNum);
    if (resp.status === "OK") {
      sessionStorage.setItem("user_id", resp.response.user_id);
      sessionStorage.setItem("phone_number", resp.response.phone_number);
      sessionStorage.setItem("id_sms_code", resp.response.id_sms_code);
      sessionStorage.setItem("token", resp.response.token);
      sessionStorage.setItem("key", resp.response.key);
      this.setState({ registerStage: 1 });
      setTimeout(()=>{
        this.startCounter()
      }, 100)
    } else {
      this.setState({
        inputPhoneNumError: resp.message ? resp.message : "Incorrect number",
        sendingSMS: false,
      });

      //   if (resp.status === "FAIL") {
      //     for (const error of resp.errors) {
      //       alert(error.message);
      //       //paint text field in red and show error hints
      //     }
      //   } else {
      //     alert("Server error!");
      //   }
    }
  };

  startCounter = () => {
    let newCounter = this.state.counter-1;

    if(newCounter >= 0) {
      setTimeout(()=>{
        this.setState({
          counter: newCounter,
        });
        this.startCounter()
      }, 1000)
    }

  }

  handleSmsCodeCheckResponse = async () => {
    this.setState({
      inputCodeCheckError: null,
      checkingCode: true,

    });
    const resp = await checkRegistrationSmsCode(this.state.registrationSmsCode);
    if (resp.status === "OK") {
      sessionStorage.setItem("token", resp.response.token);
      sessionStorage.setItem("key", resp.response.key);
      this.setState({ registerStage: 2 });
    } else {
      if (resp.status === "FAIL") {
        sessionStorage.setItem("token", resp.token);
        sessionStorage.setItem("key", resp.key);
      }
      this.setState({
        inputCodeCheckError: resp.errors
          ? resp.errors[0].message
          : "Incorrect SMS code!",
        checkingCode: false,
      });
    }
  };

  setEmail = () => {
    let setEmailData = {
      id: sessionStorage.getItem("user_id"),
      email: this.state.email,
    };

    axiosWithToken
      .post(api_endpoint + "/set_email", setEmailData)
      .then((response) => {
        this.handleSetEmailResponse(response.data);
      });
  };

  handleSetEmailResponse = (resp) => {
    if (resp.status === "OK") {
      this.setState({ registerStage: 4 });
    } else {
      if (resp.status === "FAIL") {
        for (const error of resp.errors) {
          alert(error.message);
          //paint text field in red and show error hints
        }
      } else {
        alert("Server error!");
      }
    }
  };

  validateField = (fName, fValue) => {
    const validator = {
      //phoneNum: () => /^\+?\d+$/.test(fValue),
      registrationSmsCode: () => /^\d{0,}$/.test(fValue),
    };

    if (!validator[fName]) {
      return true;
    }
    return validator[fName]();
  };

  inputChangeHandler = (e) => {
    if (
      e.target.value.length &&
      !this.validateField(e.target.name, e.target.value)
    ) {
      return;
    }

    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  onInputChange = (e) => {
    //let errorFieldName = `${e.target.name}Error`;

    // if (this.state[errorFieldName]) {
    //   updatedState[errorFieldName] = false;
    // }

    const updatedState = {
      [e.target.name]: e.target.value,
    };

    this.setState(updatedState);
  };

  setPassword = () => {
    let setPasswordData = {
      id: sessionStorage.getItem("user_id"),
      password: this.state.password,
    };

    axiosWithToken.post("set_password", setPasswordData).then((response) => {
      this.handleSetPasswordResponse(response.data);
    });
  };

  handleSetPasswordResponse = (resp) => {
    if (resp.status === "OK") {
      this.setState({ registerStage: 3 });
    } else {
      if (resp.status === "FAIL") {
        for (const error of resp.errors) {
          alert(error.message);
          //paint text field in red and show error hints
        }
      } else {
        alert("Server error!");
      }
    }
  };

  render() {
    const { classes } = this.props;

    // else if (
    //   this.state.sms_code_check_redirect &&
    //   !this.state.dashboard_redirect
    // ) {
    //   return <Redirect push to="/login_enter_sms_code" />;
    // } else if (
    //   this.state.dashboard_redirect &&
    //   !this.state.sms_code_check_redirect
    // ) {
    //   return <Redirect push to="/dashboard" />;
    // } else if (this.state.login_redirect) {
    //   return <Redirect push to="/login" />;
    // }
    // break;

    switch (this.state.registerStage) {
      case 0: {
        return (
          <PageLayout style={wrapper}>
            <Box>
              <p style={headerStyle}>
                Get started with PAYSUNION in a few seconds.
                <span style={headerHintStyle}>
                  We'll send you a message with a code to approve your phone.
                </span>
              </p>
              <div style={contentHolderMarginTop}>
                <span className={classes.fieldLabel}>Phone number</span>
                <NumberFormat
                  onChange={this.inputChangeHandler}
                  value={this.state.phoneNum}
                  name="phoneNum"
                  format="+# (###) ###-##-##"
                  customInput={FormBaseInput}
                  error={this.state.inputPhoneNumError}
                />
                <div style={spacer} />
                <div style={{ textAlign: "center" }}>
                  <PUCheckBoxDefault
                    label="I have read the terms of use of the service, privacy policy and I agree"
                    changeHandler={this.handleLicenseAccept}
                  />
                  <div style={spacer} />
                  <RoundedButton
                    width={180}
                    onClick={this.handleRegisterResponse}
                    disabled={
                      !this.state.licenseAccepted || this.state.sendingSMS
                    }
                    loading={this.state.sendingSMS}
                  >
                    Sign Up
                  </RoundedButton>
                </div>
              </div>
            </Box>
          </PageLayout>
        );
      }

      case 1: {
        return (
          <PageLayout>
            <Box>
              <p style={headerStyle}>
                Input SMS code
                <span style={headerHintStyle}>
                  We send you a message with a code to approve your phone.
                </span>
              </p>
              <div style={contentHolderMarginTop}>
                <span className={classes.fieldLabel}>Input SMS code</span>
                <FormBaseInput
                  value={this.state.registrationSmsCode}
                  onChange={this.inputChangeHandler}
                  name="registrationSmsCode"
                  inputProps={{
                    maxLength: 10,
                  }}
                  error={this.state.inputCodeCheckError}
                />
                <div style={spacer} />
                <div style={{ textAlign: "center" }}>
                  <RoundedButton
                    // width={180}
                    onClick={this.handleSmsCodeCheckResponse}
                    disabled={this.state.checkingCode}
                    loading={this.state.checkingCode}
                  >
                    Check SMS code
                  </RoundedButton>
                  {this.state.counter===0 ? <ResendSmsCodeButton resendSMS={this.handleRegisterResponse} /> : 'You can resend new code via '+this.state.counter}

                </div>
              </div>
            </Box>
          </PageLayout>
        );
      }

      case 2: {
        return (
          <PageLayout>
            <div style={contentHolderMarginTop}>
              <p style={headerStyle}>Set password</p>
              <span className={classes.fieldLabel}>Input password</span>
              <OldStyleInput
                type="password"
                name="password"
                onChange={this.onInputChange}
              />
              <br />
              <span className={classes.fieldLabel}>Repeat password</span>
              <OldStyleInput
                type="password"
                name="password_repeat"
                onChange={this.onInputChange}
              />
              <div style={spacer} />
              <RoundedButton
                // width={180}
                onClick={this.setPassword}
                // disabled={this.state.checkingCode}
                // loading={this.state.checkingCode}
              >
                Set password
              </RoundedButton>
            </div>
          </PageLayout>
        );
      }

      case 3: {
        return (
          <PageLayout>
            <div style={contentHolderMarginTop}>
              <p style={headerStyle}>Input email</p>
              <OldStyleInput
                type="text"
                name="email"
                onChange={this.onInputChange}
              />
              <div style={spacer} />

              <RoundedButton
                // width={180}
                onClick={this.setEmail}
                // disabled={this.state.checkingCode}
                // loading={this.state.checkingCode}
              >
                Save email
              </RoundedButton>
            </div>
          </PageLayout>
        );
      }

      case REGISTER_STAGES.CHOOSE_ACCOUNT_TYPE: {
        return (
          <PageLayout>
            <div style={contentHolderMarginTop}>
              <p style={headerStyle}>Choose your account type</p>
              <div style={accountTypeHolder}>
                <div
                  className={`${classes.accountType} ${
                    this.state.accountType === 1
                      ? classes.accountTypeActive
                      : ""
                  }`}
                  onClick={() => this.accountTypeHandler(1)}
                >
                  <img alt="" src={personIcon} className={classes.accountTypeIcon} />
                  <span>Personal</span>
                </div>
                <div
                  className={`${classes.accountType} ${
                    this.state.accountType === 2
                      ? classes.accountTypeActive
                      : ""
                  }`}
                  onClick={() => this.accountTypeHandler(2)}
                >
                  <img alt="" src={businessIcon} className={classes.accountTypeIcon} />
                  <span>Business</span>
                </div>
                <div
                  className={`${classes.accountType} ${
                    this.state.accountType === 3
                      ? classes.accountTypeActive
                      : ""
                  }`}
                  onClick={() => this.accountTypeHandler(3)}
                >
                  <img
                    alt=""
                    src={freelanceIcon}
                    className={classes.accountTypeIcon}
                  />
                  <span>Freelance</span>
                </div>
              </div>
              <Box mt={2} display="flex" justifyContent="center">
                <RoundedButton
                  // width={180}
                  onClick={() =>
                    this.changeScreen(REGISTER_STAGES.YOUR_PERSONAL_DATA)
                  }
                  // disabled={this.state.checkingCode}
                  // loading={this.state.checkingCode}
                >
                  Set account type
                </RoundedButton>
              </Box>
              <div style={spacer} />
            </div>
          </PageLayout>
        );
      }

/*      case REGISTER_STAGES.YOUR_PERSONAL_DATA: {
        return (
          <PageLayout>
            <div style={contentHolder}>
              <p style={headerStyle}>Your personal data</p>
              <SetPersonalData finishRegister={this.finishRegister} />
            </div>
          </PageLayout>
        );
      }*/

      case REGISTER_STAGES.TOP_UP_ACCOUNT: {
        return (
          <PageLayout>
            <div>
              <img alt="" src={imgDeposit} className={classes.pageStageImg} />
              <p className={classes.pageStageTitle}>
                Top up your account for 10 EUR or more
              </p>
              <p className={classes.pageStageTitleDesc}>
                To activate your account you need to top up it. You'll be able
                to spend or withdraw this money.
              </p>

              <div style={spacer} />

              <div style={accountTypeHolder}>
                <RoundedButton>Not now</RoundedButton>
                <RoundedButton>Top up</RoundedButton>
              </div>
            </div>
          </PageLayout>
        );
      }

      case REGISTER_STAGES.START_KYC: {
        return (
          <PageLayout>
            <div>
              <img alt="" src={startKyc} className={classes.pageStageImg} />
              <p className={classes.pageStageTitle}>
                To activate your account, let's quickly confirm that you are
                really {sessionStorage.getItem("fistName")}
              </p>
              <div style={spacer} />
              <div style={accountTypeHolder}>
                <RoundedButton>
                  <Link to="/dashboard">Not now</Link>
                </RoundedButton>
                <RoundedButton>
                  <Link
                    to={{
                      pathname: "/dashboard/kyc",
                      state: { accountType: this.state.accountType },
                    }}
                  >
                    Verify identity
                  </Link>
                </RoundedButton>
              </div>
            </div>
          </PageLayout>
        );
      }
      default: {
        return <div />;
      }
    }
  }
}

export default withStyles(styles)(Register);
