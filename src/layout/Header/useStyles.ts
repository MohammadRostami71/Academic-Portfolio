import {makeStyles} from '@mui/styles';

const useStyles = makeStyles(() => ({
    headerMainContainer: {
        width: '100%',
        padding: '1rem 2rem',

        '& .Mui-selected': {
            color: '#1270c8 !important'
        }
    }
}));

export default useStyles;