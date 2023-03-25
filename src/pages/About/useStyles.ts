import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({

    container:{
        display:'flex',
        flexGrow:'1',
    },

    content:{
        display:'flex',
        flexDirection:'column',
        gap:'0.5rem',
        width:'100%',
        height:'100%',
        padding:'1rem',

        '& .MuiTypography-root:nth-child(odd)':{
            color:'#a2a2a2'
        },

        '& .MuiTypography-root:nth-child(even)':{
            paddingLeft:'1.5rem',
            color:'#686565',
            fontWeight:'600'
        }
    },
    cvBox:{}
}));

export default useStyles;