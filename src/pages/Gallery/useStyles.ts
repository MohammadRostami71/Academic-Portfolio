import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    container:{
        maxHeight:'100%',

        '& .MuiBox-root':{
            [theme.breakpoints.down('sm')]:{
                width:'calc(100vw - 4rem)'
            }
        }
    },
    thumbnailSlider:{
        maxHeight:'15rem',
        '& .slick-track > *' :{
                 margin: '0 .5rem'
            }
    }
}));

export default useStyles;