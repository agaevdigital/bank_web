import '../../../App.css';
import React from 'react';
import LinesRight from '../../images/backgrounds/line-white.png';
import CardEmissionsBackground from '../../images/backgrounds/cards-emission.png';
import IcoCardEmissions from '../../images/icons/ico-13.png';
import '../../css/orange-links.css';
import { withTranslation } from 'react-i18next';
import ReadMoreBtn from './components/ReadMoreBtn';
import {
    backgroundLeft,
    containerStyle, counterStyle,
    headerStyle,
    headerTextStyle,
    sectionStyle, textGreySubheaderStyle, textNormalStyle
} from "./styles/PublicStyle";
import Radium from "radium";

const linkContainer = {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end"
};

const linesRight = {
    background: "url(" + LinesRight + ")",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize:"cover",
    width: "calc(50% + 595px)",
    height: "100%",
    position: "absolute",
    left:"0",
    top: "0",
    borderRadius: "32px",
};

const contentStyle = {
    maxWidth: "585px",
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

const bankTransfersBackground = {
    background: "url(" + CardEmissionsBackground + ")",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "407px",
    height: "440px",
    position: "absolute",
    top: "50%",
    marginTop: "-220px",
    left: "50%",
    marginLeft: "-600px",
    "@media (max-width: 995px)": {
        display: "none",
    },
};

class HomeSectionCardEmission extends React.Component {

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
                    <div style={contentStyle}>
                        <div style={counterStyle}>
                            06.
                        </div>
                        <div style={headerStyle}>
                            <img src={IcoCardEmissions} alt="logo"/>
                            <p style={headerTextStyle}>
                                {this.props.t('mainpage.cards_emission')}
                            </p>
                        </div>
                        <div>
                            <p style={textGreySubheaderStyle}>
                                {this.props.t('mainpage.cards_emission_title')}
                            </p>
                        </div>
                        <div>
                            <p style={textNormalStyle}>
                                {this.props.t('mainpage.cards_emission_desc')}
                            </p>
                        </div>
                        <ReadMoreBtn
                            className="orange_link"
                            style={linkContainer}
                            link="cards_emission"
                        >
                            {this.props.t('mainpage.btn_more')}
                        </ReadMoreBtn>
                    </div>
                </div>
            </section>
        )
    }
}
export default withTranslation()(Radium(HomeSectionCardEmission))