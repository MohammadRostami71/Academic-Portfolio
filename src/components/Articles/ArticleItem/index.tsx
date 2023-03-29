import useStyles from "./useStyles";
import {Box, Typography} from "@mui/material";
import {articleType} from "../../../Types/articleType";

const ArticleItem = ({title,journal,year,numCitations,authors}:articleType) => {
    const classes = useStyles();

    return(
        <Box className={classes.container}>
            <Typography variant={"subtitle1"}>{year}</Typography>
            <Box className={classes.articleInformation}>
                <Typography variant={"h6"}>{title}</Typography>
                <Box>
                    {authors.map((author:string,index:number) => <Typography key={index}>{author}</Typography>)}
                </Box>
                {journal && year &&<Typography variant={"body2"}>{`${journal} - ${year}`}</Typography>}
            </Box>
        </Box>
    )
};

export default ArticleItem;