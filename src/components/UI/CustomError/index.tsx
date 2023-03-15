import {Box, Typography} from "@mui/material";
import useStyles from "./useStyles";

type Props = {
    text?:string, image?:string | undefined
}

const CustomError = ({image,text}:Props) => {
    const classes= useStyles();

    return(
        <Box className={classes.container}>
            {image && <img src={image} alt=' '/>}

            {text && <Typography variant={"subtitle1"}>{text}</Typography>}
        </Box>
    )
};

export default CustomError;