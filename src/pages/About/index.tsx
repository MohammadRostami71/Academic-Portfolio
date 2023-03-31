import React, {useState} from "react";
import 'animate.css';
import {Box, Typography} from "@mui/material";
import aboutMe from "../../config/aboutMe";

import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import useStyles from "./useStyles";

const About: React.FC = () => {
    const classes= useStyles();
    const [numPages, setNumPages] = useState<number | null>(null);
    const [pageNumber, setPageNumber] = useState<number>(1);

    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

    const {personalInformation,educationalInformation,workingInformation,moreInformation,address} = aboutMe;

    function onDocumentLoadSuccess({ numPages }:any) {
        setNumPages(numPages);
    }

    function removeTextLayerOffset() {
        const textLayers = document.querySelectorAll(
            '.react-pdf__Page__textContent'
        );
        textLayers.forEach((layer) => {
            // @ts-ignore
            const { style } = layer;
            style.top = '0';
            style.left = '0';
            style.transform = '';
        });
    }

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
            <Box className={`${classes.cvBox} animate__animated animate__delay-1s animate__fadeInRight animate__delay-1`}>
                <Document file={""} onLoadSuccess={onDocumentLoadSuccess}>
                    <Document file="sample.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                        <Page pageNumber={pageNumber} onLoadSuccess={removeTextLayerOffset} />
                    </Document>
                </Document>
                <Typography variant={"caption"}>Page {pageNumber} of {numPages}</Typography>
            </Box>
        </Box>
    )
};

export default About;