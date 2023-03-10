import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    layoutContainer:{
        display:'flex',
        flexDirection:'row',
        backgroundColor:'#fff',
        height:'100%',
        maxHeight:'100vh',
    },

    content:{
        display:'flex',
        flexDirection:'column',
        width:'100%',
        flexGrow:'1',
        height:'auto',
    },

    headerContainer:{
        boxShadow:'0 8px 6px -6px rgba(0, 0, 0, 0.2);'
    },

    contentContainer:{
        overflowY: 'auto',
        overflowX: 'hidden',
    },
}));

export default useStyles;