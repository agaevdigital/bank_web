import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import { Button } from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
// import proximaNovaTheme from '../themes/ProximaNova';
// import { Redirect } from 'react-router-dom';

import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';






const BtnProducts = withStyles({
    root: {
        background: '#2b3241',
        borderRadius: 50,
        border: 0,
        color: 'white',
        height: 36,
        padding: '0 20px',
        transition: 'box-shadow 0.2s linear',
        margin: '5px 5px 5px 5px',
        '&:hover': {
            boxShadow: '0 0 2px 5px #D7D8DB',
            background: '#2b3241',
        },
    },
    label: {
        textTransform: 'none'
    },
})(Button);

const getOptions = (translate) => {
    const options = [
        translate('mainpage.products_personal_account'),
        translate('mainpage.bank_transfers'),
        translate('mainpage.personal_bank'),
        translate('mainpage.merchant_account'),
        translate('mainpage.internet_acquiring'),
        translate('mainpage.cards_emission'),
        translate('mainpage.payment_processing'),
        translate('mainpage.payment_terminals'),
        translate('mainpage.pos'),
        translate('mainpage.stock'),
        translate('mainpage.partner_programs'),
        translate('mainpage.donation'),
    ];
    return options;
}


const urls = [
    'personal_account',
    'bank_transfers',
    'personal_bank_cards',
    'merchant_account',
    'internet_acquiring',
    'cards_emission',
    'payment_processing',
    'payments_terminal',
    'pos',
    'stock',
    'partner_programs',
    'donations'
];

export default function SplitButton() {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const {t} = useTranslation();
    const history = useHistory();
    //const [selectedIndex, setSelectedIndex] = React.useState(-1);

    const handleMenuItemClick = (event, index) => {
        //setSelectedIndex(index);
        //window.location.replace(urls[index]);
        history.push(urls[index]);        
        setOpen(false);
        // console.info("You clicked " + index + "and selectedIndex = " + selectedIndex);
    };

    const handleToggle = () => {
        setOpen(prevOpen => !prevOpen);
    };

    const handleClose = event => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    return (
        <div style={{zIndex: 2}}>
            <BtnProducts
                aria-controls={open ? 'split-button-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-label="select merge strategy"
                aria-haspopup="menu"
                onClick={handleToggle}
                ref={anchorRef}
            >
                {t('mainpage.products')}
            </BtnProducts>
            <Popper className="papper-list" open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                {({TransitionProps, placement}) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                        }}
                    >
                        <Paper style={{marginTop: 10}}>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList id="split-button-menu">
                                    {getOptions(t).map((option, index) => (
                                        <MenuItem
                                            key={option}
                                            onClick={event => handleMenuItemClick(event, index)}
                                        >
                                            {option}
                                        </MenuItem>
                                    ))}
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </div>
    );
}
