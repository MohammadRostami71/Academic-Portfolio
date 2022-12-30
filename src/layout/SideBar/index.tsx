import React from "react";

import {Box} from "@mui/material";

import HomeIcon from '@mui/icons-material/Home';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

import useStyles from "./useStyles";

const SideBar: React.FC = () => {
    const classes = useStyles();

    return (
        <Box className={classes.sideBarMainContainer}>
            <Box>
                <HomeIcon color="action"/>
            </Box>
            <Box>
                <TwitterIcon color="action"/>
                <TelegramIcon color="action"/>
                <AlternateEmailIcon color="action"/>
                <LinkedInIcon color="action"/>
            </Box>
        </Box>
    )
};

export default SideBar;