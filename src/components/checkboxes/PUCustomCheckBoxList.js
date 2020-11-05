import React from "react";
import PUCustomCheckBoxListItem from "./PUCustomCheckBoxListItem";
import TFString from "../inputs/TFString";

export default class PUCustomCheckBoxList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.items,
      otherSelected: false,
    };

    if (!this.props.changeHandlerFromParent) this.init();
    this.changeHandler = this.changeHandler.bind(this);
    this.tf_other = React.createRef();
  }

  generateHolderStyle() {
    return {
      marginLeft: parseInt(this.props.marginLeft),
      textAlign: "left",
    };
  }

  init() {

    let options = [];
    let seq_id = 0;
    options.push({ id: seq_id, code: "ALL", label: "All", selected: false });
    for (const item of this.props.items) {
      seq_id = seq_id + 1;
      options.push({
        id: seq_id,
        code: item.code,
        label: item.label,
        selected: item.selected ? item.selected : false,
      });
    }
    seq_id = seq_id + 1;
    options.push({
      id: seq_id,
      code: "OTHER",
      label: "Other",
      selected: false,
    });

    this.state = {
      items: options,
    };
  }

  changeHandler = (id, code, label, checked) => {
    if (code === "ALL" && checked !== false) {
      let opts = this.state.items;
      for (const option of opts) {
        if (option.code != "OTHER") {
          option.selected = true;
        }
      }
      this.setState({ items: [] }, () =>
        this.setState({ items: opts }, () =>
          console.log(JSON.stringify(this.state.items))
        )
      );
    }
    if (code !== "ALL" && code !== "OTHER") {
      let opts = this.state.items;
      for (const option of opts) {
        if (option.code === "ALL") {
          option.selected = false;
        }
        if (option.code === code) {
          option.selected = checked;
        }
      }
      this.setState({ items: [] }, () =>
        this.setState({ items: opts }, () =>
          console.log(JSON.stringify(this.state.items))
        )
      );
    }

    if (code === "OTHER") {
      this.setState({ otherSelected: !this.state.otherSelected });
      let opts = this.state.items;
      for (const option of opts) {
        if (option.code === "OTHER") {
          option.selected = !option.selected;
        }
      }
      this.setState({ items: [] }, () =>
        this.setState({ items: opts }, () =>
          console.log(JSON.stringify(this.state.items))
        )
      );
    }
  };

  getValue = () => {
    let selectedItems = [];
    let items = this.props.your_customers ?? this.state.items;
    for (const item of items) {
      if (item.selected && item.code !== "ALL") {
        selectedItems.push({ code: item.code });
      }
    }

    let result = {
      items: selectedItems,

      other_value: this.tf_other.current ? this.tf_other.current.getValue() : '',
    };

    console.log("returning result: " + result);

    return result;
  };

  render() {
    let items = this.props.items ?? this.state.items;
    let otherSelected  = this.props.otherSelected ?? this.state.otherSelected;

    return (
      <div style={this.generateHolderStyle()}>
        {items.map((result) => {
          return (
            <PUCustomCheckBoxListItem
              key={result.label}
              id={"puCheckBoxDefault-" + result.id}
              label={result.label}
              code={result.code}
              itemID={result.id}
              changeHandler={
                this.props.changeHandlerFromParent
                  ? this.props.changeHandlerFromParent
                  : this.changeHandler
              }
              checked={result.selected}
            />
          );
        })}
        {otherSelected && (
          <TFString
            tf_required="required"
            tf_variant="outlined"
            tf_margin="normal"
            tf_default_value=""
            tf_enabled={otherSelected}
            ref={this.tf_other}
          />
        )}
      </div>
    );
  }
}
