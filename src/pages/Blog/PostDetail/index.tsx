import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {Box, Skeleton, Typography} from "@mui/material";
import ShareIcon from '@mui/icons-material/Share';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import blogData from "../../../config/blogData.json";
import BlogTypes from "../../../Types/blogTypes";
import useImage from "../../../hook/useImage";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import useStyles from "./useStyles";

const PostDetail: React.FC = () => {
    const classes= useStyles();
    const [saved,setSaved]=useState<boolean | undefined>(false)

    let {id} = useParams()

    const blogInfo =blogData as BlogTypes[];

    const blog = blogInfo.find((blog) => blog.id === Number(id));

    const { loading, error, image } = useImage({fileName: blog?.id as number});

    useEffect(() => {
        if (image) {
            const background = document.querySelector('.background-body') as HTMLElement;
            background.style.backgroundImage = `url(${image})`;
        }
    }, [image])

    const sharePostHandler =  ():void => {
        if (navigator){
            navigator.share({
                title:blog?.title,
                text:blog?.description,
                url:window.location.href
            })
        }else{
            toast.error('please check your browser and try again');
        }
    };

    const  items = JSON.parse(localStorage.getItem('blogPost') as string);
    const favouriteHandler = () => {
        if (items?.length) {
            if (items.includes(blog?.id)){
                localStorage.setItem('blogPost', JSON.stringify(items.filter((item:number) => item !== blog?.id)))
                setSaved(false)
                toast.info('post removed from your favorite')
            }else {
                localStorage.setItem('blogPost', JSON.stringify([...items, blog?.id]));
                setSaved(true)
                toast.success('post add to your favorite')
            }
        }else {
            localStorage.setItem('blogPost',JSON.stringify([blog?.id]))
            setSaved(true)
            toast.success('post add to your favorite')
        }
    };

    useEffect(() => {
        if (items?.includes(blog?.id)){
            setSaved(true)
        }else{
            setSaved(false)
        }
    },[])

    return (
        <Box className={classes.container}>
            <Box className={classes.categoryTitle}>
                <Typography variant={"h6"}>{blog?.category}</Typography>
                <Box>
                    <ShareIcon onClick={sharePostHandler}/>
                    {saved ? <BookmarkOutlinedIcon onClick={favouriteHandler}/> : <BookmarkBorderOutlinedIcon onClick={favouriteHandler}/>  }
                </Box>

            </Box>
            <Box className={classes.info}>
                <Typography variant={"subtitle2"}>2 minute read</Typography>
                <Typography variant={"caption"}>{blog?.date}</Typography>
            </Box>
            <Typography variant={"h2"} className={classes.title}>
                {blog?.title}
            </Typography>
            <Box className={classes.imageBox}>
                {loading ?  <Skeleton variant="rectangular" width={'100%'} height={'20rem'} /> : error ? <Typography>Oh! Some thing Wrong! cant loaded image </Typography> :<img src={image} alt=' '/> }
            </Box>
            <Typography variant={"h5"}>{blog?.description}</Typography>
    </Box>
    )
};

export default PostDetail;