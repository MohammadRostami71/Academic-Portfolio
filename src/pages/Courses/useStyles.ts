import { makeStyles } from '@mui/styles';
import theme from "../../theme/theme";

const useStyles = makeStyles(() => ({
    container:{
        display:'flex',
        flexDirection:'column',
        padding:'1rem 0',

    },

    universityBox:{
        display:'flex',
        margin:'0 0.5rem',
        alignItems:'center',

        '& .MuiSvgIcon-root':{
            cursor:'pointer'
        },

        '& .MuiFormControl-root':{
            [theme.breakpoints.down('sm')]: {
                width:'100%',
            },
            '& .MuiInputBase-root':{
                '& .MuiSelect-select':{
                    padding: '1rem'
                }
            }
        }
    },

    content:{
        padding:'0 1rem',

        '& > .MuiTypography-root:first-child':{
            marginLeft:'1rem',
            marginTop:'1rem',
            fontWeight:'600',
            color:'#3e3e3e'
        }
    }
}));

export default useStyles;