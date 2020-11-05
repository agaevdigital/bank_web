import React from "react";

import InputBase from "@material-ui/core/InputBase";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import DelIcon from "@material-ui/icons/HighlightOff";
import AddIcon from "@material-ui/icons/AddCircleOutline";
import { IconButton } from "@material-ui/core";

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
  textTransform: "none",
};

const hintStyle = {
  textAlign: "left",
  fontSize: "18px",
  fontFamily: "ProximaNovaSemibold, sans-serif",
  marginTop: "20px",
  marginBottom: "0",
  marginLeft: "30px",
  color: "#363636",
};

class PUMultipleEntriesNew extends React.Component {
  addItem = () => {
    let newWebsites = [...this.props.websites, { url: "" }];
    this.props.updateBusinessWebsites(newWebsites);
  };

  removeItem = (itemID) => {
    let newWebsites = [...this.props.websites].filter(
      (item, index) => index !== itemID
    );
    this.props.updateBusinessWebsites(newWebsites);
  };

  handleChange(event, index) {
    let newWebsites = [...this.props.websites];
    newWebsites[index].url = event.target.value;
    this.props.updateBusinessWebsites(newWebsites);
  }

  render() {
    return (
      <div>
        {this.props.websites.map((result, index) => (
          <div key={`${index}`}>
            <p style={hintStyle}>Your business website(s)</p>
            <div style={componentHolder}>
              <CssTextField
                required={this.props.required}
                label={this.props.label}
                defaultValue={this.props.default_value}
                margin={this.props.margin}
                variant={this.props.variant}
                type={this.props.type || "url"}
                style={{
                  minWidth: this.props.minWidth,
                  maxWidth: this.props.maxWidth,
                }}
                onChange={(e) => this.handleChange(e, index)}
                value={result.url}
                disabled={false}
              />
              <IconButton
                onClick={() => this.removeItem(index)}
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
        <Button
          style={addSiteButton}
          onClick={this.addItem}
          startIcon={<AddIcon style={{ color: "#ff9b0f" }} />}
        >
          {this.props.addTextAnother}
        </Button>
      </div>
    );
  }
}

export default PUMultipleEntriesNew;
