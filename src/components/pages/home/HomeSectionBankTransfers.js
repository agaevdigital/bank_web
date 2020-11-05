import '../../../App.css';
import '../../css/orange-links.css';
import React from 'react';
import LinesRight from '../../images/lines-right-v2.png';
import BankTransfersBackground from '../../images/backgrounds/bank-transfers-2.png';
import IcoBankTransfers from '../../images/icons/ico-4.png';
import { withTranslation } from 'react-i18next';
import ReadMoreBtn from './components/ReadMoreBtn';
import Radium from "radium";
import {
    headerTextStyle,
    containerStyle,
    backgroundLeft,
    headerStyle,
    textNormalStyle,
    sectionStyle, counterStyle, textGreySubheaderStyle
} from "./styles/PublicStyle";


const linesRight = {
    background: "url(" + LinesRight + ")",
    backgroundPosition: "left -800px bottom -180px",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
    position: "relative",
    justifyContent: "flex-end",
    display: "flex",
    "@media (max-width: 800px)": {
        justifyContent: "flex-start",
    },
};

const contentStyle = {
    padding:"50px 0",
    maxWidth: "490px",
    "@media (max-width: 800px)": {
        maxWidth: "none",
        padding:"20px 0",
        paddingBottom: "40px",
    },
};

const bankTransfersBackground = {
    width: "480px",
    height: "320px",
    position: "absolute",
    left: "50%",
    marginLeft: "-550px",
    top: "50%",
    marginTop: "-160px",
    background: "url(" + BankTransfersBackground + ")",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    "@media (max-width: 910px)": {
        display: "none",
    },
};

const linkContainer = {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start"
};

class HomeSectionBankTransfers extends React.Component {

    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <section style={sectionStyle}>
                <div style={backgroundLeft}></div>
                <div style={containerStyle}>
                    <div style={linesRight}>
                        <div style={bankTransfersBackground}>
                        </div>
                        <div>
                            <div style={contentStyle}>
                                <div style={counterStyle}>
                                    02.
                                </div>
                                <div style={ headerStyle }>
                                    <img src={IcoBankTransfers} alt="logo"/>
                                    <p style={ headerTextStyle }>
                                        {this.props.t('mainpage.bank_transfers')}
                                    </p>
                                </div>
                                <div>
                                    <p style={textGreySubheaderStyle}>
                                        {this.props.t('mainpage.bank_transfers_title')}
                                    </p>
                                </div>
                                <div>
                                    <p style={textNormalStyle}>
                                        {this.props.t('mainpage.bank_transfers_desc')}
                                    </p>
                                </div>
                                <ReadMoreBtn
                                    link="bank_transfers"
                                    className="orange_link"
                                    style={linkContainer}
                                >{this.props.t('mainpage.btn_more')}</ReadMoreBtn>
                                {/* <div
                                    className="orange_link"
                                    style={linkContainer}>
                                    <a
                                        className="orange_link"
                                        href="/bank_transfers"
                                        style={{display: "flex", flexDirection:"row"}}
                                    >
                                        {this.props.t('mainpage.btn_more')}
                                        <div className="arrow-min" />
                                    </a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default  withTranslation()(Radium(HomeSectionBankTransfers));