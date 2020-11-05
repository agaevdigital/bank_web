
import "../../css/orange-links.css";
import React from "react";
import LinesLeft from "../../images/lines-left.png";
import PartnerProgramsBackground from "../../images/backgrounds/partner-programs.png";
import IcoPartnerPrograms from "../../images/icons/ico-25.png";
import { withTranslation } from "react-i18next";
import ReadMoreBtn from "./components/ReadMoreBtn";
import {
  backgroundRight,
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
  alignItems: "flex-start",
};

const linesLeft = {
  width: "600px",
  height:"100%",
  background: "url(" + LinesLeft + ")",
  backgroundPosition: "top left",
  backgroundRepeat: "no-repeat",
  position:"absolute",
  left:"0px",
  top:"0px",
};

const contentStyle = {
  maxWidth: "544px",
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
  background: "url(" + PartnerProgramsBackground + ")",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  width: "384px",
  height: "460px",
  position: "absolute",
  top: "50%",
  marginTop: "-230px",
  left: "50%",
  marginLeft: "140px",
  "@media (max-width: 995px)": {
    display: "none",
  },
};

const markerStyle = {
  color: "#FF9B0F",
  fontFamily: "ProximaNova, sans-serif",
  fontSize: "16px",
  paddingLeft:"15px",
};

class HomeSectionPartnerProgram extends React.Component {
  // constructor(props) {
  //     super(props);
  // }

  render() {
    return (
        <section style={sectionStyle}>
          <div style={backgroundRight}><div style={linesLeft}></div></div>
          <div style={containerStyle}>
            <div style={contentStyle}>
              <div style={counterStyle}>11.</div>
              <div style={headerStyle}>
                <img src={IcoPartnerPrograms} alt="logo" />
                <p style={headerTextStyle}>
                  {this.props.t("mainpage.partner_programs")}
                </p>
              </div>
              <div>
                <p style={textGreySubheaderStyle}>
                  {this.props.t("mainpage.partner_programs_title")}
                </p>
              </div>
              <div>
                <ol style={markerStyle}>
                  <li>
                    <span style={textNormalStyle}>
                      {this.props.t("mainpage.partner_programs_point1")}
                    </span>
                  </li>
                  <li>
                    <span style={textNormalStyle}>
                      {this.props.t("mainpage.partner_programs_point2")}
                    </span>
                  </li>
                </ol>
              </div>
              <ReadMoreBtn
                className="orange_link"
                style={linkContainer}
                link={"partner_programs"}
              >
                {this.props.t("mainpage.btn_more")}
              </ReadMoreBtn>
              {/* <div className="orange_link" style={linkContainer}>
                <a
                  className="orange_link"
                  href="/partner_programs"
                  style={{ display: "flex", flexDirection: "row" }}
                >
                  <div className="arrow-min" />
                </a>
              </div> */}
            </div>
          <div style={personalAccountBackground}></div>
          </div>
        </section>
    );
  }
}

export default withTranslation()(Radium(HomeSectionPartnerProgram))
