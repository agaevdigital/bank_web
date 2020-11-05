import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import { withStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const styles = theme => ({
    root: {
        display: "inline-block",
        flexWrap: "wrap",
        //color: "#FF9B0F",
    },
    formControl: {
        margin: 0,
        minWidth: 250
    },
    cssOutlinedInput: {
        color: '#FF9B0F',
        "&$cssFocused $notchedOutline": {
            borderColor: 'white',
            borderWidth: '0px',
            color: 'grey'
        },
        "&$cssDisabled $notchedOutline": {
            borderColor: '#1E2127 !important',
            borderWidth: '0px',
            color: 'black'
        },
        "&:hover $notchedOutline": {
            borderColor: 'white !important',
            borderWidth: '0px',
            color: 'white'
        }
    },
    notchedOutline: {
        //  "&:not($disabled)": {
        //     borderColor: 'grey !important',
        //     borderWidth: '0px'
        // },
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
        fill: '#FF9B0F',
        '&:hover': {
            fill: 'green'
        }
    },

});



class PUSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedValue: -1,
            labelWidth: 0
        };
        this.handleChange = this.handleChange.bind(this);
        this.clear = this.clear.bind(this);
    }

    componentDidMount() {
        this.setState({
            labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
            selectedValue: -1,
        });
    }

    clear() {
        this.setState({selectedValue: '-1'});
    }

    handleChange(event){
        this.setState({selectedValue: event.target.value });
        this.props.change_handler(event.target.value);
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <FormControl variant="outlined" margin="dense">
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
                        IconComponent={this.props.IconComponent}
                        native
                        // color="white"
                        value={this.props.selectedValue}
                        onChange={this.handleChange}
                        disabled={!this.props.cb_enabled}
                        inputProps={{
                            classes: {
                                icon: classes.cssIcon,
                                disabled: classes.cssDisabled
                            },
                        }}
                        input={
                            <OutlinedInput
                                name="PUSelect"
                                labelWidth={this.state.labelWidth}
                                id="outlined-PUSelect-native-simple"
                                style={{minWidth:this.props.cb_min_width}}
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
                        {
                            this.props.select_options.map(result => (
                                <option
                                    key={result.id}
                                    value={result.id}
                                    style={{color:"black"}}
                                >
                                    {result.label}
                                </option>
                            ))
                        }
                    </Select>
                </FormControl>
            </div>
        );
    }
}

PUSelect.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PUSelect);