import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({

    container:{
        display:'flex',
        flexGrow:'1',
        padding:'0.5rem',

        [theme.breakpoints.down('sm')]:{
            flexDirection:'column',
            gap:'0.5rem',
            width:'calc(100vw - 5rem)',
        },
    },

    content:{
        display:'flex',
        flexDirection:'column',
        flex:'0 0 50%',
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
    cvBox:{
        flex:'0 0 50%',
    }
}));

export default useStyles;