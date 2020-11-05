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
        //display: "inline-block",
        flexWrap: "wrap",
        marginTop: "0px",
        MuiSelect: {
            select: {
                "&:focus": {
                    backgroundColor: "red"
                }
            },
        },
        // '& .MuiInputBase-input-460::placeholder': {
        //     letterSpacing: "15",
        // },
        //color: "#FF9B0F",
    },
    formControl: {
        margin: 0,
        minWidth: 250
    },
    cssOutlinedInput: {
        marginTop: "0px",
        paddingLeft: "15px",
        paddingRight: "15px",
        color: 'rgba(0, 0, 0, 0.49)',
        opacity: "0.9",
        fontSize: "17px",
        fontWeight: "200",
        //letterSpacing: "15",
        fontFamily: "ProximaNova, sans-serif",
        borderRadius: "20px",
        backgroundColor: "#ebf7f8",
        // backgroundColor: "#ebf7f8",
        "&$cssFocused $notchedOutline": {
            borderColor: '#bfdeff !important',
            borderWidth: '1px',
            //color: 'red',
            // backgroundColor: "red"
        },
        "&$cssDisabled $notchedOutline": {
            borderColor: '#1E2127 !important',
            borderWidth: '0px',
            color: 'black'
        },
        "&:hover $notchedOutline": {
            borderColor: '#bfdeff !important',
            borderWidth: '1px',
            color: 'white'
        },
    },
    notchedOutline: {
         "&:not($disabled)": {
            borderColor: 'grey !important',
            borderWidth: '0px'
        },
    },

    cssLabel: {
        //color: "#666666",
        opacity: "1",
        fontFamily: "ProximaNova, sans-serif",
        fontWeight: "550",
        marginLeft: "15px",
        //letterSpacing: "0.5px",
        fontSize: "20px",


        "&$cssFocused": {
            color: "rgba(0, 0, 0, 0.54)",
            opacity: "1"
        },
    },
    cssFocused: {},
    cssDisabled:{},
    cssIcon: {
        marginRight: "15px",
        fill: 'black',
        '&:hover': {
            fill: 'black'
        }
    },
    cssSelectRoot: {
        "&:focus": {
            backgroundColor: "transparent",
            // mozAppearance: "none",
            // mozUserSelect: "none",
            // webkitAppearance: "none"
        }
    },
});

class PUSelectListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedValue: 0,
            labelWidth: 0
        };
        this.handleChange = this.handleChange.bind(this);
        this.clear = this.clear.bind(this);
        this.getValue = this.getValue.bind(this);
    }

    componentDidMount() {
        let defaultValue = this.props.default_value;
        if (defaultValue === null) {
            defaultValue = 0;
        }
        this.setState({
            labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
            selectedValue: defaultValue,
        });
    }

    clear() {
        this.setState({selectedValue: '0'});
    }

    getValue() {
        return this.state.selectedValue;
    }



    handleChange(event){
        this.setState({selectedValue: event.target.value });
        this.props.change_handler(this.props.row_id, event.target.value);
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
                            //IconComponent={this.props.IconComponent}
                            native
                            // color="white"
                            value={this.state.selectedValue}
                            onChange={this.handleChange}
                            disabled={!this.props.cb_enabled}
                            //style = {{border: "1px solid red"}}
                            inputProps={{
                                classes: {
                                    icon: classes.cssIcon,
                                    //disabled: classes.cssDisabled,
                                    select: classes.cssSelectRoot,
                                },
                            }}
                            input={
                                <OutlinedInput
                                    name="PUSelect"
                                    //labelWidth={this.state.labelWidth}
                                    id="outlined-PUSelect-native-simple"
                                    style={{
                                        minWidth:this.props.cb_min_width,
                                    }}
                                    disabled={!this.props.cb_enabled}
                                    classes={{
                                        root: classes.cssOutlinedInput,
                                        focused: classes.cssFocused,
                                        disabled: classes.cssDisabled,
                                        notchedOutline: classes.notchedOutline,
                                        //placeholder: classes.cssPlaceholder
                                    }}
                                />
                            }
                        >
                            {
                                this.props.select_options.map(result => (
                                    <option value={result.id}  style={{
                                        //backgroundColor: "transparent",
                                        color:"black"
                                    }}>{result.label}</option>
                                ))
                            }
                        </Select>
                    </FormControl>
            </div>
        );
    }
}

PUSelectListItem.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PUSelectListItem);