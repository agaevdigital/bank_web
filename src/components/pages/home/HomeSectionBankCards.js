import '../../../App.css';
import '../../css/orange-links.css';
import React from 'react';
import LinesLeft from '../../images/lines-left.png';
import PurpleBankCards from '../../images/backgrounds/personal-bank-cards.png';
import BankCardBackground from '../../images/backgrounds/card-background.png';
import IcoBankCards from '../../images/icons/ico-14.png';
import BankCardStandardButton from "../../buttons/BankCardStandardButton";
import BankCardPremiumButton from "../../buttons/BankCardPremiumButton";
import BankCardMetalButton from "../../buttons/BankCardMetalButton";
import { withTranslation } from 'react-i18next';
import ReadMoreBtn from './components/ReadMoreBtn';
import Radium from "radium";
import {
    backgroundRight,
    containerStyle, counterStyle,
    headerStyle,
    headerTextStyle, sectionStyle,
    textNormalStyle
} from "./styles/PublicStyle";


const linesLeft = {
    background: "url(" + LinesLeft + ")",
    backgroundPosition: "left 0px top 0px",
    backgroundRepeat: "no-repeat",
    paddingTop: "80px",
    paddingBottom: "103px",
    paddingLeft: "90px",
    position: "relative",
    justifyContent: "flex-start",
    display: "flex",
    "@media (max-width: 800px)": {
        paddingLeft: "0px",
        paddingBottom: "20px",
        paddingTop: "20px",
    },
};

const purpleBankCardsBackground = {
    background: "url(" + PurpleBankCards + ")",
    backgroundPosition: "left 475px bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "auto 160px",
    display: "flex",
    alignItems: "center",
    position:"relative",
    "@media (max-width: 1200px)": {
        flexDirection: "column",
        alignItems: "flex-start",
        backgroundPosition: "left 475px top 400px",
    },
    "@media (max-width: 800px)": {
        background: "none",
    },
};

const contentStyle = {
    textAlign: "left",
    maxWidth: "578px"
};

const textCardHeader = {
    maxWidth: "400px",
    marginBottom: "57px",
    color: "white",
    fontFamily: 'ProximaNova, sans-serif',
    fontSize: "20px",
    textAlign: "center",
    "@media (max-width: 426px)": {
        marginBottom: "15px",
        fontSize: "16px",
    },
};

const textCardSubheader = {
    alignItems: "center",
    color: "white",
    opacity: "0.8",
    fontFamily: 'ProximaNova, sans-serif',
    fontSize: "16px",
    "@media (max-width: 426px)": {
        textAlign: "center",
    },
};

const textCardNormal = {
    maxWidth: "419px",
    color: "white",
    opacity: "0.8",
    fontFamily: 'ProximaNova, sans-serif',
    fontSize: "16px",
    textAlign: "center",
    marginTop:"50px",
    "@media (max-width: 426px)": {
        marginTop:"15px",
        fontSize: "14px",
    },
};

const bankCardBackground = {
    width: "550px",
    background: "url(" + BankCardBackground + ")",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "absolute",
    left: "50%",
    marginLeft: "236px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    padding: "30px 0",
    borderRadius: "30px",
    "@media (max-width: 1486px)": {
        marginLeft: "100px",
    },
    "@media (max-width: 1200px)": {
        position: "relative",
        left: "0",
        marginLeft: "90px",
        marginBottom: "35px",
    },
    "@media (max-width: 800px)": {
        width: "100%",
        marginLeft: "0",
        padding: "20px",
        boxSizing: "border-box",
    },
};

const pStyleNoMargin = {
    marginTop: "0",
    marginBottom: "0"
};

const buttonHolderStyle = {
    marginTop: "10px",
    justifyContent: "center",
    display: "flex",
    "@media (max-width: 426px)": {
        flexDirection: "column",
    },
};
const linkContainer = {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start"
};

class HomeSectionBankCards extends React.Component {

    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <section style={sectionStyle}>
                <div style={backgroundRight}></div>
                <div style={containerStyle}>
                    <div style={purpleBankCardsBackground}>
                        <div style={linesLeft}>
                            <div style={contentStyle}>
                                <div style={counterStyle}>
                                    03.
                                </div>
                                <div style={headerStyle}>
                                    <img src={IcoBankCards} alt="logo"/>
                                    <p style={headerTextStyle}>
                                        {this.props.t('mainpage.personal_bank')}
                                    </p>
                                </div>
                                <div>
                                    <p style={textNormalStyle}>
                                        {this.props.t('mainpage.personal_bank_desc')}
                                    </p>
                                </div>
                                <ReadMoreBtn
                                    link="personal_bank_cards"
                                    className="orange_link"
                                    style={linkContainer}
                                >
                                    {this.props.t('mainpage.btn_more')}
                                </ReadMoreBtn>

                            </div>
                        </div>
                        <div style={bankCardBackground}>
                            <div style={textCardHeader}>
                                <p style={pStyleNoMargin}
                                   dangerouslySetInnerHTML={{__html: this.props.t('mainpage.personal_bank_card_title')}}/>
                            </div>
                            <div style={textCardSubheader}>
                                <p style={pStyleNoMargin}>
                                    {this.props.t('mainpage.personal_bank_card_type')}
                                </p>
                            </div>
                            <div style={buttonHolderStyle}>
                                <BankCardStandardButton/>
                                <BankCardPremiumButton/>
                                <BankCardMetalButton/>
                            </div>
                            <div style={textCardNormal}>
                                <p style={pStyleNoMargin}>
                                    {this.props.t('mainpage.personal_bank_card_footer')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default withTranslation()(Radium(HomeSectionBankCards))
