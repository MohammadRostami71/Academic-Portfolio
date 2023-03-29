import {makeStyles} from "@mui/styles";

const useStyles = makeStyles(() => ({
    container:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        minHeight:'calc(100vh - 6rem)'
    }
}));

export default useStyles;