import React, {useEffect, useState} from "react";
import { user } from "scholarly";
import {toast} from "react-toastify";

import {Box, Button, FormControl, TextField} from "@mui/material";
import {googleScholarUserId} from "../../config/articles";
import {articleType} from "../../Types/articleType";

import CustomError from "../../components/UI/CustomError";
import ArticleItem from "../../components/Articles/ArticleItem";
import useStyles from "./useStyles";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import CustomLoading from "../../components/UI/CustomLoading";

const Article: React.FC = () => {
    const classes= useStyles();
    const [articles,setArticles] = useState<articleType[]>([]);
    const [error,setError] = useState<boolean>(false);
    const [loading,setLoading] = useState<boolean>(false);
    const [userInput,setUserInput] = useState<string>('');

    useEffect(() => {
        setLoading(true)
        user(googleScholarUserId).then((res) => {
            setArticles(res)
        })
            .catch((error) => {
                toast.error(error?.message);
                setError(true)
            }).
            finally(() => setLoading(false))
    },[]);

    const filteredArticled = userInput === '' ? articles : articles.filter(article => article.title.includes(userInput));

    const scholarProfileHandler = ():void => {
        window.open(`https://scholar.google.com/citations?user${googleScholarUserId}&hl=en&oi=ao`,'_blank');
    };

    return(
        <Box className={classes.container}>
            {loading ?<CustomLoading/> : <>
                <Box className={classes.SearchBox}>
                    <Box>
                        <FormControl sx={{m: 1, width: 300}}>
                            <TextField placeholder='search...' value={userInput}
                                       onChange={(event) => setUserInput(event.target.value)} autoComplete='false'/>
                        </FormControl>
                        {userInput !== '' && <CloseOutlinedIcon onClick={() => setUserInput('')}/>}
                    </Box>
                    <Button size={"large"} onClick={scholarProfileHandler} variant={"outlined"}>Google Scholar Profile</Button>
                </Box>

                <Box>
                    {error ? <CustomError text='load publication failed! please try again'/> :filteredArticled.map((article) =>
                        <ArticleItem authors={article.authors} journal={article.journal} numCitations={article.numCitations} title={article.title} year={article.year}/>)}
                </Box>
            </>}
        </Box>
    )
};

export default Article;