import React from 'react';
import PricingButtonOrange from "../buttons/PricingButtonOrange";
import PricingButtonGray from "../buttons/PricingButtonGray";
import { withTranslation } from 'react-i18next';
import Radium from "radium";


const headerContent = {
    minWidth: "340px",
    paddingRight: "1.5rem",
    paddingLeft: "1.5rem",
    display: "initial",
    justifyContent: "center",
    "@media (max-width: 1218px)": {
        minWidth: "auto",
        paddingRight: "0",
        paddingLeft: "0",
    },
};

const headerContentGray = {
    minWidth: "340px",
    paddingRight: "1.5rem",
    paddingLeft: "1.5rem",
    display: "initial",
    justifyContent: "center",
    backgroundColor: "#f3f4f5",
    "@media (max-width: 1218px)": {
        position: "relative",
        left:"-32px",
        width: "calc(100% + 64px)",
        minWidth: "auto",
        paddingRight: "0",
        paddingLeft: "0",
    },
    "@media (max-width: 425px)": {
        paddingLeft: "32px",
        paddingRight: "32px",
    },
};

const currencyStyle = {
    alignSelf: "flex-start",
    fontSize: "2.33em",
    lineHeight: "1em",
    color: "#2b3241",
};

const numberStyle = {
    fontSize: "7.5em",
    lineHeight: "1em",
    color: "#2b3241",
};

const monthStyle = {
    alignSelf: "flex-end",
    fontSize: "2.33em",
    lineHeight: "1em",
    color: "#2b3241",
};

const textSubHeaderStyle = {
    paddingBottom: "0",
    paddingTop: "0",
    letterSpacing: "2px",
    textAlign: "center",
    color: "#2b3241",
    fontSize: "1.25rem",
    fontFamily: 'ProximaNova, sans-serif',
    fontWeight: '500',
    marginTop: "3rem",
    marginLeft: "-1.5rem",
};

const textSubNormalStyle = {
    opacity: "0.9",
    color: "#363636",
    // color: "black",
    fontSize: "14px",
    fontFamily: 'ProximaNova, sans-serif',
    fontWeight: '400 !important',
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 4,
    textAlign: "left",
    lineHeight: "1.5"
};

const listTextStyle = {
    opacity: "0.9",
    color: "#363636",
    // color: "black",
    fontSize: "14px",
    fontFamily: 'ProximaNova, sans-serif',
    fontWeight: '700 !important',
    marginTop: 0,
    marginLeft: 4,
    textAlign: "left",
    lineHeight: "1.5"
};

const divList = {
    display: "grid",
    justifyContent: "center",
    paddingBottom: "3rem",
    "@media (max-width: 1218px)": {
        maxWidth: "300px",
        margin: "0 auto",
    },
};

const divListItem = {
    display: "flex",
    justifyContent: "flex-start",
    paddingBottom: "0.5rem",
};

const divSubListItem = {
    display: "grid",
    justifyContent: "flex-start",
};

const singleArrow = {
    content: "",
    display: "inline-block",
    width: ".3rem",
    height: ".6rem",
    borderColor: "#ff9b0f",
    borderStyle: "solid",
    borderWidth: "0 2px 2px 0",
    margin: ".1rem 1.5rem .1rem .5rem",
    transform: "rotate(45deg)",
    position: "static",
    borderRadius: "0",
    background: "none",
};

const divItemCenter = {
    marginRight: 30,
    marginTop: 5,
    marginLeft: 10,
    paddingBottom: "3rem",
    display: "flex",
    justifyContent: "center",
    "@media (max-width: 425px)": {
        marginRight: 0,
        marginLeft: 0,
    },
};

const tab = {
    display: "flex",
    justifyContent: "flex",
    maxWidth: "2024px",
    minWidth: "inherit",
    paddingLeft: "-5rem",
    paddingRight: "-24px",
    "@media (max-width: 1218px)": {
        flexDirection: "column",
    },
};


class PersonalPricingTab extends React.Component {
    // constructor(props) {
    //     super(props);
    // }


    render() {
        const {t} = this.props;
        return (
            <div style={tab}>
                <div style={headerContent}>
                    <p style={textSubHeaderStyle}>
                        STANDARD
                    </p>
                    <div style={divItemCenter}>
                        <div style={currencyStyle}>
                            €
                        </div>
                        <div style={numberStyle}>
                            3
                        </div>
                        <div style={monthStyle}>
                            /{t('pricing.month')}
                        </div>
                    </div>
                    <PricingButtonOrange/>
                    <div style={divList}>
                        <div style={divListItem}>
                            <div style={singleArrow}/>
                            <p style={listTextStyle}>
                                {t('pricing.personal.standard.point_1')}
                            </p>
                        </div>
                        <div style={divListItem}>
                            <div style={singleArrow}/>
                            <div style={divSubListItem}>
                                <p style={textSubNormalStyle} dangerouslySetInnerHTML={{__html: t('pricing.personal.standard.point_2')}} />                                
                            </div>
                        </div>
                        <div style={divListItem}>
                            <div style={singleArrow}/>
                            <div style={divSubListItem}>
                                <p style={textSubNormalStyle} dangerouslySetInnerHTML={{__html: t('pricing.personal.standard.point_3')}} />                                                                
                            </div>
                        </div>
                    </div>
                </div>

                <div style={headerContentGray}>
                    <p style={textSubHeaderStyle}>
                        PREMIUM
                    </p>
                    <div style={divItemCenter}>
                        <div style={currencyStyle}>
                            €
                        </div>
                        <div style={numberStyle}>
                            5
                        </div>
                        <div style={monthStyle}>
                            /{t('pricing.month')}
                        </div>
                    </div>
                    <PricingButtonGray/>
                    <div style={divList}>
                        <div style={divListItem}>
                            <div style={singleArrow}/>
                            <p style={listTextStyle}>
                                {t('pricing.personal.premium.point_1')}
                            </p>
                        </div>
                        <div style={divListItem}>
                            <div style={singleArrow}/>
                            <div style={divSubListItem}>
                                <p style={textSubNormalStyle} dangerouslySetInnerHTML={{__html: t('pricing.personal.premium.point_2')}}>
                                </p>                                
                            </div>
                        </div>
                        <div style={divListItem}>
                            <div style={singleArrow}/>
                            <div style={divSubListItem}>
                                <p style={textSubNormalStyle} dangerouslySetInnerHTML={{__html: t('pricing.personal.premium.point_3')}}>
                                </p>
                                
                            </div>
                        </div>
                        <div style={divListItem}>
                            <div style={singleArrow}/>
                            <p style={listTextStyle}>
                                {t('pricing.personal.premium.point_4')}
                            </p>
                        </div>
                        <div style={divListItem}>
                            <div style={singleArrow}/>
                            <p style={listTextStyle}>
                                {t('pricing.personal.premium.point_5')}
                            </p>
                        </div>
                        <div style={divListItem}>
                            <div style={singleArrow}/>
                            <p style={listTextStyle}>
                                {t('pricing.personal.premium.point_6')}
                            </p>
                        </div>
                        <div style={divListItem}>
                            <div style={singleArrow}/>
                            <p style={listTextStyle}>
                                {t('pricing.personal.premium.point_7')}
                            </p>
                        </div>
                        <div style={divListItem}>
                            <div style={singleArrow}/>
                            <p style={listTextStyle}>
                                {t('pricing.personal.premium.point_8')}
                            </p>
                        </div>
                        <div style={divListItem}>
                            <div style={singleArrow}/>
                            <p style={listTextStyle}>
                                {t('pricing.personal.premium.point_9')}
                            </p>
                        </div>
                        <div style={divListItem}>
                            <div style={singleArrow}/>
                            <p style={listTextStyle}>
                                {t('pricing.personal.premium.point_10')}
                            </p>
                        </div>
                    </div>
                </div>

                <div style={headerContent}>
                    <p style={textSubHeaderStyle}>
                        METAL
                    </p>
                    <div style={divItemCenter}>
                        <div style={currencyStyle}>
                            €
                        </div>
                        <div style={numberStyle}>
                            10
                        </div>
                        <div style={monthStyle}>
                            /{t('pricing.month')}
                        </div>
                    </div>
                    <PricingButtonOrange/>
                    <div style={divList}>
                        <div style={divListItem}>
                            <div style={singleArrow}/>
                            <p style={listTextStyle}>
                                {t('pricing.personal.metal.point_1')}
                            </p>
                        </div>
                        <div style={divListItem}>
                            <div style={singleArrow}/>
                            <div style={divSubListItem}>
                                <p style={textSubNormalStyle} dangerouslySetInnerHTML={{__html: t('pricing.personal.metal.point_2')}} />                                    
                            </div>
                        </div>
                        <div style={divListItem}>
                            <div style={singleArrow}/>
                            <div style={divSubListItem}>
                                <p style={textSubNormalStyle} dangerouslySetInnerHTML={{__html: t('pricing.personal.metal.point_3')}} />
                            </div>
                        </div>
                        <div style={divListItem}>
                            <div style={singleArrow}/>
                            <p style={listTextStyle}>
                                {t('pricing.personal.metal.point_4')}
                            </p>
                        </div>
                        <div style={divListItem}>
                            <div style={singleArrow}/>
                            <p style={listTextStyle}>
                                {t('pricing.personal.metal.point_5')}
                            </p>
                        </div>
                        <div style={divListItem}>
                            <div style={singleArrow}/>
                            <p style={listTextStyle}>
                                {t('pricing.personal.metal.point_6')}
                            </p>
                        </div>
                        <div style={divListItem}>
                            <div style={singleArrow}/>
                            <p style={listTextStyle}>
                                {t('pricing.personal.metal.point_7')}
                            </p>
                        </div>
                        <div style={divListItem}>
                            <div style={singleArrow}/>
                            <p style={listTextStyle}>
                                {t('pricing.personal.metal.point_8')}
                            </p>
                        </div>
                        <div style={divListItem}>
                            <div style={singleArrow}/>
                            <p style={listTextStyle}>
                                {t('pricing.personal.metal.point_9')}
                            </p>
                        </div>
                        <div style={divListItem}>
                            <div style={singleArrow}/>
                            <p style={listTextStyle}>
                                {t('pricing.personal.metal.point_10')}
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default  withTranslation()(Radium(PersonalPricingTab))