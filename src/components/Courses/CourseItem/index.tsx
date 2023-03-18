import courseTypes from "../../../Types/courseTypes";
import {Box, Typography} from "@mui/material";
import SlideshowIcon from '@mui/icons-material/Slideshow';
import useStyles from "./useStyles";

const CourseItem = ({title,date,position,url}:courseTypes) => {
    const classes = useStyles();

    return(
        <Box className={classes.container}>
               <Box>
                   <Typography variant={"subtitle2"}>{date}</Typography>
                   <Typography variant={"subtitle2"}>{title}</Typography>
                   <Typography variant={"subtitle2"}>{` - (${position})`}</Typography>
               </Box>
                <Box>
                    <SlideshowIcon fontSize={'large'}/>
                </Box>
        </Box>
    )
};

export default CourseItem;