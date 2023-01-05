import React, {useState} from "react";
import {useNavigate} from 'react-router-dom'
import {Box, Tabs, Tab} from "@mui/material";
import useStyles from "./useStyles";


const Header: React.FC = () => {
    const classes = useStyles();
    let navigate = useNavigate();

    const [value, setValue] = useState('portfolio');

    const handleChange = (event: React.SyntheticEvent, newValue: string): void => {
        setValue(newValue);
    };

    return (
        <Box className={classes.headerMainContainer}>
            <Tabs
                value={value}
                onChange={handleChange}
                textColor="primary"
                indicatorColor='secondary'
                aria-label="secondary tabs example"
            >
                <Tab onClick={() => navigate('/')} value="portfolio" label="Portfolio"/>
                <Tab value="about" onClick={() => navigate('/about')} label="About"/>
                <Tab value="blog" onClick={() => navigate('/blog')} label="Blog"/>
                <Tab value="article" onClick={() => navigate('/article')} label="Article"/>
                <Tab value="courses" onClick={() => navigate('/courses')} label="Courses"/>
                <Tab value="contactme" onClick={() => navigate('/contactMe')} label="Contact me"/>
                <Tab value="gallery" onClick={() => navigate('/gallery')} label="Gallery"/>
            </Tabs>
        </Box>
    );
};

export default Header;