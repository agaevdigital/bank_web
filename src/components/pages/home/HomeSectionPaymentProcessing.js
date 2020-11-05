import '../../../App.css';
import '../../css/orange-links.css';
import React from 'react';
import LinesLeft from '../../images/lines-left.png';
import PaymentProcessingBackground from '../../images/backgrounds/payment-processing.png';
import IcoPaymentProcessing from '../../images/icons/ico-20.png';
import { withTranslation } from 'react-i18next';
import ReadMoreBtn from './components/ReadMoreBtn';
import {
    backgroundRight,
    containerStyle, counterStyle,
    headerStyle,
    sectionStyle, textGreySubheaderStyle,
    textNormalStyle
} from "./styles/PublicStyle";
import Radium from "radium";

const linkContainer = {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start"
};

const linesLeft = {
    background: "url(" + LinesLeft + ")",
    backgroundPosition: "top left",
    backgroundRepeat: "no-repeat",
    backgroundSize:"auto",
    width: "calc(50% + 595px)",
    height: "100%",
    position: "absolute",
    right:"0",
    top: "0",
    borderRadius: "32px",
};

const contentStyle = {
    maxWidth: "560px",
    padding:"50px 0",
    marginLeft: "80px",
    marginRight: "auto",
    position:"relative",
    "@media (max-width: 800px)": {
        maxWidth: "none",
        padding:"20px 0",
        paddingBottom: "40px",
        marginLeft: "0px",
    },
};

const headerTextStyle = {
    fontSize: "2rem",
    color: "#363636",
    fontFamily: 'ProximaNova, sans-serif',
    marginLeft: "25px",
    marginTop: "10px",
    marginBottom: "0",
    "@media (max-width: 425px)": {
        marginLeft: "0px",
    },
};

const personalAccountBackground = {
    background: "url(" + PaymentProcessingBackground + ")",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "480px",
    height: "450px",
    position: "absolute",
    top: "50%",
    marginTop: "-225px",
    left: "50%",
    marginLeft: "140px",
    "@media (max-width: 990px)": {
        display: "none",
    },
};

class HomeSectionPaymentProcessing extends React.Component {

    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <section style={sectionStyle}>
                <div style={backgroundRight}></div>
                <div style={containerStyle}>
                    <div style={linesLeft}></div>
                        <div style={contentStyle}>
                            <div style={counterStyle}>
                                07.
                            </div>
                            <div style={headerStyle}>
                                <img src={IcoPaymentProcessing} alt="logo"/>
                                <p style={headerTextStyle}>                                    
                                    {this.props.t('mainpage.payment_processing')}
                                </p>
                            </div>
                            <div>
                                <p style = {textGreySubheaderStyle}>
                                    {this.props.t('mainpage.payment_processing_title')}
                                </p>
                            </div>
                            <div>
                                <p style = {textNormalStyle}>
                                    {this.props.t('mainpage.payment_processing_desc')}
                                </p>
                                <p style = {textNormalStyle}>
                                    {this.props.t('mainpage.payment_processing_desc2')}
                                </p>
                            </div>
                            <ReadMoreBtn
                                className="orange_link"
                                style={linkContainer}
                                link="payment_processing"
                            >
                                {this.props.t('mainpage.btn_more')}
                            </ReadMoreBtn>
                        </div>

                    <div style={personalAccountBackground}>
                    </div>
                </div>
            </section>
        )
    }
}

export default withTranslation()(Radium(HomeSectionPaymentProcessing))