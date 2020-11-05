import '../../../App.css';
import React from 'react';
import DonationBackground from '../../images/backgrounds/xx.png';
import IcoDonation from '../../images/icons/ico-21.png';
import { withTranslation } from 'react-i18next';
import ReadMoreBtn from './components/ReadMoreBtn';
import Radium from "radium";
import {
    backgroundBlack,
    containerStyle, counterStyle, counterStyleWhite,
    headerStyle,
    headerTextStyleWhite,
    sectionStyle, textGreySubheaderStyle, textGreySubheaderStyleWhite,
    textNormalStyleWhite
} from "./styles/PublicStyle";

const linkContainer = {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    zIndex: 10
};

const contentStyle = {
    maxWidth: "590px",
    padding:"50px 0",
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

const donationBackground = {
    background: "url(" + DonationBackground + ")",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "560px",
    height: "386px",
    position: "absolute",
    top: "50%",
    marginTop: "-193px",
    left: "50%",
    marginLeft: "-740px",
    "@media (max-width: 995px)": {
        display: "none",
    },
};

class HomeSectionDonation extends React.Component {

    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <section style={sectionStyle}>
                <div style={backgroundBlack}></div>
                <div style={containerStyle}>
                    <div style={donationBackground}>
                    </div>
                    <div style={contentStyle}>
                        <div style={counterStyleWhite}>
                            12.
                        </div>
                        <div style={headerStyle}>
                            <img src={IcoDonation} alt="logo"/>
                            <p style={headerTextStyleWhite}>
                                {this.props.t('mainpage.donation')}
                            </p>
                        </div>
                        <div>
                            <p style={textGreySubheaderStyleWhite}>
                                {this.props.t('mainpage.donation_title')}
                            </p>
                        </div>
                        <div>
                            <p style={textNormalStyleWhite}>
                                {this.props.t('mainpage.donation_point1')}
                            </p>
                            <p style={textNormalStyleWhite}>
                                {this.props.t('mainpage.donation_point2')}
                            </p>
                            <p style={textNormalStyleWhite}>
                                {this.props.t('mainpage.donation_point3')}
                            </p>
                        </div>
                        <ReadMoreBtn
                            className="orange_link"
                            style={linkContainer}
                            link="donations"
                        >
                            {this.props.t('mainpage.btn_more')}
                        </ReadMoreBtn>
                    </div>
                </div>
            </section>
        )
    }
}

export default  withTranslation()(Radium(HomeSectionDonation))