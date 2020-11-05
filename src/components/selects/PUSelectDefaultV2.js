import React from "react";
import ReactDOM from "react-dom";
import { withStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import proximaNovaTheme from '../themes/ProximaNova';
import { ThemeProvider } from '@material-ui/styles';
import createMuiTheme from "@material-ui/core/es/styles/createMuiTheme";


const theme1 = createMuiTheme({
    overrides: {
        MuiSelect: {
            select: {
                // //background: "red",
                // "&:placeholder": {
                //     background: "red"
                // },
                "&:focus": {
                    backgroundColor: "red"
                }
            }
        }
    }
});

const CSSSelect = withStyles({
    root: {
        //display: "inline-block",
        flexWrap: "wrap",
        marginTop: "10px",
        placeholder: {
            backgroundColor: "red",
            color: "red"
        },
        // '& .MuiInputBase-input-460::placeholder': {
        //     letterSpacing: "15",
        // },
        //color: "#FF9B0F",
    },
    formControl: {
        //margin: theme.spacing.unit,
        minWidth: 250
    },
    cssOutlinedInput: {
        marginTop: "14px",
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
        backgroundColor: "transparent"
    }

})(Select);



export default class PUSelectDefaultV2 extends React.Component {
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
            <div>
                <ThemeProvider theme={theme1}>
                    <FormControl variant="outlined" margin="dense">
                        <InputLabel
                            ref={ref => {
                                this.InputLabelRef = ref;
                            }}
                            // htmlFor="outlined-locationType-native-simple"
                            // classes={{
                            //     root: classes.cssLabel,
                            //     focused: classes.cssFocused,
                            //     disabled: classes.cssDisabled
                            // }}
                        >
                            {this.props.combobox_label}
                        </InputLabel>
                        <CSSSelect
                            //IconComponent={this.props.IconComponent}
                            native
                            // color="white"
                            value={this.state.selectedValue}
                            onChange={this.handleChange}
                            disabled={!this.props.cb_enabled}
                            // inputProps={{
                            //     classes: {
                            //         icon: classes.cssIcon,
                            //         disabled: classes.cssDisabled
                            //     },
                            // }}
                            input={
                                <OutlinedInput
                                    name="PUSelect"
                                    //labelWidth={this.state.labelWidth}
                                    id="outlined-PUSelect-native-simple"
                                    // style={{
                                    //     minWidth:this.props.cb_min_width,
                                    //     //backgroundColor: "red"
                                    // }}
                                    disabled={!this.props.cb_enabled}
                                    // classes={{
                                    //     root: classes.cssOutlinedInput,
                                    //     focused: classes.cssFocused,
                                    //     disabled: classes.cssDisabled,
                                    //     notchedOutline: classes.notchedOutline,
                                    // }}
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
                        </CSSSelect>
                    </FormControl>
                </ThemeProvider>
            </div>
        );
    }
}
