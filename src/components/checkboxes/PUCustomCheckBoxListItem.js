import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import { FormControlLabel } from "@material-ui/core";

const StyledCheckbox = withStyles({
  root: {
    color: "#FF9B0F",
    "&$checked": {
      color: "#FF9B0F",
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default class PUCustomCheckBoxListItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.forceSelect = this.forceSelect.bind(this);
    this.forceDeselect = this.forceDeselect.bind(this);
  }

  handleChange = () => {
    this.props.changeHandler(
      this.props.itemID,
      this.props.code,
      this.props.label,
      this.props.checked
    );
  };

  getValue() {
    return this.props.checked;
  }

  forceSelect() {
    this.setState({ checked: true });
    //alert(this.state.checked);
  }

  forceDeselect() {
    //alert("!!!");
    this.setState({ checked: false });
  }

  render() {
    return (
      <div>
        <FormControlLabel
          control={
            <StyledCheckbox
              onChange={this.handleChange}
              disabled={this.props.disabled}
              value={this.props.checked}
              checked={this.props.checked}
            />
          }
          label={this.props.label}
        />
      </div>
    );
  }
}
