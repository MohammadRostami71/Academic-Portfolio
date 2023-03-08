import React from "react";
import {useNavigate} from "react-router-dom";

import {Box, Typography} from "@mui/material";

import useStyles from "./useStyles";

type Props = {
    id:number,
    title: string,
    shortDescription: string,
    date: string,
}

const BlogItem= ({title,shortDescription,date,id}:Props) => {
    const classes= useStyles();

    let navigate = useNavigate();

    const postDetailHandler = () => {
        navigate(`/blog/${id}`)
    }

    return(
        <Box className={classes.container} onClick={postDetailHandler}>
            <Typography variant={"subtitle1"}>{title}</Typography>
            <Typography variant={"subtitle2"}>{shortDescription}</Typography>
            <Typography variant={"caption"}>{date}</Typography>
        </Box>
    )
};

export default BlogItem;