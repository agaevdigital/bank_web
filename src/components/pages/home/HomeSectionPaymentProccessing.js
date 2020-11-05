import '../../../App.css';
import React from 'react';
import LinesLeft from '../../images/lines-left.png';
import PaymentProccessingBackground from '../../images/backgrounds/payment-processing.png';
import IcoPaymentProccessing from '../../images/icons/ico-20.png';

const flexStyle = {
    position: "relative",
    width: "80%",
    height: "80%",
    justifyContent: "flex-start",
    display: "flex",
    borderRadius: "50px 0px 0px 50px",
    backgroundColor: "#ebf7f8",
};

const linesLeft = {
    background: "url(" + LinesLeft + ")",
    backgroundPosition: "left 0px top 0px",
    backgroundRepeat: "no-repeat",
};

const contentStyle = {
    marginTop: "50px",
    marginLeft: "90px",
    textAlign: "left",
    maxWidth: "490px"
};

const textOrangeStyle = {
    paddingBottom: "1.5rem",
    paddingTop: "1.4rem",
    color: "#FF9B0F",
    fontSize: "14px",
    fontFamily: 'ProximaNova, sans-serif',
    fontWeight: "bold"
};

const textGreySubheaderStyle = {
    // paddingBottom: "1.5rem",
    paddingTop: "0.8rem",
    color: "#363636",
    fontSize: "14px",
    fontFamily: 'ProximaNova, sans-serif',
    fontWeight: "bold",
    opacity: "0.8"
};

const wrapperStyle = {
    width: "100%",
    justifyContent: "flex-end",
    display: "flex",
    marginTop: "40px"
};

const counterStyle = {
    fontSize: "70px",
    color: "#363636",
    fontFamily: 'ProximaNova, sans-serif',
    letterSpacing: "-5px",
    opacity: "0.2",
    fontWeight: "bold"
};

const headerTextStyle = {
    fontSize: "2rem",
    color: "#363636",
    fontFamily: 'ProximaNova, sans-serif',
    marginLeft: "25px",
    marginTop: "10px",
    marginBottom: "0",
};

const headerStyle = {
    justifyContent: "flex-start",
    alignItems: "center !important",
    display: "flex",
};

const textNormalStyle = {
    opacity: "0.7",
    color: "#363636",
    fontSize: "14px",
    fontFamily: 'ProximaNova, sans-serif',
    fontWeight: '700 !important',
    paddingTop: "0.4rem",
    paddingBottom: "0.5rem",
};

const personalAccountBackground = {
    background: "url(" + PaymentProccessingBackground + ")",
    backgroundPosition: "left 0px top 40px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "402px 377px",
    marginLeft: "100px",
    minWidth: "500px",
    maxWidth: "600px",
    maxHeight: "420px"
};

export default class HomeSectionPaymentProccessing extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={wrapperStyle}>
                <div style={flexStyle}>
                    <div style={linesLeft}>
                        <div style={contentStyle}>
                            <div style={counterStyle}>
                                07.
                            </div>
                            <div style={headerStyle}>
                                <img src={IcoPaymentProccessing} alt="logo"/>
                                <p style={headerTextStyle}>
                                    Payment processing
                                </p>
                            </div>
                            <div>
                                <p style = {textGreySubheaderStyle}>
                                    Solution for banks and financial institutions - members of VISA and MASTERCARD, we offer the reliable solution for processing payments and payment cards
                                </p>
                            </div>
                            <div>
                                <p style = {textNormalStyle}>
                                    PAYSUNION offers modern technology and a wide range of processing services for acquirers and issuers.
                                </p>
                                <p style = {textNormalStyle}>
                                    We have unique set of processing services for managing the entire transaction processing cycle and card issuance. PAYSUNION's portfolio of services and advanced technologies allow the company to provide a reliable processing platform that can help you compete successfully in the financial environment.
                                </p>
                            </div>
                            <div>
                                <p style={textOrangeStyle}>
                                    More
                                </p>
                            </div>
                        </div>
                    </div>
                    <div style={personalAccountBackground}>
                    </div>
                </div>
            </div>

        )
    }
}