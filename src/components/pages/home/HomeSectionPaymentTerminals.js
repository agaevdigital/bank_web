import '../../../App.css';
import '../../css/orange-links.css';
import React from 'react';
import LinesRight from '../../images/lines-right-v2.png';
import PaymentTerminalsBackground from '../../images/backgrounds/payment-terminals.png';
import IcoPaymentTerminals from '../../images/icons/ico-18.png';
import { withTranslation } from 'react-i18next';
import ReadMoreBtn from './components/ReadMoreBtn';
import Radium from "radium";
import {
    backgroundLeft,
    containerStyle, counterStyle,
    headerStyle,
    headerTextStyle,
    sectionStyle, textGreySubheaderStyle,
    textNormalStyle
} from "./styles/PublicStyle";

const linesRight = {
    background: "url(" + LinesRight + ")",
    backgroundPosition: "left -800px bottom -180px",
    backgroundRepeat: "no-repeat",
    width: "calc(50% + 595px)",
    height: "100%",
    position: "absolute",
    left:"0",
    top: "0",
};

const contentStyle = {
    maxWidth: "580px",
    padding:"100px 0",
    marginRight: "80px",
    marginLeft: "auto",
    position:"relative",
    "@media (max-width: 800px)": {
        maxWidth: "none",
        padding:"20px 0",
        paddingBottom: "40px",
        marginRight: "0px",
    },
};

const bankTransfersBackground = {
    background: "url(" + PaymentTerminalsBackground + ")",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "270px",
    height: "440px",
    position: "absolute",
    top: "50%",
    marginTop: "-220px",
    left: "50%",
    marginLeft: "-480px",
    "@media (max-width: 995px)": {
        display: "none",
    },
};

const linkContainer = {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start"
};

class HomeSectionPaymentTerminals extends React.Component {

    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <section style={sectionStyle}>
                <div style={backgroundLeft}></div>
                <div style={containerStyle}>
                    <div style={linesRight}></div>
                    <div style={bankTransfersBackground}>
                    </div>
                    <div>
                        <div style={contentStyle}>
                            <div style={counterStyle}>
                                08.
                            </div>
                            <div style={headerStyle}>
                                <img src={IcoPaymentTerminals} alt="logo"/>
                                <p style={headerTextStyle}>
                                    {this.props.t('mainpage.payment_terminals')}
                                </p>
                            </div>
                            <div>
                                <p style={textGreySubheaderStyle}>
                                    {this.props.t('mainpage.payment_terminals_title')}
                                </p>
                            </div>
                            <div>
                                <p style={textNormalStyle}>
                                    {this.props.t('mainpage.payment_terminals_desc')}
                                </p>
                            </div>
                            <ReadMoreBtn
                                className="orange_link"
                                style={linkContainer}
                                link="payments_terminal"
                            >
                                {this.props.t('mainpage.btn_more')}
                            </ReadMoreBtn>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default withTranslation()(Radium(HomeSectionPaymentTerminals))