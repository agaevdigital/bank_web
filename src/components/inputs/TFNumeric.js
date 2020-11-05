import React from 'react';
import TextField from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/core/styles';

const CssTextField = withStyles({
    root: {
        width: "100%",
        marginTop: "4px",
        marginBottom: "4px",
        '& label.Mui-focused': {
            color: '#838989',
            fontFamily: "ProximaNova, sans-serif",
        },
        '& label': {
            color: '#838989',
            fontFamily: "ProximaNova, sans-serif",
        },
        '& input': {
            color: '#838989',
            fontFamily: "ProximaNova, sans-serif",
            paddingLeft: "30px",
            paddingRight: "25px",
            paddingTop: "10px",
            paddingBottom: "10px",
            backgroundColor: "#ebf7f8",
            borderRadius: '30px',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'white',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'transparent',
                borderRadius: '50px',

            },
            '&:hover fieldset': {
                borderColor: '#bfdeff',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#bfdeff',
            },
        },
    },
})(TextField);


export default class TFNumeric extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            selectedValue: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.clear = this.clear.bind(this);
    }

    isNumber(input){
        return[...input].every(c => '0123456789 .'.includes(c));
    }

    handleChange(event) {
        if(this.isNumber(event.target.value)) {
            this.setState({selectedValue: event.target.value});
        }
    }

    getValue() {
        return this.state.selectedValue;
    }

    clear() {
        this.setState(
            {
                selectedValue: ''
            });
    }

    render() {
        return (
            <div>

                    <CssTextField
                        id="outlined-input"
                        label={this.props.tf_label}
                        defaultValue={this.props.tf_default_value}
                        margin="dense"
                        variant={this.props.tf_variant}
                        style={{minWidth:this.props.tf_min_width, maxWidth:this.props.tf_max_width}}
                        onChange={this.handleChange}
                        value={this.state.selectedValue}
                        disabled={!this.props.tf_enabled}
                    />

            </div>
        );
    }
};