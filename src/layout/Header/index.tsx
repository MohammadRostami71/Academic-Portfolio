import React, {useState} from "react";
import {Box, Tabs, Tab} from "@mui/material";
import {Link} from "react-router-dom";


import useStyles from "./useStyles";

const Header: React.FC = () => {
    const classes = useStyles();

    const [value, setValue] = useState('portfolio');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        console.log(newValue)
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
                <Tab component={Link} to='/' value="portfolio" label="Portfolio"/>
                <Tab component={Link} to='/about' value="about" label="About"/>
                <Tab component={Link} to='/blog' value="blog" label="Blog"/>
                <Tab component={Link} to='/article' value="article" label="Article"/>
                <Tab component={Link} to='/courses' value="courses" label="Courses"/>
                <Tab component={Link} to='/contactMe' value="contactme" label="Contact me"/>
                <Tab component={Link} to='/gallery' value="gallery" label="Gallery"/>
            </Tabs>
        </Box>
    );
};

export default Header;