import lineLeft from "../../../images/backgrounds/line-left.png";

export const sectionStyle = {
    width: "100wv",
    margin:"45px 0",
    overflow: "hidden",
    position: "relative",
    "@media (max-width: 800px)": {
        margin:"25px 0",
    },
}

export const sectionPageStyle = {
    paddingTop: "100px",
    paddingBottom: "40px",
    position: "relative",
    "@media (max-width: 800px)": {
        paddingTop: "90px",
    },
}

export const containerStyle = {
    maxWidth: "1254px",
    margin: "0 auto",
    boxSizing:"border-box",
    padding: "0px 32px",
    "@media (max-width: 800px)": {
        padding: "0px 25px",
    },
}

export const headerTextStyle = {
    fontSize: "36px",
    color: "#363636",
    fontFamily: 'ProximaNova, sans-serif',
    marginLeft: "25px",
    marginTop: "0",
    marginBottom: "0",
    "@media (max-width: 425px)": {
        fontSize: "32px",
        marginLeft: "0px",
    },
};

export const headerTextStyleWhite = {
    fontSize: "36px",
    color: "#fff",
    fontFamily: 'ProximaNova, sans-serif',
    marginLeft: "25px",
    marginTop: "0",
    marginBottom: "0",
    "@media (max-width: 425px)": {
        fontSize: "32px",
        marginLeft: "0px",
    },
};

export const backgroundRight = {
    width: "100%",
    height: "100%",
    position: "absolute",
    left: "50%",
    marginLeft: "-595px",
    backgroundColor: "#ebf7f8",
    borderRadius: "32px",
    "@media (max-width: 1200px)": {
        left: "0",
        marginLeft: "0px",
    },
    "@media (max-width: 800px)": {
        borderRadius: "0px",
    },
}

export const backgroundLeft = {
    width: "100%",
    height: "100%",
    position: "absolute",
    right: "50%",
    marginRight: "-595px",
    backgroundColor: "#ebf7f8",
    borderRadius: "32px",
    "@media (max-width: 1200px)": {
        right: "0",
        marginRight: "0px",
    },
    "@media (max-width: 800px)": {
        borderRadius: "0px",
    },
}

export const backgroundBlack = {
    width: "100%",
    height: "100%",
    position: "absolute",
    right: "50%",
    marginRight: "-595px",
    background: "url(" + lineLeft + ")",
    backgroundPosition: "right center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "calc(50% + 595px) auto",
    backgroundColor: "#2B3241",
    borderRadius: "32px",
    "@media (max-width: 1200px)": {
        right: "0",
        marginRight: "0px",
    },
    "@media (max-width: 800px)": {
        borderRadius: "0px",
    },
}

export const headerStyle = {
    alignItems: "center",
    display: "flex",
    "@media (max-width: 425px)": {
        display: "block",
    },
};

export const textNormalStyle = {
    opacity: "0.7",
    color: "#363636",
    fontSize: "16px",
    fontFamily: 'ProximaNova, sans-serif',
    fontWeight: '700 !important',
    paddingTop: "0.4rem",
    paddingBottom: "0.5rem",
};

export const textNormalStyleWhite = {
    opacity: "0.7",
    color: "#fff",
    fontSize: "16px",
    fontFamily: 'ProximaNova, sans-serif',
    fontWeight: '700 !important',
    paddingTop: "0.4rem",
    paddingBottom: "0.5rem",
};

export const textGreySubheaderStyle = {
    paddingTop: "0.8rem",
    color: "#363636",
    fontSize: "14px",
    fontFamily: "ProximaNova, sans-serif",
    fontWeight: "bold",
    opacity: "0.8",
};

export const counterStyle = {
    fontSize: "70px",
    color: "#363636",
    fontFamily: "ProximaNova, sans-serif",
    letterSpacing: "-5px",
    opacity: "0.2",
    fontWeight: "bold",
};

export const textGreySubheaderStyleWhite = {
    paddingTop: "0.8rem",
    color: "#fff",
    fontSize: "14px",
    fontFamily: 'ProximaNova, sans-serif',
    fontWeight: "bold",
};

export const counterStyleWhite = {
    fontSize: "70px",
    color: "#fff",
    fontFamily: 'ProximaNova, sans-serif',
    letterSpacing: "-5px",
    opacity: "0.2",
    fontWeight: "bold",
    marginLeft: "-6px"
};