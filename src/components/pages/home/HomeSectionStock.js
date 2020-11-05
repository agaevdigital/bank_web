import '../../../App.css';
import '../../css/orange-links.css';
import React from 'react';
import LinesRight from '../../images/lines-right-v2.png';
import StockBackground from '../../images/backgrounds/stock.png';
import IcoStockSafe from '../../images/icons/ico-21.png';
import IcoFood from '../../images/icons/ico-22.png';
import IcoCoffee from '../../images/icons/ico-23.png';
import { withTranslation } from 'react-i18next';
import ReadMoreBtn from './components/ReadMoreBtn';
import {
    backgroundBlack,
    containerStyle, counterStyleWhite,
    headerStyle,
    headerTextStyleWhite,
    sectionStyle, textGreySubheaderStyleWhite, textNormalStyleWhite
} from "./styles/PublicStyle";
import Radium from "radium";

const linkContainer = {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start"
};

const linesRight = {
    background: "url(" + LinesRight + ")",
    backgroundPosition: "left -1000px bottom -260px",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
    justifyContent: "flex-start",
    display: "flex"
};

const contentStyle = {
    maxWidth: "636px",
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

const textSubheaderHolder = {
    position: 'relative',
    zIndex: "10",
    backgroundColor: "#2b3241",
    maxWidth: "520px",
};

const examplesStyle = {    
    display: "flex",
    alignItems: "center",
    marginTop: "20px",
    "@media (max-width: 425px)": {
        flexDirection: "column",
        alignItems: "flex-start",
    },
};

const exampleYellowHeader = {
    color: "#FF9B0F",
    fontSize: "14px",
    fontFamily: 'ProximaNova, sans-serif',
};



const stockBackground = {
    background: "url(" + StockBackground + ")",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "474px",
    height: "526px",
    position: "absolute",
    top: "50%",
    marginTop: "-283px",
    left: "50%",
    marginLeft: "-700px",
    "@media (max-width: 1200px)": {
        display: "none",
    },
};

const squareBracketStyle = {
    border: "5px solid #fff",
    height: "46px",
    width: "200px",
    position: "absolute",
    zIndex: "1",
    opacity: "0.05",
    top: '10px',
    left: '5px'
};

const squareBracketStyleInner = {
    position: 'absolute',
    top: '-5px',
    bottom: '-5px',
    right: '-5px',
    width: '95%',
    background: '#2b3241'
}

const icoStyle = {
    display: "block",
    maxWidth: "64px",
    maxHeight: "64px",
    minWidth: "64px",
    minHeight: "64px",
};

const exampleTextStyle = {
    color: "#fff",
    fontSize: "16px",
    fontFamily: 'ProximaNova, sans-serif',
    margin: 0,
    paddingBottom: "0",
    backgroundColor: "#2b3241",
    opacity: "0.9",
    paddingLeft: "16px",
    "@media (max-width: 425px)": {
        paddingLeft: "0px",
        marginTop: "15px",
    },
};

class HomeSectionStock extends React.Component {

    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <section style={sectionStyle}>
                <div style={backgroundBlack}></div>
                <div style={containerStyle}>
                    <div style={stockBackground}>
                    </div>
                        <div style={contentStyle}>
                            <div style={counterStyleWhite}>
                                10.
                            </div>
                            <div style={headerStyle}>
                                <img src={IcoStockSafe} alt="logo"/>
                                <p style={headerTextStyleWhite}>
                                    {this.props.t('mainpage.stock')}
                                </p>
                            </div>
                            <div style={textSubheaderHolder}>
                                <div style={squareBracketStyle}>
                                    <span style={squareBracketStyleInner}></span>
                                </div>
                                <p style={textGreySubheaderStyleWhite}>
                                    {this.props.t('mainpage.stock_title')}
                                </p>
                                <p style={textNormalStyleWhite}>
                                    {this.props.t('mainpage.stock_desc')}
                                </p>
                            </div>
                            <div style={exampleYellowHeader}>
                                <p>
                                    {this.props.t('mainpage.stock_example')}
                                </p>
                            </div>

                            <div style={examplesStyle}>
                                <img src={IcoFood} alt="logo" style={icoStyle}/>
                                <p style={exampleTextStyle}>
                                    {this.props.t('mainpage.stock_example_point1')}
                                </p>
                            </div>
                            <div style={examplesStyle}>
                                <img src={IcoCoffee} alt="logo" style={icoStyle}/>
                                <p style={exampleTextStyle}>
                                    {this.props.t('mainpage.stock_example_point2')}
                                </p>
                            </div>
                            <ReadMoreBtn link={'stock'}
                                         style={linkContainer}>{this.props.t('mainpage.btn_more')}</ReadMoreBtn>
                            {/* <div
                                        className="orange_link"
                                        style={linkContainer}>
                                        <a
                                            className="orange_link"
                                            href="/stock"
                                            style={{display: "flex", flexDirection:"row", alignItems: 'center'}}
                                        >
                                                {this.props.t('mainpage.btn_more')}

                                            <div className="arrow-min" style={{marginTop: '0'}} />
                                        </a>
                                    </div> */}
                        </div>
                </div>
            </section>
        )
    }
}

export default withTranslation()(Radium(HomeSectionStock))