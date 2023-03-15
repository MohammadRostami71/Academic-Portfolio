import {makeStyles} from "@mui/styles";

const useStyles = makeStyles(() => ({
    container:{
        display:'flex',
        flexDirection:'column',
        alignItems:'flex-start',
        justifyContent:'center',
        padding:'1rem',
        gap:'0.5rem',
    },

    categoryTitle:{
        display:'flex',
        justifyContent:'space-between',
        width:'100%',
        alignItems:'center',


        '& .MuiSvgIcon-root':{
            cursor:'pointer'
        },

        '& .MuiTypography-root':{
            background:'#f2eeee',
            padding:'0.25rem 1.5rem',
            borderRadius:'1rem',
            border:'1px solid #ccc',
        }
    },

    info:{
        display:'flex',
        justifyContent:'flex-start',
        alignItems:'center',
        gap:'0.75rem',
        color:'#595959'
    },

    title:{
        width:'100%',
        color:'#1d1c1c'
    },

    imageBox:{
        width:'100%',
        height:'auto',

        '& img':{
            width:'100%',
        }

    }
}));

export default useStyles;