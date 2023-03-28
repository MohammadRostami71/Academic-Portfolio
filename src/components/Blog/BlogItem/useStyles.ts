import {makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    container:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'calc(100% - 2rem)',
        margin:'1rem',
        cursor:'pointer',
        borderRadius:'1rem',
        border:'1px solid #ccc',
        padding:'1rem',

        '&:hover':{
            boxShadow:'0 3px 10px rgb(0 0 0 / 0.2)'
        },
    },

    content:{
        display:'flex',
        flexDirection:'row-reverse',
        flexShrink:'1',
        alignItems:'center'
    },
    information:{
        display:'flex',
        flexDirection:'column',

        '& .MuiBox-root':{
            display:'flex',
            gap:'0.5rem'
        }
    },
    category:{
        transform: 'rotate(-90deg)',
        [theme.breakpoints.down('sm')]: {
            width:'2rem',
            height:'2rem'
        }
    },
    imageBox:{
        '& img':{
            width:'5rem',
            height:'5rem',
        }
    }
}));

export default useStyles;