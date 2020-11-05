import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import {FormControlLabel} from "@material-ui/core";

const StyledCheckbox = withStyles({
    root: {
        color: '#FF9B0F',
        '&$checked': {
            color: '#FF9B0F',
        },
    },
    checked: {},
})(props => <Checkbox color="default" {...props} />);


export default class PUCheckBoxDefault extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            checked: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.forceSelect = this.forceSelect.bind(this);
        this.forceDeselect = this.forceDeselect.bind(this);
    }

    handleChange() {
            this.setState({checked: !this.state.checked});
            this.props.changeHandler();
    }

    getValue() {
        return this.state.checked;
    }

    forceSelect() {
        this.setState({checked: true});
        //alert(this.state.checked);
    }

    forceDeselect() {
        //alert("!!!");
        this.setState({checked: false});
    }

    render() {
        return (
            <div>
                    <FormControlLabel
                        control={
                            <StyledCheckbox
                                onChange={this.handleChange}
                                disabled={this.props.disabled}
                                value={this.state.checked}
                                checked={this.state.checked}
                            />
                        }
                        label={this.props.label}
                    />
            </div>
        );
    }
};