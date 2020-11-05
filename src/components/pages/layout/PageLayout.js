import React  from 'react';
import AppBarHome from 'components/pages/home/AppBarHome';
import HomeFooter from 'components/pages/home/HomeFooter';
import { Box } from '@material-ui/core';
import Radium from "radium";
import {containerStyle} from "../home/styles/PublicStyle";


const PageLayout = ({ children }) => {
    const box = {
        marginTop: "100px",
        paddingBottom: "40px",
    }

    return (
        <div className="App">

            <header className="App-header">
                <AppBarHome />
            </header>
            <div style={containerStyle}>
            <Box style={box} flex="1" display="flex" justifyContent="center">
                {children}
            </Box>
            </div>
            <HomeFooter />
        </div>)
}

export default Radium(PageLayout);