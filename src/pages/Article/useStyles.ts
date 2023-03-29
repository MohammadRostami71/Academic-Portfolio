import { makeStyles } from '@mui/styles';
import theme from "../../theme/theme";

const useStyles = makeStyles((theme) => ({
    container:{
        display:'flex',
        flexDirection:'column',
        width:'100%',
        gap:'0.5rem',
        padding:'0.5rem 0',
    },
    SearchBox:{
        display:'flex',
        margin:'0 0.5rem',
        justifyContent:'space-between',
        alignItems:'center',

        [theme.breakpoints.down('sm')]:{
            flexDirection: 'column',
            width: '100%',
        },

        '& .MuiBox-root':{
            display:'flex',
            alignItems:'center',
            [theme.breakpoints.down('sm')]:{
                width: 'calc(100% - 1rem)',
            },

            '& .MuiSvgIcon-root':{
                cursor:'pointer',
                border:'1px solid #ccc',
                borderRadius:'50%',
                backgroundColor:'#ddd'

            },
        },

        '& .MuiButton-root':{
            [theme.breakpoints.down('sm')]:{
                width: 'calc(100% - 2rem)',
            },
        },

        '& .MuiFormControl-root':{
            [theme.breakpoints.down('sm')]: {
                width:'100%',
            }
        }
    }
}));

export default useStyles;