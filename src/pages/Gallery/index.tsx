import React, { useState} from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import {Box} from "@mui/material";
import image1 from '../../assets/images/gallery/slide-1.jpg'
import image2 from '../../assets/images/gallery/slide-2.jpg'
import image3 from '../../assets/images/gallery/slide-3.jpg'
import image4 from '../../assets/images/gallery/slide-4.jpg'
import useStyles from "./useStyles";

const Gallery: React.FC = () => {
    const classes= useStyles();
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();

    const images: any = [image1,image2,image1,image3,image4];

    return(
        <Box className={classes.container}>
            <Box>
                <Slider asNavFor={nav2} ref={(slider1:any) => setNav1(slider1)}>
                    {images.map((image:string) => <img src={image} alt=' '/>)}
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
                {images.map((image:string) => <img src={image} alt=' '/>)}
            </Slider>
        </Box>
    )
};

export default Gallery;