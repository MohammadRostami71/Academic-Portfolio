import React from "react";
import {useParams} from "react-router-dom";

import { Box } from "@mui/material";
import blogData from "../../../config/blogData.json";
import BlogTypes from "../../../Types/blogTypes";

const PostDetail: React.FC = () => {
    let {id} = useParams()

    const blogInfo =blogData as BlogTypes[];

    const blog = blogInfo.find((blog) => blog.id === Number(id));

    return <Box>post detail</Box>
};

export default PostDetail;