import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    sideBarMainContainer:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center',
        width:'4rem',
        height:'100vh',
        borderRight:'1px solid #ccc',

        '& .MuiBox-root:nth-child(2)':{
            display:'flex',
            flexDirection:'column',
            justifyContent:'space-between',
            alignItems:'center',
            gap:'1rem',
            paddingBottom:'3rem',
        }
    }
}));

export default useStyles;