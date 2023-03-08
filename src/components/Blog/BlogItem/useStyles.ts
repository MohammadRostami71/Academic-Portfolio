import {makeStyles} from "@mui/styles";

const useStyles = makeStyles(() => ({
    container:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        width:'calc(100% - 2rem)',
        margin:'1rem',
        cursor:'pointer',
        borderRadius:'1rem',
        border:'1px solid #ccc',

        '&:hover':{
            boxShadow:'0 3px 10px rgb(0 0 0 / 0.2)'
        },

        '& .MuiTypography-root:first-child':{
            width:'100%',
            textAlign:'left',
            padding:'1rem'
        },

        '& .MuiTypography-root:nth-child(2)':{
            width:'100%',
            textAlign:'left',
            padding:'1rem'
        },

        '& .MuiTypography-root:last-child':{
            width:'100%',
            textAlign:'right',
            padding:'1rem'
        }
    }
}));

export default useStyles;