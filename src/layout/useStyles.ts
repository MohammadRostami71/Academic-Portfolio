import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    layoutContainer:{
        display:'flex',
        flexDirection:'row',
        backgroundColor:'#fff',
        height:'100vh',
        maxHeight:'100vh',
    },

    contentContainer:{
        display:'flex',
        flexDirection:'column',
        width:'100%',
        flexGrow:'1',
        height:'auto',
    }
}));

export default useStyles;