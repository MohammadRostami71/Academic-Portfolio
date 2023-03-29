import React from "react";
import {Box, CircularProgress, Typography} from "@mui/material";
import useStyles from "./useStyles";

const CustomLoading:React.FC = ({text}:any) => {
    const classes = useStyles();

    return(
        <Box className={classes.container}>
            <CircularProgress size='4rem'/>

            <Typography>{text ? text : 'Loading ...'}</Typography>
        </Box>
    )
};

export default CustomLoading;