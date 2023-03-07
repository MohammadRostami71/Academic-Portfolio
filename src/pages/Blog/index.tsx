import React from "react";

import blogData from './../../config/blogData.json';
import useStyles from "./useStyles";
import {Box} from "@mui/material";

interface blog {
    title: string,
    id: number,
    shortDescription: string,
    description: string,
    date: string,
}

const Blog: React.FC = () => {
    const classes= useStyles;
    const blogInfo =blogData as blog[];

    return(
        <Box>
            {/*{blogInfo.map()}*/}
        </Box>
    )
};

export default Blog;