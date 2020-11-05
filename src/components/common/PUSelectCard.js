import React from "react";
import {
  ListItemIcon,
  MenuList,
  MenuItem,
  ClickAwayListener,
  Grow,
  IconButton,
  Paper,
  Popper,
  makeStyles,
} from "@material-ui/core";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";



// card icons
import VisaIcon from "../images/icons/ico_visa.png";
import MastercardIcon from "../images/icons/ico_mastercard.png";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0",
    display: "flex",
    alignItems: "center",
    width: "100%",
    borderRadius: 0,
    border: `1px solid ${theme.palette.pu.borderColor}`,
  },
  input: {
    flex: 1,
  },
  iconButton: {
    padding: 10,
    color: theme.palette.pu.accent,
    width: "25px",
    height: "35px",
    borderRadius: 0,
    marginLeft: "5px",
  },
  menuOpen: {
    transform: "rotate(180deg)",
  },
  cardNumber: {
    display: 'block',
    width:'100%',
    fontSize: 16,
    paddingLeft: 10,
    color: 'currentColor'
  },
  cardNumberDefault: {
    color: 'rgba(147, 141, 141, 0.87)',
  }
}));

const CardIcon = ({ type }) => {
  return (
    <ListItemIcon style={{ marginLeft: "auto", justifyContent: "flex-end" }}>
      <img
        src={type === 1 ? VisaIcon : MastercardIcon}
        width="35"
        alt="Card Icon"
      />
    </ListItemIcon>
  );
};

const PUSelectCard = ({ currentCard, cardSelectChange, cardsList }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const { cardnumber, cardtypecode } = currentCard;
  const defaultCardnumber = "1111 2222 3333 4444";

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const cardChangeHandler = (e, card) => {
    handleClose(e);
    cardSelectChange(card);
  };

  const formatCardNum = (cardNum) => {
    return cardNum.match(/.{1,4}/g).join(" ");
  };

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <Paper
        elevation={0}
        component="form"
        className={classes.root}
        ref={anchorRef}
      >
        <span className={`${classes.cardNumber} ${!cardnumber ? classes.cardNumberDefault : ''}`}>{cardnumber ? formatCardNum(cardnumber) : defaultCardnumber}</span>
        {cardtypecode && (
          <img
            src={cardtypecode === 1 ? VisaIcon : MastercardIcon}
            width="35"
            alt="Card Icon"
          />
        )}

        <IconButton
          className={`${classes.iconButton} ${open ? classes.menuOpen : null}`}
          onClick={handleToggle}
        >
          <ExpandMoreIcon />
        </IconButton>
      </Paper>
      <Popper
        style={{ width: "100%", zIndex: "99" }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: "bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open} id="menu-list-grow">
                  {cardsList.map((card, index) => {
                    return (
                      <MenuItem
                        onClick={(e) => cardChangeHandler(e, card)}
                        key={index}
                      >
                        {formatCardNum(card.cardnumber)}
                        <CardIcon type={card.cardtypecode} />
                      </MenuItem>
                    );
                  })}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};

export default PUSelectCard;
