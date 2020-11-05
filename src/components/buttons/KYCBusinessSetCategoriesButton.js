import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import RightIcon from "@material-ui/icons/ChevronRight";
import { api_port, api_endpoint } from "../../settings";
import axios from "axios/index";

const BtnBusinessKYCCategories = withStyles({
  root: {
    background: "#FF9B0F",
    borderRadius: 50,
    border: 0,
    color: "white",
    height: 50,
    width: 320,
    padding: "0 20px",
    transition: "box-shadow 0.2s linear",
    margin: "5px 5px 5px 5px",
    "&:hover": {
      boxShadow: "0 0 2px 5px #FFECD2",
      background: "#FF9B0F",
    },
  },
  label: {
    textTransform: "none",
    fontSize: "16px",
    fontWeight: "700 !important",
  },
})(Button);

export default class KYCBusinessSetCategoriesButton extends React.Component {
  constructor(props) {
    super(props);
    this.setBusinessCategoriesForKYC = this.setBusinessCategoriesForKYC.bind(
      this
    );
  }

  setBusinessCategoriesForKYC() {
    let customers = this.props.your_customers ? this.props.your_customers : this.props.cblCustomers.current.getValue();
    let ways_to_sell = this.props.your_services ? this.props.your_services : this.props.cblSell.current.getValue();


    let web_sites = this.props.pumeSites.current
      ? this.props.pumeSites.current.getValue()
      : "";
    let web_urls = [];
    for (const web_site of web_sites) {
      web_urls.push({ url: web_site.value });
    }



    let setBaseInfoData = {
      user_id: sessionStorage.getItem("user_id"),
      business_category: this.props.cat,
      other_business_category: this.props.tfOtherCat.current
        ? this.props.tfOtherCat.current.getValue()
        : "",
      business_subcategory: this.props.subcat,
      other_business_subcategory: this.props.tfOtherSubcat.current
        ? this.props.tfOtherSubcat.current.getValue()
        : "",
      customers: customers,
      other_customers: customers.other_value,
      ways_to_sell: ways_to_sell,
      other_way_to_sell: ways_to_sell.other_value,
      web_sites: web_urls,
      token: sessionStorage.getItem("token"),
      key: sessionStorage.getItem("key"),
    };

    axios
      .post(
        api_endpoint+
          "/set_business_categories",
        setBaseInfoData
      )
      .then((resp) => {
        if (resp.data.status === "OK") {
          sessionStorage.setItem("token", resp.data.response.token);
          sessionStorage.setItem("key", resp.data.response.key);
        } else {
          console.log(resp.data.response);
        }
        this.props.setBusinessCatHandler(resp.data);
      });
  }

  render() {
    return (
      <div>
        <BtnBusinessKYCCategories
          endIcon={<RightIcon />}
          onClick={this.setBusinessCategoriesForKYC}
        >
          Next
        </BtnBusinessKYCCategories>
      </div>
    );
  }
}
