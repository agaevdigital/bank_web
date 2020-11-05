import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { performLogout } from "utils/auth";
import { useHistory } from "react-router-dom";

import logoutIcon from 'components/images/icons/logout.png'

const BtnLogout = withStyles({
  root: {
    background: "#FF9B0F",
    borderRadius: 50,
    border: 0,
    color: "white",
    height: 30,
    width: 90,
    padding: "0 20px",
    transition: "box-shadow 0.2s linear",
    margin: "5px 5px 5px 5px",
    "&:hover": {
      boxShadow: "0 0 2px 5px #FFECD2",
      background: "#FF9B0F",
    },
  },
  label: {
    textTransform: "none",
    fontSize: "14px",
    fontWeight: "300",
  },
})(Button);

const LogoutButton = (props) => {
  const history = useHistory();

  const redirectToLogin = () => {
    history.push("/login");
  };

  const logoutClick = () => {
    performLogout(redirectToLogin);
  };
  return (
    <div>
      <BtnLogout {...props} onClick={logoutClick} endIcon={<img src={logoutIcon} />}>
        Logout
      </BtnLogout>
    </div>
  );
};

export default LogoutButton;
