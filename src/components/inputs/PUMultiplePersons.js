import React from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import DelIcon from "@material-ui/icons/HighlightOff";
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
      paddingRight: "25px",
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
})(TextField);

const CssButton = withStyles({
  root: {
    background: "#FF9B0F",
    borderRadius: 50,
    border: 0,
    color: "white",
    //height: 36,
    padding: "2px 20px 2px 20px",
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

const delButtonHolder = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export default class PUMultiplePersons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seq_id: 1,
      items: [{ id: 1, name: "", surname: "", patronymic: "" }],
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSurnameChange = this.handleSurnameChange.bind(this);
    this.handlePatronymicChange = this.handlePatronymicChange.bind(this);

    this.getItemName = this.getItemName.bind(this);
    this.getItemSurname = this.getItemSurname.bind(this);
    this.getItemPatronymic = this.getItemPatronymic.bind(this);

    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  getValue() {
    let items_ = this.state.items;
    let result = [];
    for (const item_ of items_) {
      result.push({
        name: item_.name,
        surname: item_.surname,
        patronymic: item_.patronymic,
      });
    }
    return result;
  }

  addItem() {
    let new_id = this.state.seq_id + 1;
    let items_ = this.state.items;
    items_.push({ id: new_id, name: "", surname: "", patronymic: "" });
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
    // console.log(JSON.stringify(this.state.items));
  }

  getItemName(itemID) {
    let name = "";
    for (const item of this.state.items) {
      if (item.id === itemID) {
        name = item.name;
      }
    }
    return name;
  }

  getItemSurname(itemID) {
    let surname = "";
    for (const item of this.state.items) {
      if (item.id === itemID) {
        surname = item.surname;
      }
    }
    return surname;
  }

  getItemPatronymic(itemID) {
    let patronymic = "";
    for (const item of this.state.items) {
      if (item.id === itemID) {
        patronymic = item.patronymic;
      }
    }
    return patronymic;
  }

  handleNameChange(event) {
    let componentId = event.target.id;
    let idLength = componentId.length - 31;
    let recordID = componentId.substr(componentId.length - idLength);
    let items_ = this.state.items;
    let idx = 0;
    for (const item of items_) {
      if (item.id === parseInt(recordID)) {
        items_[idx].name = event.target.value;
        this.setState({ items: items_ });
      }
      idx = idx + 1;
    }
  }
  handleSurnameChange(event) {
    let componentId = event.target.id;
    let idLength = componentId.length - 34;
    let recordID = componentId.substr(componentId.length - idLength);
    let items_ = this.state.items;
    let idx = 0;
    for (const item of items_) {
      if (item.id === parseInt(recordID)) {
        items_[idx].surname = event.target.value;
        this.setState({ items: items_ });
      }
      idx = idx + 1;
    }
  }
  handlePatronymicChange(event) {
    let componentId = event.target.id;
    let idLength = componentId.length - 37;
    let recordID = componentId.substr(componentId.length - idLength);
    let items_ = this.state.items;
    let idx = 0;
    for (const item of items_) {
      if (item.id === parseInt(recordID)) {
        items_[idx].patronymic = event.target.value;
        this.setState({ items: items_ });
      }
      idx = idx + 1;
    }
  }

  generateStyle() {
    return {
      minWidth: parseInt(this.props.puMinWidth),
      maxWidth: parseInt(this.props.puMaxWidth),
    };
  }

  generateHolderStyle() {
    return {
      minWidth: parseInt(this.props.puMinWidth),
      maxWidth: parseInt(this.props.puMaxWidth),
      marginRight: 10,
    };
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
              <div style={this.generateHolderStyle()}>
                <p style={{ marginLeft: 16, marginBottom: 0 }}>Name</p>
                <CssTextField
                  required={this.props.required}
                  id={"pu-multiple-persons-input-name-" + result.id}
                  label={this.props.label}
                  defaultValue={this.props.default_value}
                  margin={this.props.margin}
                  variant={this.props.variant}
                  type={this.props.type}
                  style={this.generateStyle()}
                  onChange={this.handleNameChange}
                  value={this.getItemName(result.id)}
                  disabled={false}
                />
              </div>
              <div style={this.generateHolderStyle()}>
                <p style={{ marginLeft: 16, marginBottom: 0 }}>Surname</p>
                <CssTextField
                  required={this.props.required}
                  id={"pu-multiple-persons-input-surname-" + result.id}
                  label={this.props.label}
                  defaultValue={this.props.default_value}
                  margin={this.props.margin}
                  variant={this.props.variant}
                  type={this.props.type}
                  style={this.generateStyle()}
                  onChange={this.handleSurnameChange}
                  value={this.getItemSurname(result.id)}
                  disabled={false}
                />
              </div>
              <div style={this.generateHolderStyle()}>
                <p style={{ marginLeft: 16, marginBottom: 0 }}>
                  Patronymic (optionally)
                </p>
                <CssTextField
                  required={this.props.required}
                  id={"pu-multiple-persons-input-patronymic-" + result.id}
                  label={this.props.label}
                  defaultValue={this.props.default_value}
                  margin={this.props.margin}
                  variant={this.props.variant}
                  type={this.props.type}
                  style={this.generateStyle()}
                  onChange={this.handlePatronymicChange}
                  value={this.getItemPatronymic(result.id)}
                  disabled={false}
                />
              </div>
              <div style={delButtonHolder}>
                <IconButton
                  style={{ marginTop: "28px" }}
                  onClick={() => this.removeItem(result.id)}
                  disabled={result.id === 1}
                >
                  <DelIcon
                    style={{ color: result.id === 1 ? "white" : "#C51F1F" }}
                  />
                </IconButton>
              </div>
            </div>
          ))}
          <CssButton onClick={this.addItem} style={{ marginLeft: "10px" }}>
            {this.props.addTextAnother}
          </CssButton>
        </div>
      );
  }
}
