import React, {useEffect, useState} from "react";
import {useLocation, useNavigate} from 'react-router-dom'
import {Box, Tabs, Tab, useMediaQuery} from "@mui/material";
import useStyles from "./useStyles";
import {useTheme} from "@mui/styles";
import ToggleDrawerSidebar from "../../components/UI/ToggleDrawerSidebar";

const Header: React.FC = () => {
    const classes = useStyles();

    const theme = useTheme();
    // @ts-ignore
    const isMobile = useMediaQuery(theme?.breakpoints.down("md"));
    let navigate = useNavigate();

    const [value, setValue] = useState<string | null>('portfolio');

    const location = useLocation()
    useEffect(() => {
        setValue(`${window.location.pathname.split('/')[1]}`)
    }, [location])

    const handleChange = (event: React.SyntheticEvent, route: string): void => {
        setValue(route);
    };

    return (
        <Box className={classes.headerMainContainer}>
            {isMobile ? <ToggleDrawerSidebar/> : <Tabs
                value={value}
                onChange={handleChange}
                textColor="primary"
                indicatorColor='secondary'
                aria-label="secondary tabs example"
            >
                <Tab onClick={() => navigate('/portfolio')} value="portfolio" label="Portfolio"/>
                <Tab value="about" onClick={() => navigate('/about')} label="About"/>
                <Tab value="blog" onClick={() => navigate('/blog')} label="Blog"/>
                <Tab value="article" onClick={() => navigate('/article')} label="Article"/>
                <Tab value="courses" onClick={() => navigate('/courses')} label="Courses"/>
                <Tab value="contactme" onClick={() => navigate('/contactMe')} label="Contact me"/>
                <Tab value="gallery" onClick={() => navigate('/gallery')} label="Gallery"/>
            </Tabs> }

        </Box>
    );
};

export default Header;