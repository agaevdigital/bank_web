import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import { withStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Checkbox from '@material-ui/core/Checkbox';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';



const styles = theme => ({
    root: {
        display: "inline-block",
        flexWrap: "wrap",
        // color: "white",
    },
    formControl: {
        margin: 0,
        minWidth: 250,
    },
    cssOutlinedInput: {
        color: 'white',
        "&$cssFocused $notchedOutline": {
            borderColor: 'white',
            borderWidth: '2px',
            color: 'grey'
        },
        "&$cssDisabled $notchedOutline": {
            borderColor: '#1E2127 !important',
            borderWidth: '1px',
            color: 'black'
        },
        "&:hover $notchedOutline": {
            borderColor: 'white !important',
            borderWidth: '2px',
            color: 'white'
        },
    },
    notchedOutline: {
        "&:not($disabled)": {
            borderColor: 'grey !important',
            borderWidth: '1px'
        },
    },

    cssLabel: {
        color: 'grey',

        "&$cssFocused": {
            color: 'grey'
        },
    },
    cssFocused: {},
    cssDisabled:{},
    cssIcon: {
        fill: 'grey',

        "&$cssDisabled $icon": {
            fill: 'red'
        },
        "&:hover $icon": {
            fill: 'green'
        }
    },
    icon: {
        fill: 'blue'
    }
});


class PUCheckboxSelect extends React.Component {


    componentDidMount() {

        if (this.props.preselectedValues != null) {
            this.setState({
                selectedValue: this.props.preselectedValues,
                labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
            });
        }
        else {
            this.setState({
                selectedValue: [],
                labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
            });
        }
    }

    constructor(props) {
        super(props);
        if (this.props.preselectedValues != null) {
            this.state = {
                selectedValue: this.props.preselectedValues,
                labelWidth: 0,
                select_options: [],
                personName: [],
            };
        }
        else {
            this.state = {
                selectedValue: [],
                labelWidth: 0,
                select_options: [],
                personName: [],
            };
        }

        this.handleChange = this.handleChange.bind(this);
        this.clear = this.clear.bind(this);
    }

    clear() {
        this.setState({selectedValue: []});
    }

    setPreselectedValues(preselectedValues) {
        this.setState({selectedValue: preselectedValues});
    }

    handleChange(event){
        this.setState({selectedValue: event.target.value });
        // alert(event.target.value);
        let selected_ids = [];
        for (const currency_ of event.target.value) {
            for (const currency_option of this.props.select_options) {
                if (currency_option.label === currency_) {
                    selected_ids.push(currency_option.id);
                }
            }
        }
        // alert(JSON.stringify(selected_ids));
        this.props.change_handler(selected_ids);
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <FormControl
                    variant="outlined"
                    margin="dense"
                >
                    <InputLabel
                        ref={ref => {
                            this.InputLabelRef = ref;
                        }}
                        htmlFor="outlined-locationType-native-simple"
                        classes={{
                            root: classes.cssLabel,
                            focused: classes.cssFocused,
                            disabled: classes.cssDisabled
                        }}
                    >
                        {this.props.combobox_label}
                    </InputLabel>
                    <Select
                        multiple
                        value={this.state.selectedValue}
                        onChange={this.handleChange}
                        disabled={!this.props.cb_enabled}
                        inputProps={{
                            classes: {
                                icon: classes.cssIcon,
                                disabled: classes.cssDisabled
                            },
                        }}
                        renderValue={selected => selected.join(', ')}
                        input={
                            <OutlinedInput
                                name="PUCheckboxSelect"
                                labelWidth={this.state.labelWidth}
                                id="outlined-PUCheckboxSelect-multiple"
                                style={{
                                    minWidth:this.props.cb_min_width,
                                    maxWidth:this.props.cb_max_width,

                                }}
                                disabled={!this.props.cb_enabled}
                                classes={{
                                    root: classes.cssOutlinedInput,
                                    focused: classes.cssFocused,
                                    disabled: classes.cssDisabled,
                                    notchedOutline: classes.notchedOutline,
                                }}
                            />
                        }
                    >
                        {this.props.select_options.map(result => (
                            <MenuItem key={result.id} value={result.label}>
                                <Checkbox checked={this.state.selectedValue.indexOf(result.label) > -1} />
                                <ListItemText primary={result.label} />
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
        );
    }
}

PUCheckboxSelect.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PUCheckboxSelect);