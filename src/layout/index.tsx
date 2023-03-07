import React, {ReactNode} from "react";
import {Box} from "@mui/material";
import SideBar from "./SideBar";
import useStyles from "./useStyles";
import Header from "./Header";

type Props = {
    children: ReactNode
}

const Layout: React.FC<Props> = ({children}) => {
    const classes = useStyles();

    return (
        <Box className={classes.layoutContainer}>
            <SideBar/>
            <Box className={classes.contentContainer}>
                <Box>
                    <Header/>
                </Box>
                <Box>
                    {children}
                </Box>
            </Box>
        </Box>
    )

};

export default Layout;