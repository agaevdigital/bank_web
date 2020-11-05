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
        '& .MuiOutlinedInput-multiline': {
            color: '#838989',
            fontFamily: "ProximaNova, sans-serif",
            paddingLeft: "30px",
            paddingRight: "25px",
            paddingTop: "10px",
            paddingBottom: "10px",
            backgroundColor: "#ebf7f8",
            borderRadius: '30px',
            '&.Mui-disabled': {
                backgroundColor: '#E8E8E8',
            },
        },

        '& .MuiInput-underline:after': {
            borderBottomColor: 'white',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'transparent',
                borderRadius: '30px',

            },
            '&:hover fieldset': {
                borderColor: '#bfdeff',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#bfdeff',
            },
            '&.Mui-disabled fieldset': {
                //backgroundColor: '#E8E8E8',
                borderColor: '#E8E8E8',
                //borderColor: '#E8E8E8',
            },
            // ':hover fieldset &.Mui-disabled': {
            //     //backgroundColor: '#E8E8E8',
            //     borderColor: '#E8E8E8',
            // },

        },
    },
})(TextField);


export default class TFStringMultiline extends React.Component {
    constructor(props) {
        super(props);
        //console.log("selectedValue = " + this.props.predefined_value + " margin = " + this.props.tf_margin);
        this.state={
            selectedValue: ''
            // selectedValue: this.props.predefined_value
        };
        this.handleChange = this.handleChange.bind(this);
        this.clear = this.clear.bind(this);
        //alert(this.getValue());
    }

    handleChange(event) {
            this.setState({selectedValue: event.target.value});
    }

    getValue() {
        return this.state.selectedValue;
    }

    setValue(value) {
        this.setState({selectedValue: value});
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
                        required={this.props.tf_required}
                        id="outlined-input"
                        label={this.props.tf_label}
                        defaultValue={this.props.tf_default_value}
                        margin={this.props.tf_margin}
                        variant={this.props.tf_variant}
                        type={this.props.tf_type}
                        style={{minWidth:this.props.tf_min_width, maxWidth:this.props.tf_max_width}}
                        onChange={this.handleChange}
                        value={this.state.selectedValue}
                        disabled={!this.props.tf_enabled}
                        multiline
                    />
            </div>
        );
    }
};