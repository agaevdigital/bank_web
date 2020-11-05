import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import IconTelegram from "../../components/images/icons/ico_telegram.png";
import { api_port, api_endpoint } from "../../settings";
import axios from "axios/index";

const BtnCreateTemplateSaveSelect = withStyles({
  root: {
    background: "#FF9B0F",
    borderRadius: 50,
    border: 0,
    color: "white",
    height: 36,
    paddingLeft: "22px",
    paddingRight: "13px",
    transition: "box-shadow 0.2s linear",
    marginLeft: "10px",
    marginTop: "5px",
    marginBottom: "5px",
    marginRight: "0px",
    "&:hover": {
      boxShadow: "0 0 2px 5px #FFECD2",
      background: "#FF9B0F",
    },
  },
  label: {
    textTransform: "none",
  },
})(Button);

export default class TransfersWithdrawCreateTemplateSaveSelect extends React.Component {
  constructor(props) {
    super(props);
    this.templateSaveSelect = this.templateSaveSelect.bind(this);
  }

  templateSaveSelect() {
    let usAccNumber = "";
    let usAbaRouting = "";
    let usReceivingAccType = "";

    let recipientName = "";
    let receivingCompanyName = "";
    let receivingCompanyRegNum = "";

    if (this.props.sUsAccountNumber.current === null) {
      usAccNumber = "";
    } else {
      usAccNumber = this.props.sUsAccountNumber.current.getValue();
    }

    if (this.props.sUsAbaRouting.current === null) {
      usAbaRouting = "";
    } else {
      usAbaRouting = this.props.sUsAbaRouting.current.getValue();
    }

    if (this.props.cbUsAccountType.current === null) {
      usReceivingAccType = "";
    } else {
      usReceivingAccType = this.props.cbUsAccountType.current.getValue();
    }

    if (this.props.sRecipientName.current === null) {
      recipientName = "";
    } else {
      recipientName = this.props.sRecipientName.current.getValue();
    }

    if (this.props.sRecipientCompany.current === null) {
      receivingCompanyName = "";
    } else {
      receivingCompanyName = this.props.sRecipientCompany.current.getValue();
    }

    if (this.props.sRecipientCompanyRegNum.current === null) {
      receivingCompanyRegNum = "";
    } else {
      receivingCompanyRegNum = this.props.sRecipientCompanyRegNum.current.getValue();
    }

    let recipientData = {
      user_id: sessionStorage.getItem("user_id"),
      token: sessionStorage.getItem("token"),
      key: sessionStorage.getItem("key"),
      recipient_type: this.props.recipient_type,
      iban: this.props.sIban.current.getValue(),
      bank_name: this.props.sBankName.current.getValue(),
      bank_country: this.props.cbBankCountry.current.getValue(),
      swift: this.props.sSwift.current.getValue(),
      bic: this.props.sBic.current.getValue(),
      has_swift_code: this.props.has_swift_code,
      us_account_number: usAccNumber,
      us_aba_routing: usAbaRouting,
      us_receiving_account_type: usReceivingAccType,
      recipient_name: recipientName,
      recipient_country: this.props.cbRecipientCountry.current.getValue(),
      recipient_address: this.props.sRecipientAddress.current.getValue(),
      company_name: receivingCompanyName,
      recipient_company_reg_num: receivingCompanyRegNum,
    };

    axios
      .post(
        api_endpoint + "/recipient",
        recipientData
      )
      .then((resp) => {
        if (resp.data.status === "OK") {
          sessionStorage.setItem("token", resp.data.response.token);
          sessionStorage.setItem("key", resp.data.response.key);
          let recipientId = resp.data.response.new_id;
          this.props.saveSelectTemplateHandler(recipientId);
        } else {
        }
      });
  }

  render() {
    return (
      <div>
        <BtnCreateTemplateSaveSelect onClick={this.templateSaveSelect}>
          Save and select
          <img alt="" src={IconTelegram} style={{ marginLeft: 8 }} />
        </BtnCreateTemplateSaveSelect>
      </div>
    );
  }
}
