import courseTypes from "../../../Types/courseTypes";
import {Box, Typography} from "@mui/material";
import SlideshowIcon from '@mui/icons-material/Slideshow';
import useStyles from "./useStyles";

const CourseItem = ({title,date,position,url}:courseTypes) => {
    const classes = useStyles();

    const showCourseHandler = () => {
        window.open(url, '_blank');
    }

    return(
        <Box className={classes.container}>
               <Box>
                   <Typography variant={"subtitle2"}>{date}</Typography>
                   <Typography variant={"subtitle2"}>{title}</Typography>
                   <Typography variant={"subtitle2"}>{` - (${position})`}</Typography>
               </Box>
            {url?.length > 0 && <Box>
                <SlideshowIcon fontSize={'large'} onClick={showCourseHandler}/>
            </Box>}
        </Box>
    )
};

export default CourseItem;