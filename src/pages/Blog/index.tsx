import React, {useEffect, useState} from "react";

import {
    Box,
    Chip,
    FormControl,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
    SelectChangeEvent,
    Typography
} from "@mui/material";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

import blogData from './../../config/blogData.json';
import BlogItem from "../../components/Blog/BlogItem";
import BlogTypes from './../../Types/blogTypes';
import useStyles from "./useStyles";

const Blog: React.FC = () => {
    const classes= useStyles();
    const [categories,setCategories]=useState<string[]>([]);
    const [selectedCategory,setSelectedCategory]= useState<string | undefined>('')
    const blogInfo =blogData as BlogTypes[];

   useEffect(() => {
       setCategories([...new Set(blogInfo.map(bi => bi.category))]);
   },[]);

    const handleChange = (event: SelectChangeEvent) => {
        const {
            target: { value },
        } = event;
        setSelectedCategory(value);
    };

    const filteredPost = selectedCategory === '' ?
        blogInfo:blogInfo.filter(blog => blog.category === selectedCategory) as unknown as BlogTypes[] ;

    return(
        <Box className={classes.container}>
            <Box className={classes.categoryBox}>
                <FormControl sx={{ m: 1, width: 300 }}>
                    <InputLabel>Category</InputLabel>
                    <Select
                        value={selectedCategory}
                        onChange={handleChange}
                        input={<OutlinedInput label="Chip" />}
                        renderValue={(selected) => (
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                    <Chip key={selected} label={selected} />
                            </Box>
                        )}
                    >
                        {categories.map((category,index) => (
                            <MenuItem
                                key={index}
                                value={category}
                            >
                                {category}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                {selectedCategory!== '' && <CloseOutlinedIcon onClick={() => setSelectedCategory('')}/>}
            </Box>
            {filteredPost?.length === 0 ? <Typography>Not a Post Avaliable!</Typography> :
                filteredPost.map((blog) => <BlogItem key={blog.id} id={blog.id} title={blog.title} description={blog.description} shortDescription={blog.shortDescription} date={blog.date} author={blog.author} category={blog.category}/>)}
        </Box>

    )
};

export default Blog;