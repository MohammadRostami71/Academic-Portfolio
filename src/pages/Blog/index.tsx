import React from "react";

import {Box} from "@mui/material";

import blogData from './../../config/blogData.json';
import BlogItem from "../../components/Blog/BlogItem";
import BlogTypes from './../../Types/blogTypes';
import useStyles from "./useStyles";

const Blog: React.FC = () => {
    const classes= useStyles;
    const blogInfo =blogData as BlogTypes[];

    return(
        <Box>
            {blogInfo.map((blog) => <BlogItem key={blog.id} id={blog.id} title={blog.title} description={blog.description} shortDescription={blog.shortDescription} date={blog.date} author={blog.author} category={blog.category}/>)}
        </Box>
    )
};

export default Blog;