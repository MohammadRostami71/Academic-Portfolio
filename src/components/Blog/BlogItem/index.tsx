import React from "react";
import {useNavigate} from "react-router-dom";

import {Box, Typography} from "@mui/material";

import blogTypes from "../../../Types/blogTypes";
import useImage from "../../../hook/useImage";
import CustomError from "../../UI/CustomError";
import Error from './../../../assets/images/UI/error.jpeg';
import useStyles from "./useStyles";

const BlogItem = ({title,date,id,category,author}:blogTypes) => {
    const classes= useStyles();

    let navigate = useNavigate();

    const postDetailHandler = () => {
        navigate(`/blog/${id}`)
    };

    const { loading, error, image } = useImage({fileName: id});

    if (loading) return <Typography variant={"subtitle1"}>Loading ...</Typography>
    if (error) return <CustomError image={Error} text='Some thing Wrong! please try again'/>

    return(
        <Box className={classes.container} onClick={postDetailHandler}>
            <Box className={classes.content}>
                <Box className={classes.information}>
                    <Typography variant={"subtitle1"}>{title}</Typography>
                    <Box>
                        <Typography variant={"caption"}>{author}</Typography>
                        <Typography variant={"caption"}>{date}</Typography>
                    </Box>
                </Box>
               <Box className={classes.category}>
                   <Typography  variant={"caption"}>{category}</Typography>
               </Box>
            </Box>
            <Box className={classes.imageBox}>
                <img src={image} alt=' '/>
            </Box>
        </Box>
    )
};

export default BlogItem;