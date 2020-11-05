import React from 'react';
import AppBarHome from "../home/AppBarHome";
import HomeFooter from "../home/HomeFooter";
import TFString from "../../inputs/TFString";
import CheckSmsCodeButtonLarge from "../../buttons/CheckSmsCodeButtonLarge";
import ResendSmsCodeButton from "../../buttons/ResendSmsCodeButton";

const loginHolder = {
    marginTop: "100px",
    width: "300px",
};

const wrapper = {
    display: "flex",
    justifyContent: "center"
};

const hintStyle = {
    textAlign: "left",
    fontSize: "14px",
    fontFamily: "ProximaNova, sans-serif",
    fontWeight: "bold",
    marginTop: "20px",
    marginBottom: "0",
    marginLeft: "30px",
    opacity: "0.6"
};

const spacer = {
    height: "40px",
    width: "100%"
};



export default class RegisterEnterSmsCode extends React.Component {

    constructor(props) {
        super(props);
        let intViewportHeight = window.innerHeight - 458;
        this.state = {divHeight: intViewportHeight};
    }

    generateLoginHolderStyle() {
        return {
            minHeight: this.state.divHeight,
        }
    }

    render() {
        return (
            <div className="App">
                    <header className="App-header">
                        <AppBarHome />
                    </header>
                        <div style={this.generateLoginHolderStyle()}>
                            <div style={wrapper}>
                                <div style={loginHolder}>
                                    <p style={hintStyle}>Input SMS code</p>
                                    <TFString
                                        tf_required="required"
                                        tf_variant="outlined"
                                        tf_margin="normal"
                                        tf_default_value=""
                                        tf_enabled="true"
                                        tf_max_width="255px"
                                    />
                                    <div style={spacer} />
                                    <CheckSmsCodeButtonLarge />
                                    <ResendSmsCodeButton />
                                </div>
                            </div>
                        </div>
                        <HomeFooter />
            </div>
        );
    }
}

