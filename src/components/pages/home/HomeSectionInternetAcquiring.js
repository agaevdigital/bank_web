import '../../../App.css';
import React from 'react';
import LinesLeft from '../../images/lines-left.png';
import PersonalAccountBackground from '../../images/backgrounds/internet-acquiring.png';
import IcoInternetAcquiring from '../../images/icons/ico-7.png';
import '../../css/orange-links.css';
import { withTranslation } from 'react-i18next';
import ReadMoreBtn from './components/ReadMoreBtn';
import {
    backgroundRight,
    containerStyle, counterStyle,
    headerStyle,
    headerTextStyle,
    sectionStyle, textGreySubheaderStyle, textNormalStyle
} from "./styles/PublicStyle";
import Radium from "radium";

const linesLeft = {
    background: "url(" + LinesLeft + ")",
    backgroundPosition: "left top",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
    position: "absolute",
    left:"0",
    top:"0",
};

const contentStyle = {
    maxWidth: "600px",
    position: "relative",
    paddingTop: "70px",
    paddingBottom: "100px",
    marginLeft: "80px",
    "@media (max-width: 800px)": {
        marginLeft: "0px",
        paddingTop: "20px",
        paddingBottom: "40px",
    },
};

const personalAccountBackground = {
    background: "url(" + PersonalAccountBackground + ")",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    width: "480px",
    height: "446px",
    position:"absolute",
    top: "50%",
    marginTop: "-223px",
    left:"50%",
    marginLeft: "180px",
    "@media (max-width: 1040px)": {
        display: "none",
    },
};

const linkContainer = {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start"
};

class HomeSectionInternetAcquiring extends React.Component {

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
                                05.
                            </div>
                            <div style={headerStyle}>
                                <img src={IcoInternetAcquiring} alt="logo"/>
                                <p style={headerTextStyle}>
                                    {this.props.t('mainpage.internet_acquiring')}
                                </p>
                            </div>
                            <div>
                                <p style = {textGreySubheaderStyle}>
                                    {this.props.t('mainpage.internet_acquiring_title')}
                                </p>
                            </div>
                            <div>
                                <p style = {textNormalStyle}>
                                    {this.props.t('mainpage.internet_acquiring_desc')}
                                </p>
                            </div>
                            <ReadMoreBtn
                                className="orange_link"
                                style={linkContainer}
                                link="internet_acquiring"
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
export default withTranslation()(Radium(HomeSectionInternetAcquiring))