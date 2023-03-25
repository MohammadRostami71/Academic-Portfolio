import React from "react";
import 'animate.css';
import {Box, Typography} from "@mui/material";
import aboutMe from "../../config/aboutMe";
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

import useStyles from "./useStyles";

const About: React.FC = () => {
    const classes= useStyles();

    const {personalInformation,educationalInformation,workingInformation,moreInformation,address} = aboutMe;

    return(
        <Box className={classes.container}>
            <Box className={classes.content}>
                <Typography className='animate__animated animate__delay-1s animate__fadeInLeft animate__delay-1' variant="h5">Personal Information</Typography>
                <Typography className='animate__animated animate__delay-1s animate__fadeInLeft animate__delay-2' variant="body2">{personalInformation}</Typography>

                <Typography className='animate__animated animate__delay-1s animate__fadeInLeft animate__delay-3' variant="h5">Educational Information</Typography>
                <Typography className='animate__animated animate__delay-1s animate__fadeInLeft animate__delay-4' variant="body2">{educationalInformation}</Typography>

                <Typography className='animate__animated animate__delay-1s animate__fadeInLeft animate__delay-5' variant="h5">Working Information</Typography>
                <Typography className='animate__animated animate__delay-1s animate__fadeInLeft animate__delay-6' variant="body2">{workingInformation}</Typography>

                <Typography className='animate__animated animate__delay-1s animate__fadeInLeft animate__delay-7' variant="h5">more Information</Typography>
                <Typography className='animate__animated animate__delay-1s animate__fadeInLeft animate__delay-8' variant="body2">{moreInformation}</Typography>

                <Typography className='animate__animated animate__delay-1s animate__fadeInLeft animate__delay-9' variant="h5">Address</Typography>
                <Typography className='animate__animated animate__delay-1s animate__fadeInLeft animate__delay-10' variant="body2">{address}</Typography>
            </Box>
            <Box   style={{
                border: '1px solid rgba(0, 0, 0, 0.3)',
                width: '60rem',
            }} className={`${classes.cvBox} animate__animated animate__delay-1s animate__fadeInRight animate__delay-1`}>
                <Viewer fileUrl='/assets/file/sample2.pdf'/>
            </Box>
        </Box>
    )
};

export default About;