import {makeStyles} from "@mui/styles";

const useStyles= makeStyles(() => ({
    container:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        width: '100',

        '& img': {
            minWidth: '5rem',
            minHeight: '5rem',
            margin: '1rem auto 0 !important',
        },

        '& .MuiTypography-root': {
            margin: '1rem 0 !important',
            textAlign: 'center',
            color:'red',
            fontWeight:'700'
        },
    }
}));

export default useStyles;