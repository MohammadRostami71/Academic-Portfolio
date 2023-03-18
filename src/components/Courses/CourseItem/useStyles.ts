import {makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    container:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        padding:'1rem',
        border:'1px solid #dcdcdc',
        borderRadius:'1rem',
        margin:'0.5rem 2rem',
        cursor:'pointer',

        // @ts-ignore
        [theme.breakpoints.down('sm')]: {
            margin:'0.25rem',
        },

        '&:hover':{
            border:'1px solid #cdcdcd',
        },

        '& .MuiBox-root':{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            gap:'0.25rem',
        }
    },
}));

export default useStyles;