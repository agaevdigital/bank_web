import '../../../App.css';
import React from 'react';
import AppBarHome from "./AppBarHome";
import HomeFooter from "./HomeFooter";
import { Redirect } from 'react-router-dom';
import BodyBackground from '../../images/body_back.png';
import AnimateCC from "react-adobe-animate";
import IcoPOS from '../../images/icons/ico-25.png';
import TFString from "../../inputs/TFString";
import PUSelectDefault from "../../selects/PUSelectDefault";
import POSButton from "../../buttons/POSButton"
import { withTranslation } from 'react-i18next';
import Radium from "radium";
import {containerStyle, sectionPageStyle} from "./styles/PublicStyle";


const headerContent = {
    maxWidth: "600px",
};

const animHolderStyle = {
    backgroundImage: "url(" + BodyBackground + ")",
    minHeight: "1008px",
    minWidth: "1008px",
    backgroundRepeat: "no-repeat",
    position: "absolute",
    top: "-100px",
    right: "50%",
    marginRight: "-1100px",
    "@media (max-width: 1090px)": {
        display: "none",
    },
};

const animStyle = {
    maxWidth: "612px",
    maxHeight: "512px",
    background: "transparent",
    marginTop: "125px",
    marginLeft: "-150px",
};

const headerContentStyle = {
    maxWidth: "1140px",
    zIndex: "10",
    justifyContent: "left",
    display: "flex",
};

const spacer = {
    height: "20px",
    width: "100%"
};

const textHeaderStyle = {
    paddingBottom: "0",
    paddingTop: "0",
    color: "#363636",
    fontSize: "2.5rem",
    fontFamily: 'ProximaNova, sans-serif',
    fontWeight: '500',
    marginTop: "0.9rem",
    marginBottom: "0.5rem",
    lineHeight: "32px"
};

const textParagraphHeaderStyle = {
    paddingBottom: "0",
    paddingTop: "0",
    color: "#363636",
    fontSize: "1.0rem",
    fontFamily: 'ProximaNova, sans-serif',
    fontWeight: '700!important',
    marginTop: "3.0rem",
    marginBottom: "0rem",
    display: "flex",
    justifyContent: "center"
};

const textNormalStyle = {
    maxWidth: "470px",
    opacity: "1",
    // color: "#363636",
    color: "black",
    fontSize: "14px",
    fontFamily: 'ProximaNova, sans-serif',
    fontWeight: '400 !important',
    marginTop: 0,
    marginBottom: 20,
    lineHeight: "1.5"
};

const textSubNormalStyle = {
    opacity: "1",
    // color: "#363636",
    color: "black",
    fontSize: "14px",
    fontFamily: 'ProximaNova, sans-serif',
    fontWeight: '400 !important',
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 15,
    lineHeight: "1.5"
};

const buttonHolderStyle = {
    display: "flex",
    justifyContent: "center",

};

const divHolderStyle = {
    display: "flex",
    justifyContent: "flex-start",
    marginBottom: "20px",
    "@media (max-width: 650px)": {
        flexDirection: "column",
    },
};

const divSubHolderStyle = {
    display: "inline-flex",
    justifyContent: "flex-start",
    marginLeft: 20,
    "@media (max-width: 650px)": {
        marginLeft: "0px",
        display: "flex",
        flexDirection: "column",
    },
};

const divSubSubHolderStyleLeft = {
    display: "column",
    justifyContent: "flex",
    "@media (max-width: 650px)": {
        marginLeft: "0px",
        display: "flex",
        flexDirection: "column",
    },
};

const divSubSubHolderStyleRight = {
    display: "column",
    justifyContent: "flex",
    marginLeft: 80,
    "@media (max-width: 650px)": {
        marginLeft: "0px",
    },
};

const divItemLeft = {
    minWidth: "100px",
    maxWidth: "300px",
    display: "column",
    marginBottom: 20,
    marginLeft: "-20px",
    marginTop: "-10",
    alignItems: "flex",
    "@media (max-width: 650px)": {
        marginLeft: "0px",
        minWidth: "auto",
        maxWidth: "none",
    },
};

const divItemRight = {
    minWidth: "100px",
    maxWidth: "300px",
    display: "column",
    marginBottom: 20,
    marginTop: -5,
    marginLeft: "0px",
    alignItems: "flex",
    "@media (max-width: 650px)": {
        minWidth: "auto",
        maxWidth: "none",
        marginBottom: "0px",
    },
};

const headerDivItemLeft = {

};

const headerDivItemRight = {
    marginLeft: "40px",
    "@media (max-width: 650px)": {
        marginLeft: "0px",
    },
};

class StaticPagePOS extends React.Component {

    constructor(props) {
        super(props);
        this.state= {
            paused: false,
            login_redirect: false,
            register_redirect: false,
            selectedCategory: null,
            businessCategories:
                [
                    {"id": 0,"label": ""},
                    {"id": 1,"label": "Consulting, IT or business service"},
                    {"id": 2,"label": "Design, marketing or communication"},
                    {"id": 3,"label": "Education or learning"},
                    {"id": 4,"label": "Entertainment, arts or photography"},
                    {"id": 5,"label": "Financial services, products or holding companies"},
                    {"id": 6,"label": "Food, beverages or tobacco"},
                    {"id": 7,"label": "Health, fitness or personal care"},
                    {"id": 8,"label": "My category is not listed"},
                    {"id": 9,"label": "Non-profit, charity or political organisations"},
                    {"id": 10,"label": "Other professional services"},
                    {"id": 11,"label": "Public or government services"},
                    {"id": 12,"label": "Real estate or construction"},
                    {"id": 13,"label": "Retail, wholesale or manufacturing"},
                    {"id": 14,"label": "Travel, accommodation or transport"},
                    {"id": 15,"label": "Other"},
                ]
        };
        this.tf_company_name = React.createRef();
        this.tf_company_country = React.createRef();
        this.tf_Company_address = React.createRef();
        this.tf_contact_person_name = React.createRef();
        this.tf_contact_person_surname = React.createRef();
        this.tf_contact_email = React.createRef();
        this.tf_contact_phone = React.createRef();
        this.handleLoginRedirect = this.handleLoginRedirect.bind(this);
        this.handleRegisterRedirect = this.handleRegisterRedirect.bind(this);
        this.selectBusinessCategory = this.selectBusinessCategory.bind(this);
    }

    componentDidMount() {
        setTimeout(function(){
            this.setState({paused:true});
        }.bind(this), 1200);
    }

    handleLoginRedirect() {
        this.setState({login_redirect: true});
    };

    handleRegisterRedirect() {
        this.setState({register_redirect: true});
    };

    selectBusinessCategory(CategoryID_) {
        this.setState({selectedCategory: CategoryID_});
    }


    render() {
        const {t} = this.props;
        if (
            !this.state.login_redirect &&
            !this.state.register_redirect
        ) {
            return (

                <div className="App">
                        <header className="App-header">
                            <AppBarHome
                                loginRedirectHandler={this.handleLoginRedirect}
                                registerRedirectHandler={this.handleRegisterRedirect}
                            />
                        </header>
                    <div style={sectionPageStyle}>
                        <div style={containerStyle}>
                            <div style={headerContentStyle}>
                                <div style={headerContent}>
                                    <div style={divHolderStyle}>
                                        <div style={headerDivItemLeft}>
                                            <img src={IcoPOS} alt="logo"/>
                                        </div>
                                        <div style={headerDivItemRight}>
                                            <h1 style={textHeaderStyle}>
                                                {t('pos.title')}
                                            </h1>
                                        </div>
                                    </div>
                                    <p style={textNormalStyle}>
                                        {t('pos.sub_item_1')}
                                    </p>
                                    <p style={textNormalStyle}>
                                        {t('pos.sub_item_2')}
                                    </p>
                                    <p style={textNormalStyle}>
                                        {t('pos.sub_item_3')}
                                    </p>
                                    <h1 style={textParagraphHeaderStyle}>
                                        {t('pos.sub_item_4')}
                                    </h1>
                                    <div style={spacer} />
                                    <div style={divSubHolderStyle}>
                                        <div style={divSubSubHolderStyleLeft}>
                                            <div style={divItemLeft}>
                                                <p style={textSubNormalStyle}>{t('pos.sub_item_5')}</p>
                                                <div style={divItemRight}>
                                                    <PUSelectDefault
                                                        change_handler={this.selectBusinessCategory}
                                                        cb_max_width="250px"
                                                        select_options={this.state.businessCategories}
                                                        cb_enabled={true}
                                                        //ref={this.cb_registerCountry}
                                                    />
                                                </div>
                                            </div>
                                            <div style={divItemLeft}>
                                                <p style={textSubNormalStyle}>{t('pos.sub_item_6')}</p>
                                                <TFString
                                                    tf_required="required"
                                                    tf_variant="outlined"
                                                    tf_margin="normal"
                                                    tf_default_value=""
                                                    tf_enabled="true"
                                                    tf_min_width="250px"
                                                    ref={this.tf_company_name}
                                                />
                                            </div>
                                            <div style={divItemLeft}>
                                                <p style={textSubNormalStyle}>{t('pos.sub_item_7')}</p>
                                                <TFString
                                                    tf_required="required"
                                                    tf_variant="outlined"
                                                    tf_margin="normal"
                                                    tf_default_value=""
                                                    tf_enabled="true"
                                                    tf_min_width="250px"
                                                    ref={this.tf_company_country}
                                                />
                                            </div>
                                            <div style={divItemLeft}>
                                                <p style={textSubNormalStyle}>{t('pos.sub_item_8')}</p>
                                                <TFString
                                                    tf_required="required"
                                                    tf_variant="outlined"
                                                    tf_margin="normal"
                                                    tf_default_value=""
                                                    tf_enabled="true"
                                                    tf_min_width="250px"
                                                    ref={this.tf_Company_address}
                                                />
                                            </div>
                                        </div>
                                        <div style={divSubSubHolderStyleRight}>
                                            <div style={divItemLeft}>
                                                <p style={textSubNormalStyle}>{t('pos.sub_item_9')}</p>
                                                <TFString
                                                    tf_required="required"
                                                    tf_variant="outlined"
                                                    tf_margin="normal"
                                                    tf_default_value=""
                                                    tf_enabled="true"
                                                    tf_min_width="250px"
                                                    ref={this.tf_contact_person_name}
                                                />
                                            </div>
                                            <div style={divItemLeft}>
                                                <p style={textSubNormalStyle}>{t('pos.sub_item_10')}</p>
                                                <TFString
                                                    tf_required="required"
                                                    tf_variant="outlined"
                                                    tf_margin="normal"
                                                    tf_default_value=""
                                                    tf_enabled="true"
                                                    tf_min_width="250px"
                                                    ref={this.tf_contact_person_surname}
                                                />
                                            </div>
                                            <div style={divItemLeft}>
                                                <p style={textSubNormalStyle}>{t('pos.sub_item_11')}</p>
                                                <TFString
                                                    tf_required="required"
                                                    tf_variant="outlined"
                                                    tf_margin="normal"
                                                    tf_default_value=""
                                                    tf_enabled="true"
                                                    tf_min_width="250px"
                                                    ref={this.tf_contact_email}
                                                />
                                            </div>
                                            <div style={divItemLeft}>
                                                <p style={textSubNormalStyle}>{t('pos.sub_item_12')}</p>
                                                <TFString
                                                    tf_required="required"
                                                    tf_variant="outlined"
                                                    tf_margin="normal"
                                                    tf_default_value=""
                                                    tf_enabled="true"
                                                    tf_min_width="250px"
                                                    ref={this.tf_contact_phone}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div style={buttonHolderStyle}>
                                        <POSButton/>
                                    </div>
                                </div>
                            </div>

                            <div style={animHolderStyle}>
                                <div style={animStyle}>
                                    <AnimateCC
                                        animationName="anim10"
                                        paused={this.state.paused}
                                    />
                                </div>
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

export default withTranslation()(Radium(StaticPagePOS))