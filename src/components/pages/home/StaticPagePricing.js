import React from 'react';
import AppBarHome from "./AppBarHome";
import HomeFooter from "./HomeFooter";
import { Redirect } from 'react-router-dom';
import PricingTabPanel from '../../tabs/PricingTabPanel'
import { withTranslation } from 'react-i18next';
import {containerStyle, sectionPageStyle} from "./styles/PublicStyle";

const componentWrapper = {
    display: "flex",
    flexDirection: "column",
};

const textHeaderStyle = {
    paddingBottom: "0",
    paddingTop: "0",
    // color: "black",
    color: "#363636",
    fontSize: "2.5rem",
    fontFamily: 'ProximaNova, sans-serif',
    fontWeight: '100',
    marginTop: "0.9rem",
    marginBottom: "0rem",
    lineHeight: "32px"
};

const textParagraphHeaderStyle = {
    paddingBottom: "0",
    paddingTop: "0",
    opacity: "0.8",
    // color: "black",
    color: "#363636",
    fontSize: "1.0rem",
    fontFamily: 'ProximaNova, sans-serif',
    fontWeight: '400!important',
    marginTop: "1.0rem",
    marginBottom: "3.0rem",
};

const headerDivItemRight = {
    display: "grid",
};

class StaticPageInternetAcquiring extends React.Component {

    constructor(props) {
        super(props);
        let preselectedItem = sessionStorage.getItem("preselectedItem");
        sessionStorage.removeItem("preselectedItem");

        this.state= {
            login_redirect: false,
            register_redirect: false,
            preselectedItem: preselectedItem
        };
        this.handleLoginRedirect = this.handleLoginRedirect.bind(this);
        this.handleRegisterRedirect = this.handleRegisterRedirect.bind(this);
    }

    componentDidMount() {
        setTimeout(function(){
            this.setState({paused:true});
        }.bind(this), 3700);
    }

    handleLoginRedirect() {
        this.setState({login_redirect: true});
    };

    handleRegisterRedirect() {
        this.setState({register_redirect: true});
    };


    render() {
        if (
            !this.state.login_redirect &&
            !this.state.register_redirect
        ) {
            return (
                <div>
                    <div className="App" style={componentWrapper}>

                        <header className="App-header">
                            <AppBarHome
                                loginRedirectHandler={this.handleLoginRedirect}
                                registerRedirectHandler={this.handleRegisterRedirect}
                            />
                        </header>
                        <div style={sectionPageStyle}>
                            <div style={containerStyle}>
                            <div style={headerDivItemRight}>
                                <h1 style={textHeaderStyle}>
                                    {this.props.t('pricing.page_title')}
                                    
                                </h1>
                                <p style={textParagraphHeaderStyle}>
                                    {this.props.t('pricing.page_desc')}                                    
                                </p>
                            </div>
                            <PricingTabPanel
                                preselectedItem = {this.state.preselectedItem}
                            />
                        </div>
                        </div>
                    </div>

                        <HomeFooter />

                </div>
            );
        }
        else if (this.state.login_redirect && !this.state.register_redirect) {
            return <Redirect push to="/login"/>;
        }
        else if (this.state.register_redirect && !this.state.login_redirect) {
            return <Redirect push to="/register"/>;
        }
    }
}


export default withTranslation()(StaticPageInternetAcquiring)