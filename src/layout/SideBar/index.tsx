import React from "react";

import {Box} from "@mui/material";

import HomeIcon from '@mui/icons-material/Home';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

import socialConfig from './../../config/socialMedia.json';
import useStyles from "./useStyles";

interface socialMedia {
    title: string,
    id: number,
    url: string
}

const SideBar: React.FC = () => {
    const classes = useStyles();
    const mediaData =socialConfig as socialMedia[];

    const socialClickHandler = (id:number)=> {
        const socialUrl = mediaData.find(md => md.id === id)?.url;
        window.open(socialUrl,'_blank')
    };

    return (
        <Box className={classes.sideBarMainContainer}>
            <Box>
                <HomeIcon color="action"/>
            </Box>

            <Box>
                <TwitterIcon onClick={() => socialClickHandler(1)} color="action"/>

                <TelegramIcon onClick={() => socialClickHandler(2)} color="action"/>

                <AlternateEmailIcon onClick={() => socialClickHandler(3)} color="action"/>

                <LinkedInIcon onClick={() => socialClickHandler(4)} color="action"/>
            </Box>
        </Box>
    )
};

export default SideBar;