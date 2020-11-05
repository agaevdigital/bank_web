import React from 'react';
import PricingButtonOrange from "../buttons/PricingButtonOrange";
import PricingButtonGray from "../buttons/PricingButtonGray";
import { withTranslation } from 'react-i18next';
import Radium from "radium";


const headerContent = {
    minWidth: "230px",
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
    minWidth: "230px",
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
    fontSize: "5em",
    lineHeight: "1em",
    color: "#2b3241",
    "@media (max-width: 425px)": {
        fontSize: "4em",
    },
};

const monthStyle = {
    alignSelf: "flex-end",
    fontSize: "2.33em",
    lineHeight: "1em",
    color: "#2b3241",
    "@media (max-width: 425px)": {
        fontSize: "2em",
    },
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

class BusinessPricingTab extends React.Component {
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
                            /{t('pricing.business.month')}
                        </div>
                    </div>
                    <PricingButtonOrange/>
                    <div style={divList}>
                        <div style={divListItem}>
                            <div style={singleArrow}/>
                            <p style={listTextStyle}>
                                {t('pricing.business.standard.point_1')}
                            </p>
                        </div>
                        <div style={divListItem}>
                            <div style={singleArrow}/>
                            <p style={listTextStyle} dangerouslySetInnerHTML={{__html: t('pricing.business.standard.point_2')}} />
                        </div>
                        <div style={divListItem}>
                            <div style={singleArrow}/>
                            <p style={listTextStyle} dangerouslySetInnerHTML={{__html: t('pricing.business.standard.point_3')}} />
                        </div>
                        <div style={divListItem}>
                            <div style={singleArrow}/>
                            <p style={listTextStyle} dangerouslySetInnerHTML={{__html: t('pricing.business.standard.point_4')}} />
                        </div>
                        <div style={divListItem}>
                            <div style={singleArrow}/>
                            <p style={listTextStyle} dangerouslySetInnerHTML={{__html: t('pricing.business.standard.point_5')}} />
                        </div>
                        <div style={divListItem}>
                            <div style={singleArrow}/>
                            <p style={listTextStyle}>
                                {t('pricing.business.standard.point_6')}
                            </p>
                        </div>
                        <div style={divListItem}>
                            <div style={singleArrow}/>
                            <p style={listTextStyle}>
                            {t('pricing.business.standard.point_7')}
                            </p>
                        </div>
                        <div style={divListItem}>
                            <div style={singleArrow}/>
                            <p style={listTextStyle}>
                            {t('pricing.business.standard.point_8')}
                            </p>
                        </div>
                        <div style={divListItem}>
                            <div style={singleArrow}/>
                            <p style={listTextStyle}>
                            {t('pricing.business.standard.point_9')}
                            </p>
                        </div>
                        <div style={divListItem}>
                            <div style={singleArrow}/>
                            <p style={listTextStyle}>
                                {t('pricing.business.standard.point_10')}
                            </p>
                        </div>
                        <div style={divListItem}>
                            <div style={singleArrow}/>
                            <p style={listTextStyle}>
                                {t('pricing.business.standard.point_11')}
                            </p>
                        </div>
                        <div style={divListItem}>
                            <div style={singleArrow}/>
                            <p style={listTextStyle}>
                                {t('pricing.business.standard.point_12')}
                            </p>
                        </div>
                        {/* <div style={divListItem}>
                            <div style={singleArrow}/>
                            <p style={listTextStyle}>
                                
                            </p>
                        </div> */}
                    </div>
                </div>

                <div style={headerContentGray}>
                    <p style={textSubHeaderStyle}>
                        GROW
                    </p>
                    <div style={divItemCenter}>
                        <div style={currencyStyle}>
                            €
                        </div>
                        <div style={numberStyle}>
                            25
                        </div>
                        <div style={monthStyle}>
                            /{t('pricing.business.month')}
                        </div>
                    </div>
                    <PricingButtonGray/>
                    <div style={divList}>
                        <div style={divListItem}>
                            <div style={singleArrow}/>
                            <p style={listTextStyle} dangerouslySetInnerHTML={{__html: t('pricing.business.grow.point_1')}} />
                        </div>
                        <div style={divListItem}>
                            <div style={singleArrow}/>
                            <p style={listTextStyle} dangerouslySetInnerHTML={{__html: t('pricing.business.grow.point_2')}} />
                        </div>
                        <div style={divListItem}>
                            <div style={singleArrow}/>
                            <p style={listTextStyle} dangerouslySetInnerHTML={{__html: t('pricing.business.grow.point_3')}} />
                        </div>
                        <div style={divListItem}>
                            <div style={singleArrow}/>
                            <p style={listTextStyle} dangerouslySetInnerHTML={{__html: t('pricing.business.grow.point_4')}} />
                        </div>
                        <div style={divListItem}>
                            <div style={singleArrow}/>
                            <p style={listTextStyle} dangerouslySetInnerHTML={{__html: t('pricing.business.grow.point_5')}} />
                        </div>
                        <div style={divListItem}>
                            <div style={singleArrow}/>
                            <p style={listTextStyle}>
                            {t('pricing.business.grow.point_6')}
                            </p>
                        </div>
                        <div style={divListItem}>
                            <div style={singleArrow}/>
                            <p style={listTextStyle}>
                            {t('pricing.business.grow.point_7')}
                            </p>
                        </div>
                        <div style={divListItem}>
                            <div style={singleArrow}/>
                            <p style={listTextStyle}>
                            {t('pricing.business.grow.point_8')}
                            </p>
                        </div>
                        <div style={divListItem}>
                            <div style={singleArrow}/>
                            <p style={listTextStyle}>
                                {t('pricing.business.grow.point_9')}
                            </p>
                        </div>
                        <div style={divListItem}>
                            <div style={singleArrow}/>
                            <p style={listTextStyle}>
                                {t('pricing.business.grow.point_10')}
                            </p>
                        </div>
                        <div style={divListItem}>
                            <div style={singleArrow}/>
                            <p style={listTextStyle}>
                                {t('pricing.business.grow.point_11')}
                            </p>
                        </div>
                        <div style={divListItem}>
                            <div style={singleArrow}/>
                            <p style={listTextStyle}>
                                {t('pricing.business.grow.point_12')}
                            </p>
                        </div>
                        <div style={divListItem}>
                            <div style={singleArrow}/>
                            <p style={listTextStyle}>
                                {t('pricing.business.grow.point_13')}
                            </p>
                        </div>
                    </div>
                </div>

                <div style={headerContent}>
                    <p style={textSubHeaderStyle}>
                        SCALE
                    </p>
                    <div style={divItemCenter}>
                        <div style={currencyStyle}>
                            €
                        </div>
                        <div style={numberStyle}>
                            100
                        </div>
                        <div style={monthStyle}>
                            /{t('pricing.business.month')}
                        </div>
                    </div>
                    <PricingButtonOrange/>
                    <div style={divList}>
                        <div style={divListItem}>
                            <div style={singleArrow}/>
                            <p style={listTextStyle}>
                                {t('pricing.business.scale.point_1')}
                            </p>
                        </div>
                        {/* <div style={divListItem}>
                            <div style={singleArrow}/>
                            <p style={listTextStyle} dangerouslySetInnerHTML={{__html: t('pricing.business.scale.point_1')}} />
                        </div> */}
                        <div style={divListItem}>
                            <div style={singleArrow}/>
                            <p style={listTextStyle} dangerouslySetInnerHTML={{__html: t('pricing.business.scale.point_2')}} />
                        </div>
                        <div style={divListItem}>
                            <div style={singleArrow}/>
                            <p style={listTextStyle} dangerouslySetInnerHTML={{__html: t('pricing.business.scale.point_3')}} />
                        </div>
                        <div style={divListItem}>
                            <div style={singleArrow}/>
                            <p style={listTextStyle} dangerouslySetInnerHTML={{__html: t('pricing.business.scale.point_4')}} />
                        </div>
                        <div style={divListItem}>
                            <div style={singleArrow}/>
                            <p style={listTextStyle} dangerouslySetInnerHTML={{__html: t('pricing.business.scale.point_5')}} />
                        </div>
                        <div style={divListItem}>
                            <div style={singleArrow}/>
                            <p style={listTextStyle}>
                            {t('pricing.business.scale.point_6')}
                            </p>
                        </div>
                        <div style={divListItem}>
                            <div style={singleArrow}/>
                            <p style={listTextStyle}>
                                {t('pricing.business.scale.point_7')}
                            </p>
                        </div>
                        <div style={divListItem}>
                            <div style={singleArrow}/>
                            <p style={listTextStyle}>
                                {t('pricing.business.scale.point_8')}
                            </p>
                        </div>
                        <div style={divListItem}>
                            <div style={singleArrow}/>
                            <p style={listTextStyle}>
                            {t('pricing.business.scale.point_9')}
                            </p>
                        </div>
                        <div style={divListItem}>
                            <div style={singleArrow}/>
                            <p style={listTextStyle}>
                            {t('pricing.business.scale.point_10')}
                            </p>
                        </div>
                        <div style={divListItem}>
                            <div style={singleArrow}/>
                            <p style={listTextStyle}>
                            {t('pricing.business.scale.point_11')}
                            </p>
                        </div>
                        <div style={divListItem}>
                            <div style={singleArrow}/>
                            <p style={listTextStyle}>
                            {t('pricing.business.scale.point_12')}
                            </p>
                        </div>
                        <div style={divListItem}>
                            <div style={singleArrow}/>
                            <p style={listTextStyle}>
                                {t('pricing.business.scale.point_13')}
                            </p>
                        </div>
                    </div>
                </div>

                <div style={headerContentGray}>
                    <p style={textSubHeaderStyle}>
                        ENTERPRISE
                    </p>
                    <div style={divItemCenter}>
                        <div style={currencyStyle}>
                            €
                        </div>
                        <div style={numberStyle}>
                            1000
                        </div>
                        <div style={monthStyle}>
                            /{t('pricing.business.month')}
                        </div>
                    </div>
                    <PricingButtonGray/>
                    <div style={divList}>
                        <div style={divListItem}>
                            <div style={singleArrow}/>
                            <p style={listTextStyle}>
                                {t('pricing.business.enterprise.point_1')}
                            </p>
                        </div>
                        <div style={divListItem}>
                            <div style={singleArrow}/>
                            <p style={listTextStyle} dangerouslySetInnerHTML={{__html: t('pricing.business.enterprise.point_2')}} />                                
                        </div>
                        <div style={divListItem}>
                            <div style={singleArrow}/>
                            <p style={listTextStyle} dangerouslySetInnerHTML={{__html: t('pricing.business.enterprise.point_3')}} />
                        </div>
                        <div style={divListItem}>
                            <div style={singleArrow}/>
                            <p style={listTextStyle} dangerouslySetInnerHTML={{__html: t('pricing.business.enterprise.point_4')}} />
                        </div>
                        <div style={divListItem}>
                            <div style={singleArrow}/>
                            <p style={listTextStyle} dangerouslySetInnerHTML={{__html: t('pricing.business.enterprise.point_5')}} />
                        </div>
                        <div style={divListItem}>
                            <div style={singleArrow}/>
                            <p style={listTextStyle} dangerouslySetInnerHTML={{__html: t('pricing.business.enterprise.point_6')}} />
                        </div>
                        <div style={divListItem}>
                            <div style={singleArrow}/>
                            <p style={listTextStyle} dangerouslySetInnerHTML={{__html: t('pricing.business.enterprise.point_7')}} />
                        </div>
                        <div style={divListItem}>
                            <div style={singleArrow}/>
                            <p style={listTextStyle} dangerouslySetInnerHTML={{__html: t('pricing.business.enterprise.point_8')}} />
                        </div>
                        <div style={divListItem}>
                            <div style={singleArrow}/>
                            <p style={listTextStyle} dangerouslySetInnerHTML={{__html: t('pricing.business.enterprise.point_9')}} />
                        </div>
                        <div style={divListItem}>
                            <div style={singleArrow}/>
                            <p style={listTextStyle} dangerouslySetInnerHTML={{__html: t('pricing.business.enterprise.point_10')}} />
                        </div>
                        <div style={divListItem}>
                            <div style={singleArrow}/>
                            <p style={listTextStyle} dangerouslySetInnerHTML={{__html: t('pricing.business.enterprise.point_11')}} />
                        </div>
                        <div style={divListItem}>
                            <div style={singleArrow}/>
                            <p style={listTextStyle} dangerouslySetInnerHTML={{__html: t('pricing.business.enterprise.point_12')}} />
                        </div>
                        <div style={divListItem}>
                            <div style={singleArrow}/>
                            <p style={listTextStyle} dangerouslySetInnerHTML={{__html: t('pricing.business.enterprise.point_13')}} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default  withTranslation()(Radium(BusinessPricingTab))