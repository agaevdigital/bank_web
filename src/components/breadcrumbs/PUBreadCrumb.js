import React from "react";
import {
  Breadcrumbs as MUIBreadcrumbs,
  Link,
  Typography,
} from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { capitalize } from "@material-ui/core/utils";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  breadLink: {
    color: "#363636",
    fontSize: "14px",
    fontWeight: 400,
    // lineHeight: 33,
    cursor: "pointer",
  },
  breadLinkLast: {
    fontFamily: "ProximaNovaSemibold",
  },
});

// make breadcrumbs name beautiful
const routesNames = {
  plasticcard: "VISA / MasterCard",
  banktransfer: "Bank Transfer",
  accountdetails: "Account Details",
  createaccount: "Create Account",
  addfunds: "Add Funds",
  sendfunds: "Send Funds",
  applegooglepay: "Google pay / Apple pay",
  userprofile: "User Profile",
  kyc: "KYC",
  createrecepient: 'Create Recepient'
};

const regularText = ["kyc"];

const PUBreadCrumb = (props) => {
  const {
    history,
    location: { pathname },
  } = props;
  const classes = useStyles();
  const pathnames = pathname.split("/").filter((x) => x);


  const makePath = (index) => {
    let path = `/${pathnames.slice(0, index + 1).join("/")}`;


    if (pathnames.includes("transfers") && index > 1) {
      props.location.search && (path = path + props.location.search);
    }

    return path;
  };

  if (pathnames.length <= 1)
    return <div style={{ marginTop: "50px", marginBottom: "30px" }} />;
  return (
    <div style={{ marginTop: "50px", marginBottom: "30px" }}>
      <MUIBreadcrumbs
        aria-label="breadcrumb"
        separator={
          <NavigateNextIcon style={{ color: "#ff9b0f" }} fontSize="small" />
        }
      >
        {/* {pathnames.length > 0 ? (
          <Link onClick={() => history.push("/dashboard")}>Home</Link>
        ) : (
          <Typography > Home </Typography>
        )} */}

        {pathnames.map((name, index) => {
          const routeTo = makePath(index);
          const isLast = index === pathnames.length - 1;
          const routeName = routesNames[name] ? routesNames[name] : name;


          if (isLast || regularText.includes(name)) {
            return (
              <Typography
                key={name}
                className={`${classes.breadLink} ${classes.breadLinkLast}`}
              >
                {capitalize(routeName)}
              </Typography>
            );
          }

          return (
            <Link
              key={name}
              onClick={() => history.push(routeTo)}
              className={classes.breadLink}
            >
              <span>{capitalize(routeName)}</span>
            </Link>
          );

          // return isLast || regularText.includes(name) ? (
          //   <Typography
          //     key={name}
          //     className={`${classes.breadLink} ${classes.breadLinkLast}`}
          //   >
          //     {capitalize(routeName)}
          //   </Typography>
          // ) : (
          //   <Link
          //     key={name}
          //     onClick={() => history.push(routeTo)}
          //     className={classes.breadLink}
          //   >
          //     <span>{capitalize(routeName)}</span>
          //   </Link>
          // );
        })}
      </MUIBreadcrumbs>
    </div>
  );
};

export default withRouter(PUBreadCrumb);
