import React, { Component } from "react";
import PageLayout from "../layout/PageLayout";
import PUCustomInput from "components/common/PUCustomInput";
import { Typography, makeStyles, Box, withStyles } from "@material-ui/core";
import NumberFormat from "react-number-format";
import PUPrimaryButton from "components/common/PUPrimaryButton";
import { Link } from "react-router-dom";
import axios from "axios/index";
import { api_endpoint } from "settings";
import ResendSmsCodeButton from "../../buttons/ResendSmsCodeButton";
import Radium from "radium";

const styles = {
  wrap: {
    width: "100%",
    maxWidth: 330,
  },
  pageTitle: {
    fontSize: "2rem",
    textAlign: "center",
    marginBottom: 15,
  },
  ml20: {
    marginLeft: 20,
  },
  btnSend: {
    display: "block",
    margin: "auto",
  },
  btn: {
    height: 30,
    padding: "0 20px",
  },
};

function getMaskAtIndex(index) {
  const mask = " ";
  if (typeof mask === "string") {
    return mask;
  }

  return mask[index] || " ";
}

function formatWithPattern(numStr) {
  const format = "+# (###) ###-##-##";
  let hashCount = 0;
  const formattedNumberAry = format.split("");
  for (let i = 0, ln = format.length; i < ln; i++) {
    if (format[i] === "#") {
      formattedNumberAry[i] = numStr[hashCount] || getMaskAtIndex(hashCount);
      hashCount += 1;
    }
  }
  return formattedNumberAry.join("");
}

class RestorePassword extends Component {
  state = {
    num: "",
    confirmCode: null,
    code_id: null,
    user_id: null,
    createNewPass: false,
    phone_number_error: null,
    restore_password_code_error: null,
    new_password_error: null,
    new_password: '',
    repeated_password: '',
    counter: 0,
  };
  setNum = (val) => {
    this.setState({ num: val });
  };
  inputFieldChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
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

  sendRestoreSmsCode = () => {
    let phone_number = this.state.num.replace(/[^+0-9]/gim, "");
    this.setState({
      phone_number_error: null,
    });
    axios
      .post(`${api_endpoint}/restore_password_send_sms_code`, { phone_number })
      .then((res) => {
        if (res.data.status === "OK") {
          this.setState({ ...res.data.response });
          this.setState({
            counter: 60,
          });
          setTimeout(()=>{
            this.startCounter()
          }, 100)

        } else {
          this.setState({
            phone_number_error: res.data.errors[0].message,
          });
        }
      });
  };
  restoreSmsCodeCheck = () => {
    let postData = {
      user_id: this.state.user_id,
      code_id: this.state.code_id,
      code: this.state.confirmCode,
    };
    this.setState({
      restore_password_code_error: null,
    });
    axios
      .post(`${api_endpoint}/restore_password_code_check`, postData)
      .then((res) => {
        if (res.data.status === "OK") {
          this.setState({ createNewPass: true });
        } else {
          this.setState({
            restore_password_code_error: res.data.errors[0].message,
          });
        }
      });
  };

  validatePass = (pass) => {
    const digit = /\d+/; // oneOrMoreDigit
    const uCL = /[a-z]+/; // oneOrMoreUpperCaseLetter
    const lCL = /[A-Z]+/; // oneOrMoreLowerCaseLetter
    const mLength = 8;

    return (
      pass.length >= 8 && digit.test(pass) && uCL.test(pass) && lCL.test(pass)
    );
  };

  saveNewPass = () => {
    let postData = {
      user_id: +this.state.user_id,
      code_id: +this.state.code_id,
      code: +this.state.confirmCode,
      new_password: this.state.new_password,
      repeated_password: this.state.repeated_password,
    };

    if (this.state.new_password !== this.state.repeated_password) {
      this.setState({ new_password_error: "Passwords do not match" });
      return;
    }

    if (!this.validatePass(this.state.new_password)) {
      this.setState({
        new_password_error:
          "Password must contain at least 8 symbols, at least one letter in upper case, at least one letter in lower case and at least one digit",
      });
      return;
    }

    axios.post(`${api_endpoint}/restore_password`, postData).then((res) => {
      if (res.data.status === "OK") {
        this.props.history && this.props.history.push("/login");
      }
    });
  };

  render() {
    const { classes } = this.props;
    const { user_id, code_id } = this.state;

    return (
      <PageLayout>
        <div className={classes.wrap}>
          {this.state.createNewPass && (
            <>
              <Typography className={classes.pageTitle}>
                Create new password
              </Typography>
              <Typography className={classes.ml20}>New password</Typography>
              <PUCustomInput
                onChange={this.inputFieldChange}
                value={this.state.new_password}
                name="new_password"
                type="password"
              />

              {this.state.new_password_error && (
                <Typography color="error">
                  {this.state.new_password_error}
                </Typography>
              )}
              <br />
              <br />
              <Typography className={classes.ml20}>Repeat password</Typography>
              <PUCustomInput
                onChange={this.inputFieldChange}
                value={this.state.repeated_password}
                name="repeated_password"
                type="password"
              />
              <br />
              <br />
              <PUPrimaryButton
                onClick={this.saveNewPass}
                className={`${classes.btnSend} ${classes.btn}`}
              >
                Confirm
              </PUPrimaryButton>
            </>
          )}

          {!this.state.createNewPass && (
            <>
              <Typography className={classes.pageTitle}>
                Reset password
              </Typography>
              <Typography className={classes.ml20}>
                Please, input your phone number
              </Typography>
              <NumberFormat
                onChange={this.inputFieldChange}
                value={this.state.num}
                name="num"
                format={formatWithPattern}
                customInput={PUCustomInput}
              />
              {this.state.phone_number_error && (
                <Typography color="error">
                  {this.state.phone_number_error}
                </Typography>
              )}
              <br />
              <br />

              {this.state.counter===0 ? <PUPrimaryButton
                onClick={this.sendRestoreSmsCode}
                className={`${classes.btnSend} ${classes.btn}`}
              >
                Send confirmation code
              </PUPrimaryButton> : 'You can resend new code via '+this.state.counter}
              <br />
              <br />
              <br />
              <br />
              <Typography className={`${classes.ml20}`}>
                Input confirmation code from SMS
              </Typography>
              <NumberFormat
                onChange={this.inputFieldChange}
                name="confirmCode"
                value={this.state.confirmCode}
                customInput={PUCustomInput}
              />
              {this.state.restore_password_code_error && (
                <Typography color="error">
                  {this.state.restore_password_code_error}
                </Typography>
              )}
              <br />
              <br />
              <Box display="flex" justifyContent="space-between">
                <PUPrimaryButton
                  component={Link}
                  to="/login"
                  className={classes.btn}
                >
                  Cancel
                </PUPrimaryButton>
                <PUPrimaryButton
                  onClick={this.restoreSmsCodeCheck}
                  className={classes.btn}
                >
                  Reset password
                </PUPrimaryButton>
              </Box>
            </>
          )}

          {/* <PUPrimaryButton onClick={this.saveNewPass} className={classes.btn}>Save PAss</PUPrimaryButton> */}
        </div>
      </PageLayout>
    );
  }
}

export default withStyles(styles)(Radium(RestorePassword));
