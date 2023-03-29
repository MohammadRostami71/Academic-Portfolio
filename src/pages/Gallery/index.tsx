import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import {Box} from "@mui/material";
import useStyles from "./useStyles";

let listOfImages : string[] =[];

const Gallery: React.FC = () => {
    const classes= useStyles();
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();

    const importAll = (r:any) => {
        return r.keys().map(r);
    };

    useEffect(() => {
        // @ts-ignore
        listOfImages = importAll(require.context('../../assets/images/gallery', false, /\.(png|jpe?g|svg)$/));
    },[]);

    return(
        <Box className={classes.container}>
            <Box>
                <Slider asNavFor={nav2} ref={(slider1:any) => setNav1(slider1)}>
                    {listOfImages.map((image:string,index:number) => <img key={index} src={image} alt=' '/>)}
                </Slider>
            </Box>

            <Slider asNavFor={nav1}
                    ref={(slider2:any) => {
                        setNav2(slider2);
                    }}
                    slidesToShow={3}
                    swipeToSlide={true}
                    focusOnSelect={true}
                    className={classes.thumbnailSlider}
            >
                {listOfImages.map((image:string) => <img src={image} alt=' '/>)}
            </Slider>
        </Box>
    )
};

export default Gallery;