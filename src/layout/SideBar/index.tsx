import React from "react";

import {Box} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';

import {TwitterIcon,TelegramIcon, TwitterShareButton,TelegramShareButton,LinkedinShareButton,LinkedinIcon,EmailIcon,EmailShareButton,
    WhatsappShareButton,WhatsappIcon} from "react-share";
import {email, linkedin, telegram, twitter, whatsapp} from "../../config/socialMedia";
import useStyles from "./useStyles";
import {useNavigate} from "react-router-dom";

const SideBar: React.FC = () => {
    const classes = useStyles();
    const title = 'GitHub';
    const navigate = useNavigate();
    return (
        <Box className={classes.sideBarMainContainer}>
            <Box>
                <HomeIcon color="primary" fontSize='large' onClick={() => navigate('/')}/>
            </Box>

            <Box>
                <TwitterShareButton
                    url={twitter}
                    title={title}
                >
                    <TwitterIcon size={32} round />
                </TwitterShareButton>

                <TelegramShareButton
                    url={telegram}
                    title={title}
                >
                    <TelegramIcon size={32} round />
                </TelegramShareButton>

                <WhatsappShareButton
                    url={whatsapp}
                    title={title}
                    separator=":: "
                >
                    <WhatsappIcon size={32} round />
                </WhatsappShareButton>

                <EmailShareButton
                    url={email}
                    subject={title}
                    body="body"
                >
                    <EmailIcon size={32} round />
                </EmailShareButton>

                <LinkedinShareButton url={linkedin}>
                    <LinkedinIcon size={32} round />
                </LinkedinShareButton>
            </Box>
        </Box>
    )
};

export default SideBar;