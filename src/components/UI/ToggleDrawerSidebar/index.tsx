import React, { useState } from "react";
import {
    Box,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText,
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import useStyles from "./useStyles";

const ToggleDrawerSidebar = () => {
    // @ts-ignore
    const classes = useStyles();

    const [openDrawer, setOpenDrawer] = useState<boolean | undefined>(false);

    return (
        <Box className={classes.container}>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
                    <MenuIcon />
            </IconButton>

            <Drawer
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            >
                <List>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to="/">Portfolio</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to="/blog">Blog</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to="/article">Article</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to="/courses">Courses</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to="/contactMe">Contact me</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to="/gallery">Gallery</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to="/about">about</Link>
                        </ListItemText>
                    </ListItem>
                </List>
            </Drawer>
        </Box>
    );
}
export default ToggleDrawerSidebar;