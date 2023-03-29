import {makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    container:{
        display:'flex',
        flexDirection:'column',
        alignItems:'flex-start',
        padding:'1rem',
        maxWidth:'100%',
    },

    articleInformation:{
        display:'flex',
        flexDirection:'column',
        alignItems:'flex-start',
        borderLeft:'4px solid #e9cd9b',
        paddingLeft:'0.5rem',
        opacity:'0.8',

        '& .MuiBox-root ':{
            display:'flex',
            gap:'0.5rem',

            [theme.breakpoints.down('sm')]:{
                flexDirection:'column'
            }
        },

        '&:hover':{
            borderLeft:'4px solid #efa31b',
            cursor:'pointer',
            opacity:'1',

        },
    }
}));

export default useStyles;