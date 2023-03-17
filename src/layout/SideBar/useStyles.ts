import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    sideBarMainContainer:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center',
        width:'4rem',
        height:'100vh',
        border:'1px solid #ccc',
        padding:'0.5rem 0',

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