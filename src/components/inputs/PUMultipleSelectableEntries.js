import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import DelIcon from "@material-ui/icons/HighlightOff";
import { IconButton } from "@material-ui/core";
import PUSelectListItem from "../selects/PUSelectListItem";

const CssButton = withStyles({
  root: {
    background: "#FF9B0F",
    borderRadius: 50,
    border: 0,
    color: "white",
    //height: 36,
    padding: "2px 10px 2px 10px",
    transition: "box-shadow 0.2s linear",
    margin: "5px 5px 5px 5px",
    "&:hover": {
      boxShadow: "0 0 2px 5px #FFECD2",
      background: "#FF9B0F",
    },
  },
  label: {
    textTransform: "none",
    fontSize: 18,
  },
})(Button);

const componentHolder = {
  display: "flex",
  direction: "row",
  justifyContent: "center",
};

export default class PUMultipleSelectableEntries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seq_id: 0,
      items: [],
      selectable_options: this.props.selectable_options,
    };
    this.handleChange = this.handleChange.bind(this);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.getItemValue = this.getItemValue.bind(this);
  }

  getValue() {
    let items_ = this.state.items;
    let result = [];
    for (const item_ of items_) {
      result.push({
        value: item_.value,
      });
    }
    return result;
  }

  addItem() {
    let new_id = this.state.seq_id + 1;
    let items_ = this.state.items;
    items_.push({ id: new_id, value: "" });
    this.setState({ seq_id: new_id, items: items_ });
  }

  removeItem(itemID) {
    let items_ = this.state.items;
    for (const item of items_) {
      if (item.id === itemID) {
        const index = items_.indexOf(item);
        if (index > -1) {
          items_.splice(index, 1);
          this.setState({ items: items_ });
        }
      }
    }
    console.log(this.state.items);
  }

  getItemValue(itemID) {
    let itemValue = "";
    for (const item of this.state.items) {
      if (item.id === parseInt(itemID)) {
        itemValue = item.value;
      }
    }
    return itemValue;
  }

  handleChange(itemID, itemValue) {
    console.log("itemID = " + itemID + "|countryID =" + itemValue);
    let country_ids = [];
    let items_ = this.state.items;
    let idx = 0;
    for (const item of items_) {
      if (item.id === parseInt(itemID)) {
        items_[idx].value = itemValue;
        this.setState({ items: items_ });
      }
      country_ids.push({ country_id: item.value });
      idx = idx + 1;
    }
    console.log("now items = " + JSON.stringify(this.state.items));

    this.props.paymentCountriesChange(country_ids);
  }

  render() {
    if (this.state.items.length === 0) {
      return (
        <div>
          <CssButton onClick={this.addItem}>
            {this.props.addTextFirst}
          </CssButton>
        </div>
      );
    } else
      return (
        <div>
          {this.state.items.map((result) => (
            <div style={componentHolder}>
              <PUSelectListItem
                id={"pum-select-" + result.id}
                row_id={result.id}
                change_handler={this.handleChange}
                cb_min_width="380px"
                select_options={this.state.selectable_options}
                default_value={this.getItemValue(result.id)}
                cb_enabled={true}
              />
              <IconButton
                id={"del-button-" + result.id}
                onClick={() => this.removeItem(result.id)}
              >
                <DelIcon
                  id={"del-icon-" + result.id}
                  style={{ color: "#C51F1F" }}
                />
              </IconButton>
            </div>
          ))}
          <CssButton onClick={this.addItem}>
            {this.props.addTextAnother}
          </CssButton>
        </div>
      );
  }
}

PUMultipleSelectableEntries.defaultProps = {
  paymentCountriesChange: () => {},
};
