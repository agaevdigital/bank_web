import '../../../App.css';
import '../../css/orange-links.css';
import React from 'react';
import MerchantAccountBackground from '../../images/backgrounds/merchant-account.png';
import IcoMerchantAccount from '../../images/icons/ico-13.png';
import { withTranslation } from 'react-i18next';
import ReadMoreBtn from './components/ReadMoreBtn';
import Radium from "radium";
import {
    backgroundBlack,
    containerStyle, counterStyleWhite,
    headerStyle,
    headerTextStyleWhite, sectionStyle, textGreySubheaderStyleWhite,
    textNormalStyleWhite
} from "./styles/PublicStyle";

const linesRight = {
    paddingTop: "40px",
    paddingBottom: "90px",
    marginRight: "80px",
    justifyContent: "flex-end",
    alignItems: "center",
    display: "flex",
    position: "relative",
    "@media (max-width: 800px)": {
        marginRight: "0px",
        justifyContent: "flex-start",
        paddingTop: "20px",
        paddingBottom: "40px",
    },
};

const contentStyle = {
    maxWidth: "560px"
};

const bankTransfersBackground = {
    backgroundImage: "url(" + MerchantAccountBackground + ")",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width:"455px",
    height: "400px",
    position:"absolute",
    top:"50%",
    marginTop:"-200px",
    left:"50%",
    marginLeft:"-600px",
    "@media (max-width: 1020px)": {
        display: "none",
    },
};

const linkContainer = {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    zIndex: 10
};

class HomeSectionMerchantAccount extends React.Component {

    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <section style={sectionStyle}>
                <div style={backgroundBlack}></div>
                <div style={containerStyle}>
                    <div style={linesRight}>
                        <div style={bankTransfersBackground}>
                        </div>

                            <div style={contentStyle}>
                                <div style={counterStyleWhite}>
                                    04.
                                </div>
                                <div style={headerStyle}>
                                    <img src={IcoMerchantAccount} alt="logo"/>
                                    <p style={headerTextStyleWhite}>
                                        {this.props.t('mainpage.merchant_account')}
                                    </p>
                                </div>
                                <div>
                                    <p style={textGreySubheaderStyleWhite}>
                                        {this.props.t('mainpage.merchant_account_title')}
                                    </p>
                                </div>
                                <div>
                                    <p style={textNormalStyleWhite}>
                                        {this.props.t('mainpage.merchant_account_desc')}
                                    </p>
                                </div>
                                <ReadMoreBtn
                                    className="orange_link"
                                    style={linkContainer}
                                    link="merchant_account"
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

export default withTranslation()(Radium(HomeSectionMerchantAccount))