import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    container:{
        width:'100%',
        maxHeight:'100%',
        background: 'tomato',
        '-webkit-transform': 'skew(0deg, -10deg)',
        transform: 'skew(0deg, -10deg)',
        padding: '20rem 0',
        marginTop: '-20rem',
        [theme.breakpoints.down('sm')]: {
            margin:'0',
            '-webkit-transform': 'none',
            padding:'0'
        },
    },
    formBox:{
        '-webkit-transform': 'skew(0deg, 10deg)',
        transform:' skew(0deg, 10deg)',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        borderRadius:'1rem',
        boxShadow:' 0 3px 10px rgb(0 0 0 / 0.2)',
        height:'100%',
        gap:'1rem',
        width:'100%',
        maxWidth:'40rem',
        margin:'2.5rem auto 0',
        padding:'3rem',
        background:'#f6eeee',
        [theme.breakpoints.down('sm')]: {
            margin:'0',
            '-webkit-transform': 'none',
        },

        '& .MuiTypography-root':{
            color:'#a2a2a2'
        }

    }

}));

export default useStyles;