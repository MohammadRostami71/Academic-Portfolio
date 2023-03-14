import { makeStyles } from '@mui/styles';
import theme from "../../theme/theme";

const useStyles = makeStyles((t) => ({
    container:{
        display:'flex',
        flexDirection:'column',
        padding:'1rem 0'
    },
    categoryBox:{
        display:'flex',
        margin:'0 0.5rem',
        alignItems:'center',

        '& .MuiSvgIcon-root':{
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
    }
}));

export default useStyles;