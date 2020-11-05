import '../../../App.css';
import '../../css/orange-links.css';
import React from 'react';
import LinesLeft from '../../images/lines-left.png';
import PersonalAccountBackground from '../../images/backgrounds/personal-account.png';
import IcoPersonalAccount from '../../images/icons/ico-1.png';
import { withTranslation } from 'react-i18next';
import ReadMoreBtn from './components/ReadMoreBtn';
import Lines from "../../images/lines.png";
import Radium from "radium";
import {
    backgroundRight,
    containerStyle,
    headerTextStyle,
    headerStyle,
    textNormalStyle,
    counterStyle,
} from "./styles/PublicStyle";

export const sectionStyle = {
    width: "100wv",
    marginBottom:"45px",
    overflow: "hidden",
    position: "relative",
    "@media (max-width: 800px)": {
        marginBottom:"25px",
    },
}

const linesLeft = {
    background: "url(" + LinesLeft + ")",
    backgroundPosition: "left 0px top 0px",
    backgroundRepeat: "no-repeat",
};

const contentStyle = {
    marginLeft: "80px",
    textAlign: "left",
    maxWidth: "490px",
    position: "relative",
    padding:"70px 0",
    "@media (max-width: 800px)": {
        marginLeft: "0px",
        marginTop: "10px",
        maxWidth: "none",
        padding:"20px 0 40px 0",
    },
};

const textGreySubheaderStyle = {
    paddingTop: "0.8rem",
    color: "#363636",
    fontSize: "14px",
    fontFamily: 'ProximaNova, sans-serif',
    fontWeight: "bold",
    opacity: "0.8",
    "@media (max-width: 425px)": {
        paddingTop: "0px",
    },
};

const personalAccountBackground = {
    width: "600px",
    height: "100%",
    position: "absolute",
    top: "0px",
    left:"50%",
    marginLeft:"150px",
    background: "url(" + PersonalAccountBackground + ")",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    "@media (max-width: 1200px)": {
        display: "none",
    },
};

const linkContainer = {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start"
};

class HomeSectionPersonalAccount extends React.Component {

    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <section style={sectionStyle}>
                <div style={backgroundRight}></div>
                <div style={containerStyle}>
                    <div style={linesLeft}>
                        <div style={contentStyle}>
                            <div style={counterStyle}>
                                01.
                            </div>
                            <div style={headerStyle}>
                                <img src={IcoPersonalAccount} alt="logo"/>
                                <p style={headerTextStyle}>
                                    {this.props.t('mainpage.p_b_account')}
                                </p>
                            </div>
                            <div>
                                <p style={textGreySubheaderStyle}>
                                    {this.props.t('mainpage.p_b_account_title')}
                                </p>
                            </div>
                            <div>
                                <p style={textNormalStyle}>
                                    {this.props.t('mainpage.p_b_account_desc')}
                                </p>
                            </div>
                            <ReadMoreBtn
                                className="orange_link"
                                style={linkContainer}
                                link="personal_account">
                                {this.props.t('mainpage.btn_more')}
                            </ReadMoreBtn>
                        </div>
                    </div>
                    <div style={personalAccountBackground}>
                    </div>
                </div>
            </section>
        )
    }
}
export default  withTranslation()(Radium(HomeSectionPersonalAccount))