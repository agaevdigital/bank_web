import '../../../App.css';
import '../../css/orange-links.css';
import React from 'react';
import LinesLeft from '../../images/lines-left.png';
import POSBackground from '../../images/backgrounds/pos.png';
import IcoPOS from '../../images/icons/ico-25.png';
import { withTranslation } from 'react-i18next';
import ReadMoreBtn from './components/ReadMoreBtn';
import Radium from "radium";
import {
    backgroundRight,
    containerStyle, counterStyle,
    headerStyle,
    headerTextStyle,
    sectionStyle, textGreySubheaderStyle, textNormalStyle
} from "./styles/PublicStyle";


const linkContainer = {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start"
};

const linesLeft = {
    background: "url(" + LinesLeft + ")",
    backgroundPosition: "left top",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "600px",
    height: "100%",
    position: "absolute",
    left:"0",
    top: "0",
};

const contentStyle = {
    maxWidth: "552px",
    padding:"50px 0",
    marginRight: "auto",
    marginLeft: "80px",
    position:"relative",
    "@media (max-width: 800px)": {
        maxWidth: "none",
        padding:"20px 0",
        paddingBottom: "40px",
        marginLeft: "0px",
    },
};

const personalAccountBackground = {
    background: "url(" + POSBackground + ")",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "650px",
    height: "406px",
    position: "absolute",
    top: "50%",
    marginTop: "-203px",
    left: "50%",
    marginLeft: "130px",
    "@media (max-width: 995px)": {
        display: "none",
    },
};

class HomeSectionPOS extends React.Component {

    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <section style={sectionStyle}>
                <div style={backgroundRight}>
                    <div style={linesLeft}></div>
                </div>
                <div style={containerStyle}>

                    <div style={contentStyle}>
                        <div style={counterStyle}>
                            09.
                        </div>
                        <div style={headerStyle}>
                            <img src={IcoPOS} alt="logo"/>
                            <p style={headerTextStyle}>
                                {this.props.t('mainpage.pos')}
                            </p>
                        </div>
                        <div>
                            <p style={textGreySubheaderStyle}>
                                {this.props.t('mainpage.pos_title')}
                            </p>
                        </div>
                        <div>
                            <p style={textNormalStyle}>
                                {this.props.t('mainpage.pos_desc')}
                            </p>
                        </div>
                        <ReadMoreBtn
                            className="orange_link"
                            style={linkContainer}
                            link="pos"
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

export default withTranslation()(Radium(HomeSectionPOS))