import React from "react";
import TextField from "@material-ui/core/TextField";
import InputBase from "@material-ui/core/InputBase";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import DelIcon from "@material-ui/icons/HighlightOff";
import AddIcon from "@material-ui/icons/AddCircleOutline";
import {IconButton} from "@material-ui/core";

const CssTextField = withStyles({
  root: {
    width: "100%",
    marginTop: "4px",
    marginBottom: "4px",
    "& label.Mui-focused": {
      color: "#838989",
      fontFamily: "ProximaNova, sans-serif",
    },
    "& label": {
      color: "#838989",
      fontFamily: "ProximaNova, sans-serif",
    },
    "& input": {
      color: "#838989",
      fontFamily: "ProximaNova, sans-serif",
      paddingLeft: "30px",
      paddingRight: "50px",
      paddingTop: "10px",
      paddingBottom: "10px",
      backgroundColor: "#ebf7f8",
      borderRadius: "30px",
      "&.Mui-disabled": {
        backgroundColor: "#E8E8E8",
      },
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "transparent",
        borderRadius: "50px",
      },
      "&:hover fieldset": {
        borderColor: "#bfdeff",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#bfdeff",
      },
      "&.Mui-disabled fieldset": {
        //backgroundColor: '#E8E8E8',
        borderColor: "#E8E8E8",
        //borderColor: '#E8E8E8',
      },
      // ':hover fieldset &.Mui-disabled': {
      //     //backgroundColor: '#E8E8E8',
      //     borderColor: '#E8E8E8',
      // },
    },
  },
})(InputBase);

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
  position: "relative",
  justifyContent: "center",
};

const addSiteButton = {
  fontSize: "18px",
  fontFamily: "ProximaNovaSemibold, sans-serif",
  margin: "0 auto",
  display: "flex",
  textTransform: 'none'
};

const hintStyle = {
  textAlign: "left",
  fontSize: "18px",
  fontFamily: "ProximaNovaSemibold, sans-serif",
  marginTop: "20px",
  marginBottom: "0",
  marginLeft: "30px",
  color: '#363636',  
};

export default class PUMultipleEntries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seq_id: 0,
      items: [
        {
          id: 0,
          value: "",
        },
      ],
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

  handleChange(event) {
    let componentId = event.target.id;
    let idLength = componentId.length - 19;
    let recordID = componentId.substr(componentId.length - idLength);
    let items_ = this.state.items;
    let idx = 0;
    for (const item of items_) {
      if (item.id === parseInt(recordID)) {
        items_[idx].value = event.target.value;
        this.setState({ items: items_ });
      }
      idx = idx + 1;
    }
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
          {this.state.items.map((result, index) => (
            <div key={`${index}`}>
              <p style={hintStyle}>Your business website(s) (optionally)</p>
              <div style={componentHolder}>
                <CssTextField
                  required={this.props.required}
                  id={"pum-outlined-input-" + result.id}
                  label={this.props.label}
                  defaultValue={this.props.default_value}
                  margin={this.props.margin}
                  variant={this.props.variant}
                  type={this.props.type}
                  style={{
                    minWidth: this.props.minWidth,
                    maxWidth: this.props.maxWidth,
                  }}
                  onChange={this.handleChange}
                  value={this.getItemValue(result.id)}
                  disabled={false}
                />
                <IconButton
                  onClick={() => this.removeItem(result.id)}
                  style={{
                    right: "0",
                    position: "absolute",
                  }}
                >
                  <DelIcon style={{ color: "#ff9b0f" }} />
                </IconButton>
              </div>
            </div>
          ))}
          {/* <CssButton onClick={this.addItem}>
                    <IconButton
                            >
                            <AddIcon style = {{color: "#ff9b0f"}} />
                    </IconButton>
                        {this.props.addTextAnother}
                    </CssButton> */}

          <Button
            style={addSiteButton}
            onClick={this.addItem}
            // variant="contained"
            // color="secondary"
            // className={classes.button}
            startIcon={<AddIcon style={{ color: "#ff9b0f" }} />}
          >
            {this.props.addTextAnother}
          </Button>
        </div>
      );
  }
}
