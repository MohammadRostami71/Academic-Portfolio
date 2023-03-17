import {makeStyles} from "@mui/styles";

const useStyles = makeStyles(()=>({
    container:{},

    menuItem:{
        color:'#3c0ad5',
        textDecoration:'none',
        fontWeight:'600',

        '&:hover':{
            color:'#66de40',
        }
    }
}));

export default useStyles;